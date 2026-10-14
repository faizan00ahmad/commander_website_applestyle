"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/** Inertial scrolling on mouse/trackpad devices. Touch and reduced-motion users keep native scrolling. */
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = matchMedia("(pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3.2), smoothWheel: true, anchors: true });
    window.__lenis = lenis;
    // The intro loader owns scrolling until it finishes.
    if (document.documentElement.dataset.intro !== "seen" && !window.__introDone) lenis.stop();
    let raf = 0;
    const tick = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); window.__lenis = undefined; };
  }, []);

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
