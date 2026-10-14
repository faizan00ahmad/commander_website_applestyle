"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Giant COMMANDER wordmark: an outline that fills with colour from left to right as the footer scrolls into view. */
export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 100%", "end 96%"] });
  const clip = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  return (
    <div ref={ref} className="fw" aria-hidden>
      <div className="fw-line fw-out">COMMANDER</div>
      <motion.div className="fw-line fw-fill" style={{ clipPath: clip }}>COMMANDER</motion.div>
    </div>
  );
}
