"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/** A plant stem fixed to the right edge. It grows as you scroll and a leaf opens at each quarter of the page. */
export default function GrowthStem() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const leaves = [0.12, 0.34, 0.56, 0.78];
  return (
    <div className="stem" aria-hidden>
      <svg viewBox="0 0 40 400" preserveAspectRatio="none">
        <path d="M20 396 C14 300 26 200 20 4" className="stem-track" />
        <motion.path d="M20 396 C14 300 26 200 20 4" className="stem-grow" style={{ pathLength: p }} />
        {leaves.map((at, i) => (
          <Leaf key={at} at={at} y={396 - at * 392} side={i % 2 ? -1 : 1} progress={p} />
        ))}
      </svg>
    </div>
  );
}

function Leaf({ at, y, side, progress }: { at: number; y: number; side: 1 | -1; progress: ReturnType<typeof useSpring> }) {
  const s = useTransform(progress, [at - 0.02, at + 0.06], [0, 1]);
  const o = useTransform(progress, [at - 0.02, at + 0.03], [0, 1]);
  return (
    <motion.g style={{ scale: s, opacity: o, transformOrigin: `20px ${y}px` }}>
      <path d={`M20 ${y} C${20 + 22 * side} ${y - 18} ${20 + 30 * side} ${y - 4} ${20 + 6 * side} ${y + 6} Z`} className="stem-leaf" />
    </motion.g>
  );
}
