"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "", plain = false }: { value: number; suffix?: string; plain?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isYear = value > 1900 && value < 2100;
  const [n, setN] = useState(isYear ? value : 0);
  useEffect(() => {
    if (isYear) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const dur = 1800;
      const tick = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, isYear]);
  return <span ref={ref}>{plain ? n : n.toLocaleString("en-US")}{suffix}</span>;
}
