"use client";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

export default function HeroVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState >= 2) setLoaded(true);
    v.play().catch(() => {});
  }, []);

  return (
    <div className="hero-video-wrap">
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
      <div className="hero-overlay" />
    </div>
  );
}
