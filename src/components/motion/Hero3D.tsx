"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

/**
 * "Crop Shield": a looping 14-second story about crop protection.
 *  0-3s   stressed, drooping wheat; pests closing in
 *  3-8s   an agri-drone sprays a protective mist; a glowing healing front sweeps outward, the crop greens, pests are neutralised
 *  8-12s  healthy crop ripens to gold under a protective dome
 *  12-14s pressure builds again, the loop restarts
 * The wheat is real geometry (bending stem, arching leaves, a spike of grains, awns) animated entirely on the GPU,
 * so hundreds of plants cost no CPU per frame. Live numbers are reported to the page so the HUD matches the scene.
 */
export type HeroStats = { health: number; pests: number };

const LOOP = 14;
const R = 3.5; // field radius
const PLANTS = 340;
const PESTS = 30;
const MIST = 170;
const DUST = 130;

const ease = (x: number) => { const t = Math.min(1, Math.max(0, x)); return t * t * (3 - 2 * t); };
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const hash = (n: number) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };

/* ---------- procedural wheat plant (built once, shared by every instance) ---------- */
function tagged(g: THREE.BufferGeometry, part: number, tone: number) {
  const ng = g.index ? g.toNonIndexed() : g;
  const n = ng.attributes.position.count;
  ng.deleteAttribute("uv");
  ng.deleteAttribute("normal");
  ng.setAttribute("aPart", new THREE.BufferAttribute(new Float32Array(n).fill(part), 1));
  ng.setAttribute("aTone", new THREE.BufferAttribute(new Float32Array(n).fill(tone), 1));
  ng.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  ng.computeVertexNormals();
  return ng;
}

function leafGeometry(angle: number, y0: number, len: number, width: number, tone: number) {
  const seg = 7;
  const pos: number[] = [];
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg;
    pts.push(new THREE.Vector3(Math.cos(angle) * len * t * 0.92, y0 + len * 0.62 * t - len * 0.75 * t * t, Math.sin(angle) * len * t * 0.92));
  }
  const up = new THREE.Vector3(0, 1, 0);
  const rows: [THREE.Vector3, THREE.Vector3][] = pts.map((p, i) => {
    const dir = pts[Math.min(seg, i + 1)].clone().sub(pts[Math.max(0, i - 1)]).normalize();
    const side = new THREE.Vector3().crossVectors(dir, up).normalize();
    const t = i / seg;
    const w = width * Math.pow(Math.sin(Math.PI * Math.min(0.98, t * 0.92 + 0.04)), 0.6) * (1 - t * 0.35) * (i === seg ? 0.05 : 1);
    return [p.clone().addScaledVector(side, w), p.clone().addScaledVector(side, -w)];
  });
  for (let i = 0; i < seg; i++) {
    const [a1, b1] = rows[i], [a2, b2] = rows[i + 1];
    pos.push(a1.x, a1.y, a1.z, b1.x, b1.y, b1.z, a2.x, a2.y, a2.z, b1.x, b1.y, b1.z, b2.x, b2.y, b2.z, a2.x, a2.y, a2.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  return tagged(g, 1, tone);
}

function buildPlant() {
  const parts: THREE.BufferGeometry[] = [];
  // stem: gently S-curved, ends at the base of the ear
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.012, 0.3, 0.004), new THREE.Vector3(-0.008, 0.62, -0.004), new THREE.Vector3(0.006, 0.8, 0.0)]);
  parts.push(tagged(new THREE.TubeGeometry(curve, 6, 0.011, 4, false), 0, 0.5));
  // three arching leaf blades at staggered nodes
  [[0.3, 0.14, 0.5, 0.034], [2.5, 0.3, 0.46, 0.032], [4.5, 0.46, 0.36, 0.028]].forEach(([a, y, l, w], i) => parts.push(leafGeometry(a, y, l, w, i / 2)));
  // ear: two staggered rows of grains spiralling up the spike
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let k = 0; k < 13; k++) {
    for (let s = 0; s < 2; s++) {
      const y = 0.78 + k * 0.0175;
      const a = k * 0.85 + s * Math.PI;
      const rad = 0.02 * (1 - k * 0.018);
      const g = new THREE.OctahedronGeometry(1, 0);
      e.set(0.35 * Math.cos(a), a, 0.35 * Math.sin(a));
      q.setFromEuler(e);
      m.compose(new THREE.Vector3(Math.cos(a) * rad + 0.006, y, Math.sin(a) * rad), q, new THREE.Vector3(0.0105, 0.03 * (1 - k * 0.02), 0.0095));
      g.applyMatrix4(m);
      parts.push(tagged(g, 2, hash(k * 3 + s)));
    }
  }
  // awns: thin bristles fanning from the top of the ear
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const baseY = 0.9 + hash(i) * 0.1;
    const x0 = Math.cos(a) * 0.014 + 0.006, z0 = Math.sin(a) * 0.014;
    const tipX = x0 + Math.cos(a) * 0.06, tipZ = z0 + Math.sin(a) * 0.06, tipY = baseY + 0.19 + hash(i + 4) * 0.05;
    const pos = new Float32Array([x0 - 0.003, baseY, z0, x0 + 0.003, baseY, z0, tipX, tipY, tipZ]);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    parts.push(tagged(g, 3, 0.5));
  }
  return mergeGeometries(parts, false)!;
}

/* ---------- GPU-animated wheat material ---------- */
type U = Record<string, THREE.IUniform>;
function wheatMaterial(uniforms: U) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", `#include <common>
        attribute float aPart; attribute float aTone;
        uniform float uTime, uWave, uHeal, uRipe;
        uniform vec3 uGreen, uGold, uStress, uStressEar, uGlow;`)
      .replace("#include <color_vertex>", `
        vec4 ip4 = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float dist = length(ip4.xz);
        float healed = 1.0 - smoothstep(uWave - 1.1, uWave, dist);
        float front = smoothstep(uWave - 1.5, uWave - 0.55, dist) * (1.0 - smoothstep(uWave - 0.55, uWave + 0.05, dist)) * step(0.0, uWave);
        float local = mix(0.12, 1.0, healed * uHeal);
        float droop = (1.0 - local) * 0.62;
        float y01 = clamp(position.y, 0.0, 1.0);
        vec3 col;
        if (aPart < 0.5) {
          col = mix(uStress * 0.9, uGreen * mix(0.65, 1.0, y01), local);
        } else if (aPart < 1.5) {
          col = mix(uStress * (0.8 + 0.3 * aTone), uGreen * (0.85 + 0.35 * aTone), local);
        } else if (aPart < 2.5) {
          vec3 unripe = mix(uStressEar, uGreen * 1.25 + vec3(0.08, 0.1, 0.0), local);
          col = mix(unripe, uGold * (0.85 + 0.3 * aTone), uRipe * local);
        } else {
          col = mix(uStressEar, uGold * 1.1, uRipe * local * 0.8 + 0.1);
        }
        col += uGlow * front * 1.6;
        vColor = col;`)
      .replace("#include <begin_vertex>", `
        vec3 transformed = vec3(position);
        float bend = y01 * y01;
        float gust = sin(uTime * 0.45 + ip4.x * 0.28 + ip4.z * 0.21) * 0.5 + 0.5;
        float wave = sin(uTime * 1.55 + ip4.x * 0.9 + ip4.z * 0.6) * (0.05 + 0.07 * gust)
                   + sin(uTime * 0.8 + ip4.x * 0.35 - ip4.z * 0.2) * 0.04;
        transformed.x += bend * (wave + droop * 0.5);
        transformed.z += bend * (cos(uTime * 1.2 + ip4.z * 0.7) * 0.03 + droop * 0.18);
        transformed.y -= bend * bend * droop * 0.22;
        if (aPart > 0.5 && aPart < 1.5) {
          transformed.y += sin(uTime * 2.4 + ip4.x * 1.7 + position.x * 20.0) * 0.012 * (1.0 + gust);
        }`);
  };
  return mat;
}

/* ---------- ground: furrowed soil disc ---------- */
function soilGeometry(dark: boolean) {
  const rings = 44, segs = 110, rad = R + 0.95;
  const pos: number[] = [], cols: number[] = [], idx: number[] = [];
  const base = new THREE.Color(dark ? "#2f2217" : "#a07e57"), furrow = new THREE.Color(dark ? "#1d150e" : "#7d5d3d");
  for (let r = 0; r <= rings; r++) {
    for (let s = 0; s <= segs; s++) {
      const rr = (r / rings) * rad, a = (s / segs) * Math.PI * 2;
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      const row = Math.sin(x * 5.2 + Math.sin(z * 0.9) * 0.6);
      const h = row * 0.028 + Math.sin(x * 1.7 + z * 1.3) * 0.025 + (hash(r * 97 + s) - 0.5) * 0.012;
      pos.push(x, h, z);
      const c = base.clone().lerp(furrow, clamp01(0.5 - row * 0.5 + (hash(r * 31 + s * 7) - 0.5) * 0.25));
      c.multiplyScalar(1 - Math.pow(r / rings, 4) * 0.55);
      cols.push(c.r, c.g, c.b);
    }
  }
  for (let r = 0; r < rings; r++) for (let s = 0; s < segs; s++) {
    const a = r * (segs + 1) + s, b = a + segs + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(cols), 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function pestGeometry() {
  const parts: THREE.BufferGeometry[] = [];
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const add = (g: THREE.BufferGeometry, p: [number, number, number], rot: [number, number, number], sc: [number, number, number], c: number) => {
    e.set(...rot); q.setFromEuler(e); m.compose(new THREE.Vector3(...p), q, new THREE.Vector3(...sc)); g.applyMatrix4(m);
    const ng = g.index ? g.toNonIndexed() : g;
    ng.deleteAttribute("uv");
    const n = ng.attributes.position.count;
    ng.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(c), 3));
    parts.push(ng);
  };
  add(new THREE.SphereGeometry(1, 8, 6), [0, 0, 0], [0, 0, 0], [0.7, 0.55, 1.1], 1); // body
  add(new THREE.SphereGeometry(1, 6, 5), [0, 0.1, 0.95], [0, 0, 0], [0.42, 0.38, 0.4], 0.55); // head
  add(new THREE.SphereGeometry(1, 6, 4), [0.75, 0.5, 0.1], [0, 0, -0.5], [0.85, 0.05, 0.38], 1.6); // wings
  add(new THREE.SphereGeometry(1, 6, 4), [-0.75, 0.5, 0.1], [0, 0, 0.5], [0.85, 0.05, 0.38], 1.6);
  return mergeGeometries(parts, false)!;
}

function Field({ green, gold, dark, onFrame }: { green: string; gold: string; dark: boolean; onFrame: (h: number, p: number) => void }) {
  const plants = useRef<THREE.InstancedMesh>(null);
  const pests = useRef<THREE.InstancedMesh>(null);
  const mist = useRef<THREE.InstancedMesh>(null);
  const dust = useRef<THREE.Points>(null);
  const dome = useRef<THREE.Mesh>(null);
  const pulse = useRef<THREE.Mesh>(null);
  const front = useRef<THREE.Mesh>(null);
  const cone = useRef<THREE.Mesh>(null);
  const drone = useRef<THREE.Group>(null);
  const rotors = useRef<THREE.Group>(null);
  const last = useRef(0);
  const d = useRef(new THREE.Object3D());
  const col = useRef(new THREE.Color());
  const red = useRef(new THREE.Color("#e0323c"));
  const mint = useRef(new THREE.Color("#8cf5be"));

  const uniforms = useRef<U>({
    uTime: { value: 0 }, uWave: { value: -1 }, uHeal: { value: 1 }, uRipe: { value: 0 },
    uGreen: { value: new THREE.Color(green) }, uGold: { value: new THREE.Color(gold) },
    uStress: { value: new THREE.Color("#a99a3a") }, uStressEar: { value: new THREE.Color("#c5bd7c") }, uGlow: { value: new THREE.Color("#58f0a4") },
  });
  useEffect(() => { (uniforms.current.uGreen.value as THREE.Color).set(green); (uniforms.current.uGold.value as THREE.Color).set(gold); }, [green, gold]);

  const plantGeo = useMemo(buildPlant, []);
  const wheatMat = useMemo(() => wheatMaterial(uniforms.current), []);
  const soilGeo = useMemo(() => soilGeometry(dark), [dark]);
  const pestGeo = useMemo(pestGeometry, []);
  const mistState = useRef(Array.from({ length: MIST }, (_, i) => ({ ox: 0, oy: 0, oz: 0, vx: 0, vy: 0, vz: 0, born: -10 - i * 0.02, life: 1.0 + hash(i) * 0.6 })));
  const dustGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(DUST * 3), 3));
    return g;
  }, []);

  // place the plants once; the shader does all the animation
  useEffect(() => {
    const m = plants.current;
    if (!m) return;
    const o = new THREE.Object3D();
    for (let i = 0; i < PLANTS; i++) {
      const r = Math.sqrt((i + 0.5) / PLANTS) * R + (hash(i) - 0.5) * 0.16;
      const a = i * 2.39996 + hash(i + 9) * 0.35;
      const h = 1.45 + hash(i + 3) * 0.75;
      const w = 0.9 + hash(i + 6) * 0.35;
      o.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      o.rotation.set(0, hash(i + 12) * 6.28, 0);
      o.scale.set(w, h, w);
      o.updateMatrix();
      m.setMatrixAt(i, o.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  }, []);

  const stones = useMemo(() => Array.from({ length: 70 }, (_, i) => {
    const a = hash(i + 200) * 6.28, r = Math.sqrt(hash(i + 300)) * (R + 0.7);
    return { x: Math.cos(a) * r, z: Math.sin(a) * r, s: 0.04 + hash(i + 400) * 0.08 };
  }), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const u = t % LOOP;
    const o = d.current, c = col.current;

    const waveR = u < 3 ? -1 : ease((u - 3) / 5) * (R + 1.5);
    const H = u < 12 ? 0.5 + 0.5 * Math.min(1, Math.pow(Math.max(0, waveR) / R, 2)) : 1 - 0.5 * ease((u - 12) / 2);
    const heal = u < 12 ? 1 : 1 - ease((u - 12) / 2);
    const ripe = u < 8.5 ? 0 : u < 12 ? ease((u - 8.5) / 3) : 1 - ease((u - 12) / 1.6);
    const un = uniforms.current;
    un.uTime.value = t; un.uWave.value = waveR; un.uHeal.value = heal; un.uRipe.value = ripe;

    // drone: arrives, circles while spraying, leaves
    const droneIn = ease((u - 2.2) / 1.2) * (1 - ease((u - 8.3) / 1.2));
    const spraying = u > 3.2 && u < 8.2;
    const ang = -0.6 + (u - 3) * 0.55;
    const dx = Math.cos(ang) * 1.7 + (1 - droneIn) * 7, dz = Math.sin(ang) * 1.7, dy = 3.5 + Math.sin(t * 1.6) * 0.06;
    if (drone.current) {
      drone.current.visible = droneIn > 0.01;
      drone.current.position.set(dx, dy, dz);
      drone.current.rotation.set(0.08, -ang + 1.2, Math.sin(t * 1.2) * 0.05);
    }
    if (rotors.current) rotors.current.rotation.y = t * 40;
    if (cone.current) {
      cone.current.visible = spraying && droneIn > 0.5;
      (cone.current.material as THREE.MeshBasicMaterial).opacity = 0.06 + 0.03 * Math.sin(t * 9);
    }

    // healing front ring on the ground
    if (front.current) {
      front.current.visible = waveR > 0.2 && u < 9.3;
      front.current.scale.setScalar(Math.max(0.01, waveR - 0.3));
      (front.current.material as THREE.MeshBasicMaterial).opacity = 0.75 * (1 - ease((u - 8) / 1.3));
    }

    // pests: hover over the crop, turn mint when neutralised, then vanish
    let alive = 0;
    const pm = pests.current;
    if (pm) {
      for (let i = 0; i < PESTS; i++) {
        const a0 = hash(i + 40) * 6.28, r0 = 0.6 + hash(i + 70) * (R - 0.8);
        const spawn = u >= 12.5 ? ease((u - 12.5) / 1.5) : 1;
        const dieAt = 3.8 + (i / PESTS) * 3.6;
        const dying = u > dieAt && u < 12.5;
        const dead = u > dieAt + 0.55 && u < 12.5;
        const f = dead ? 1 : dying ? (u - dieAt) / 0.55 : 0;
        const k = dead ? 0 : dying ? 1 - f : spawn;
        const swirl = a0 + t * (0.22 + hash(i) * 0.28);
        const rr = r0 + Math.sin(t * 1.1 + i) * 0.25 + (1 - Math.min(1, u / 2.6)) * 2.2;
        const py = 0.95 + hash(i + 11) * 1.1 + Math.sin(t * 7 + i) * 0.05 + (dying ? f * 0.9 : 0);
        o.position.set(Math.cos(swirl) * rr, py, Math.sin(swirl) * rr);
        o.rotation.set(Math.sin(t * 5 + i) * 0.25, -swirl + Math.PI / 2, 0);
        o.scale.setScalar(0.1 * Math.max(0.0001, k));
        o.updateMatrix();
        pm.setMatrixAt(i, o.matrix);
        c.copy(red.current).lerp(mint.current, ease(f));
        pm.setColorAt(i, c);
        if (k > 0.5) alive++;
      }
      pm.instanceMatrix.needsUpdate = true;
      if (pm.instanceColor) pm.instanceColor.needsUpdate = true;
    }

    // mist from the drone
    const mm = mist.current;
    if (mm) {
      for (let i = 0; i < MIST; i++) {
        const m = mistState.current[i];
        if (t - m.born > m.life && spraying && droneIn > 0.5) {
          m.ox = dx + (hash(i + t) - 0.5) * 0.5; m.oy = dy - 0.3; m.oz = dz + (hash(i * 3 + t) - 0.5) * 0.5;
          m.vx = (hash(i * 7 + t) - 0.5) * 1.1; m.vy = -1.7 - hash(i * 5 + t) * 0.9; m.vz = (hash(i * 11 + t) - 0.5) * 1.1;
          m.born = t;
        }
        const age = t - m.born;
        if (age < 0 || age > m.life) { o.scale.setScalar(0.0001); o.position.set(0, -9, 0); }
        else {
          const f = age / m.life;
          o.position.set(m.ox + m.vx * age, Math.max(0.05, m.oy + m.vy * age), m.oz + m.vz * age);
          o.scale.setScalar(0.05 * (1 - f * 0.6) * Math.min(1, age * 8));
        }
        o.rotation.set(0, 0, 0);
        o.updateMatrix();
        mm.setMatrixAt(i, o.matrix);
      }
      mm.instanceMatrix.needsUpdate = true;
    }

    // pollen drifting up through the field
    const dp = dust.current;
    if (dp) {
      const attr = dp.geometry.attributes.position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      for (let i = 0; i < DUST; i++) {
        const sp = 0.12 + hash(i) * 0.2;
        const yy = (hash(i + 1) * 3.4 + t * sp) % 3.4;
        const a = hash(i + 2) * 6.28 + t * 0.05;
        const rr = Math.sqrt(hash(i + 3)) * (R + 0.4);
        arr[i * 3] = Math.cos(a) * rr + Math.sin(t * 0.7 + i) * 0.1;
        arr[i * 3 + 1] = 0.15 + yy;
        arr[i * 3 + 2] = Math.sin(a) * rr;
      }
      attr.needsUpdate = true;
    }

    // protective dome + ground pulse
    const domeOp = u < 7.6 ? 0 : u < 9 ? ease((u - 7.6) / 1.4) : u < 11.5 ? 1 : 1 - ease((u - 11.5) / 1);
    if (dome.current) {
      (dome.current.material as THREE.MeshBasicMaterial).opacity = domeOp * (0.15 + 0.06 * Math.sin(t * 2.2));
      dome.current.visible = domeOp > 0.01;
      dome.current.scale.setScalar(0.96 + 0.04 * ease((u - 7.6) / 1.4));
    }
    if (pulse.current) {
      const pu = (u - 8.0) / 1.8;
      pulse.current.visible = pu > 0 && pu < 1;
      pulse.current.scale.setScalar(0.2 + pu * 1.15);
      (pulse.current.material as THREE.MeshBasicMaterial).opacity = (1 - pu) * 0.7;
    }

    if (t - last.current > 0.12) { last.current = t; onFrame(H, alive / PESTS); }
  });

  return (
    <group>
      <mesh geometry={soilGeo}><meshStandardMaterial vertexColors roughness={1} /></mesh>
      {[1.4, 2.6, R + 0.55].map((r) => (
        <mesh key={r} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
          <ringGeometry args={[r - 0.008, r + 0.008, 96]} />
          <meshBasicMaterial color={green} transparent opacity={0.22} />
        </mesh>
      ))}
      {stones.map((s, i) => (
        <mesh key={i} position={[s.x, s.s * 0.35, s.z]} scale={[s.s, s.s * 0.6, s.s * 0.8]} rotation={[0, i, 0]}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={dark ? "#52504b" : "#a8a49a"} roughness={0.95} />
        </mesh>
      ))}

      <instancedMesh ref={plants} args={[plantGeo, wheatMat, PLANTS]} frustumCulled={false} />

      <instancedMesh ref={pests} args={[pestGeo, undefined, PESTS]} frustumCulled={false}>
        <meshStandardMaterial vertexColors roughness={0.45} emissive="#7a0f18" emissiveIntensity={0.35} />
      </instancedMesh>

      <instancedMesh ref={mist} args={[undefined, undefined, MIST]} frustumCulled={false}>
        <sphereGeometry args={[1, 8, 6]} />
        <meshBasicMaterial color="#9ff5c4" transparent opacity={0.7} depthWrite={false} blending={THREE.AdditiveBlending} />
      </instancedMesh>
      <points ref={dust} geometry={dustGeo} frustumCulled={false}>
        <pointsMaterial color={gold} size={0.05} sizeAttenuation transparent opacity={0.65} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      <group ref={drone} visible={false} scale={1.7}>
        <mesh><boxGeometry args={[0.46, 0.1, 0.34]} /><meshStandardMaterial color="#e8edf5" metalness={0.3} roughness={0.35} /></mesh>
        <mesh position={[0, -0.12, 0]}><cylinderGeometry args={[0.12, 0.1, 0.16, 16]} /><meshStandardMaterial color={green} roughness={0.4} /></mesh>
        <mesh position={[0, -0.22, 0]}><coneGeometry args={[0.05, 0.1, 12]} /><meshStandardMaterial color="#cfd6e2" /></mesh>
        <mesh><boxGeometry args={[1.0, 0.03, 0.05]} /><meshStandardMaterial color="#222a38" /></mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}><boxGeometry args={[1.0, 0.03, 0.05]} /><meshStandardMaterial color="#222a38" /></mesh>
        <group ref={rotors}>
          {[[0.5, 0], [-0.5, 0], [0, 0.5], [0, -0.5]].map(([x, z], i) => (
            <mesh key={i} position={[x, 0.06, z]}><cylinderGeometry args={[0.2, 0.2, 0.008, 24]} /><meshBasicMaterial color="#ffffff" transparent opacity={0.28} /></mesh>
          ))}
        </group>
        <mesh position={[0, 0.07, 0.18]}><sphereGeometry args={[0.025, 8, 8]} /><meshBasicMaterial color={green} /></mesh>
        <mesh ref={cone} position={[0, -1.15, 0]} visible={false}>
          <coneGeometry args={[0.62, 1.9, 28, 1, true]} />
          <meshBasicMaterial color="#8cf5be" transparent opacity={0.07} side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
      </group>

      <mesh ref={front} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.08, 0]} visible={false}>
        <ringGeometry args={[0.93, 1, 128]} />
        <meshBasicMaterial color="#6af7b0" transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh ref={dome}>
        <sphereGeometry args={[R + 0.35, 56, 28, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial color={green} transparent opacity={0} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      <mesh ref={pulse} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.09, 0]} visible={false}>
        <ringGeometry args={[R * 0.94, R, 96]} />
        <meshBasicMaterial color={green} transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, pointer.x * 0.5 + clock.elapsedTime * 0.05, 0.05);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -pointer.y * 0.08, 0.05);
  });
  return <group ref={g}>{children}</group>;
}

export default function Hero3D({ green, gold, dark = true, onStats }: { green: string; gold: string; dark?: boolean; onStats?: (s: HeroStats) => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className="h3d">
      <Canvas camera={{ position: [0, 5.6, 11.4], fov: 34 }} onCreated={({ camera }) => camera.lookAt(0, 0.7, 0)} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} frameloop={visible ? "always" : "never"}>
        <hemisphereLight args={["#fff4e0", dark ? "#1b2a1f" : "#cfd8c4", 0.85]} />
        <directionalLight position={[5, 7, 4]} intensity={1.9} color="#fff1dc" />
        <directionalLight position={[-6, 2.2, -5]} intensity={2.6} color="#ffd08a" />
        <pointLight position={[-4, 2, 3]} intensity={12} color={green} />
        <Rig>
          <Field green={green} gold={gold} dark={dark} onFrame={(h, p) => onStats?.({ health: h, pests: p })} />
        </Rig>
      </Canvas>
    </div>
  );
}
