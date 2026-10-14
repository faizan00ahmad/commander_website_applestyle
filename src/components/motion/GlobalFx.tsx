"use client";
import { useEffect } from "react";

/** Delegated pointer effects for every .btn: the fill floods in from the side the pointer entered, and primary buttons lean toward the pointer. */
export default function GlobalFx() {
  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const btn = (t: EventTarget | null) => (t as HTMLElement | null)?.closest?.(".btn") as HTMLElement | null;

    const over = (e: PointerEvent) => {
      const b = btn(e.target);
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--fx", `${((e.clientX - r.left) / r.width) * 100}%`);
      b.style.setProperty("--fy", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    const move = (e: PointerEvent) => {
      if (reduce) return;
      const b = btn(e.target);
      if (!b || !b.classList.contains("primary")) return;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--mx", `${(e.clientX - (r.left + r.width / 2)) * 0.18}px`);
      b.style.setProperty("--my", `${(e.clientY - (r.top + r.height / 2)) * 0.28}px`);
    };
    const out = (e: PointerEvent) => {
      const b = btn(e.target);
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--fx", `${((e.clientX - r.left) / r.width) * 100}%`);
      b.style.setProperty("--fy", `${((e.clientY - r.top) / r.height) * 100}%`);
      b.style.setProperty("--mx", "0px");
      b.style.setProperty("--my", "0px");
    };
    document.addEventListener("pointerover", over);
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerout", out);
    return () => { document.removeEventListener("pointerover", over); document.removeEventListener("pointermove", move); document.removeEventListener("pointerout", out); };
  }, []);
  return null;
}
