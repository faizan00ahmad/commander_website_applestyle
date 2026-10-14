"use client";
import { useEffect, useState } from "react";

/** True when rich motion is appropriate: no reduced-motion preference, a fine pointer (mouse/trackpad) and a wide enough screen. */
export function useMotionOk(minWidth = 0) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(pointer: fine)");
    const update = () => setOk(!reduce.matches && fine.matches && innerWidth >= minWidth);
    update();
    addEventListener("resize", update);
    reduce.addEventListener("change", update);
    return () => { removeEventListener("resize", update); reduce.removeEventListener("change", update); };
  }, [minWidth]);
  return ok;
}

/** True once the intro loader has finished (or was skipped / already seen this session). */
export function useIntroDone() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (window.__introDone || document.documentElement.dataset.intro === "seen") { setDone(true); return; }
    const on = () => setDone(true);
    window.addEventListener("intro-done", on);
    return () => window.removeEventListener("intro-done", on);
  }, []);
  return done;
}
