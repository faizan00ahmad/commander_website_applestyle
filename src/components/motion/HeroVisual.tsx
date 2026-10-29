"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { asset } from "@/lib/asset";

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setLoaded(true);
    v.play().catch(() => {});
  }, []);

  return (
    <motion.div ref={ref} className="hero-video-wrap" style={{ opacity }}>
      <div className={`hero-video-zoom${loaded ? " zooming" : ""}`}>
        <video
          ref={videoRef}
          className={`hero-video${loaded ? " loaded" : ""}`}
          src={asset("/img/hero-video.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setLoaded(true)}
        />
      </div>
      <div className="hero-video-overlay" />
    </motion.div>
  );
}
