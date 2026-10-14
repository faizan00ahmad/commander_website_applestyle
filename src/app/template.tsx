"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let firstMount = true; // the intro loader covers the very first page; later navigations get the leaf sweep

/** Re-mounts on every navigation. Two leaf-shaped blades start covering the screen, then sweep diagonally away to uncover the new page. */
export default function Template({ children }: { children: React.ReactNode }) {
  const [sweep, setSweep] = useState(() => !firstMount && typeof window !== "undefined" && !matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    firstMount = false;
    if (!sweep) return;
    const t = setTimeout(() => setSweep(false), 1500);
    return () => clearTimeout(t);
  }, [sweep]);
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: sweep ? 0.35 : 0 }}>
        {children}
      </motion.div>
      {sweep && (
        <div className="leaf-sweep" aria-hidden>
          <motion.i className="blade b2" initial={{ x: "-8%", y: "8%" }} animate={{ x: "130%", y: "-130%" }} transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1], delay: 0.1 }} />
          <motion.i className="blade b1" initial={{ x: "-8%", y: "8%" }} animate={{ x: "130%", y: "-130%" }} transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }} />
        </div>
      )}
    </>
  );
}
