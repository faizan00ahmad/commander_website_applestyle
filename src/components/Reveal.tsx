"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: 0 | 1 | 2 | 3; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.01, rootMargin: "0px 0px 80px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${delay ? "d" + delay : ""} ${shown ? "in" : ""} ${className}`}>{children}</div>;
}
