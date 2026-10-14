"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import CropScene from "@/components/CropScene";
import { useIntroDone, useMotionOk } from "./useMotionOk";
import type { HeroStats } from "./Hero3D";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

function webglOk() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch { return false; }
}

function themeInfo() {
  const root = document.documentElement;
  const s = getComputedStyle(root);
  return { green: s.getPropertyValue("--green").trim() || "#2bc365", gold: s.getPropertyValue("--grain").trim() || "#ffd658", dark: root.dataset.theme !== "light" };
}

/** Hero artwork. Wide screens with a mouse and WebGL get the 3D "Crop Shield" story (loaded on demand) with a live
 *  crop-health HUD; everything else keeps the lightweight SVG scene. Both drift gently with scroll and pointer. */
export default function HeroVisual() {
  const ok = useMotionOk(1024);
  const intro = useIntroDone();
  const [use3d, setUse3d] = useState(false);
  const [theme, setTheme] = useState({ green: "#2bc365", gold: "#ffd658", dark: true });
  const [stats, setStats] = useState<HeroStats>({ health: 0.5, pests: 1 });
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onStats = useCallback((s: HeroStats) => setStats(s), []);

  useEffect(() => {
    if (!ok || !intro || !webglOk()) { setUse3d(false); return; }
    const t = setTimeout(() => setUse3d(true), 250);
    return () => clearTimeout(t);
  }, [ok, intro]);

  useEffect(() => {
    setTheme(themeInfo());
    const mo = new MutationObserver(() => setTheme(themeInfo()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    if (!ok) return;
    const move = (e: PointerEvent) => setTilt({ x: (e.clientX / innerWidth - 0.5) * 14, y: (e.clientY / innerHeight - 0.5) * 10 });
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, [ok]);

  const health = Math.round(stats.health * 100);
  const pests = Math.round(stats.pests * 100);
  const state = stats.health > 0.97 ? "Protected" : stats.health > 0.6 ? "Recovering" : "Under attack";

  return (
    <motion.div ref={ref} className="hero-visual" style={{ y, scale }}>
      {use3d ? (
        <div className="scene scene-3d">
          <Hero3D green={theme.green} gold={theme.gold} dark={theme.dark} onStats={onStats} />
          <div className="hud hud-health" data-state={state}>
            <small>Crop health</small>
            <strong>{health}<i>%</i></strong>
            <span className="hud-bar"><b style={{ width: `${health}%` }} /></span>
            <em>{state}</em>
          </div>
          <div className="hud hud-pests">
            <small>Pest pressure</small>
            <strong>{pests}<i>%</i></strong>
            <span className="hud-bar warn"><b style={{ width: `${pests}%` }} /></span>
          </div>
          <div className="float-chip" style={{ bottom: "7%", left: "2%", animationDelay: "-2s" }}><b>ISO 17025</b> R&amp;D certified</div>
          <div className="float-chip" style={{ bottom: "7%", right: "0", animationDelay: "-4s" }}><b>50</b> territorial offices</div>
        </div>
      ) : (
        <div className="hv-parallax" style={ok ? { transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0)` } : undefined}>
          <CropScene />
        </div>
      )}
    </motion.div>
  );
}
