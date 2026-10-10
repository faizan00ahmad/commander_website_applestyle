"use client";
import { useEffect, useRef } from "react";

// Drifting seeds / leaves / pollen in brand green and blue, rising slowly.
export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => { w = innerWidth; h = innerHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize();
    addEventListener("resize", resize);
    const count = innerWidth < 700 ? 38 : 80;
    const ps = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2.2 + 0.5,
      vy: -(Math.random() * 0.35 + 0.08), ph: Math.random() * 6.28, sw: Math.random() * 0.6 + 0.2,
      leaf: Math.random() < 0.18, col: Math.random() < 0.7 ? "111,210,74" : "120,130,255",
    }));
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y += reduce ? 0 : p.vy;
        const x = p.x + Math.sin((t / 1800) * p.sw + p.ph) * 22;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        const a = 0.25 + 0.35 * Math.abs(Math.sin(t / 2200 + p.ph));
        ctx.fillStyle = `rgba(${p.col},${a})`;
        ctx.beginPath();
        if (p.leaf) ctx.ellipse(x, p.y, p.r * 3, p.r * 1.3, Math.sin(t / 1500 + p.ph), 0, 6.28);
        else ctx.arc(x, p.y, p.r, 0, 6.28);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="particles" aria-hidden />;
}
