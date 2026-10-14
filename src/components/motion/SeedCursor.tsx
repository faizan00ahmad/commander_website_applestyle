"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Mode = "idle" | "link" | "view" | "open" | "send";
const LABEL: Partial<Record<Mode, string>> = { view: "VIEW", open: "OPEN", send: "SEND" };

/** A small seed that turns toward the direction of travel, trailed by a soft ring that names what you are hovering. */
export default function SeedCursor() {
  const [on, setOn] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const angle = useMotionValue(-45);
  const rx = useSpring(x, { stiffness: 170, damping: 20, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 170, damping: 20, mass: 0.5 });
  const last = useRef({ x: 0, y: 0, a: -45 });

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("seed-cursor");
    const move = (e: PointerEvent) => {
      setOn(true);
      x.set(e.clientX);
      y.set(e.clientY);
      const dx = e.clientX - last.current.x, dy = e.clientY - last.current.y;
      if (Math.hypot(dx, dy) > 3) {
        // shortest-path rotation so the seed never spins the long way round
        const target = (Math.atan2(dy, dx) * 180) / Math.PI;
        let d = target - last.current.a;
        d = ((d + 540) % 360) - 180;
        last.current.a += d * 0.35;
        angle.set(last.current.a);
        last.current.x = e.clientX; last.current.y = e.clientY;
      }
      const t = e.target as HTMLElement | null;
      if (!t || !t.closest) return;
      if (t.closest(".gallery button, .lightbox img, .cert, .reel-frame")) setMode("view");
      else if (t.closest("button[type=submit]")) setMode("send");
      else if (t.closest(".card, .tl-panel a")) setMode("open");
      else if (t.closest("a, button, input, textarea, select, label, [data-magnetic]")) setMode("link");
      else setMode("idle");
    };
    const leave = () => setOn(false);
    addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => { removeEventListener("pointermove", move); document.removeEventListener("pointerleave", leave); document.documentElement.classList.remove("seed-cursor"); };
  }, [x, y, angle]);

  if (!on) return null;
  const size = mode === "idle" ? 34 : mode === "link" ? 58 : 84;
  return (
    <>
      <motion.div className="seed" style={{ x, y, rotate: angle }} aria-hidden>
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M2 12C6 4 16 3 22 12 16 21 6 20 2 12Z" fill="var(--green)" stroke="var(--hi)" strokeWidth="1.4" /><path d="M5 12H19" stroke="var(--hi)" strokeWidth="1.2" opacity=".7" /></svg>
      </motion.div>
      <motion.div className="seed-ring" style={{ x: rx, y: ry }} animate={{ width: size, height: size, opacity: mode === "idle" ? 0.5 : 1 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} data-mode={mode} aria-hidden>
        {LABEL[mode]}
      </motion.div>
    </>
  );
}
