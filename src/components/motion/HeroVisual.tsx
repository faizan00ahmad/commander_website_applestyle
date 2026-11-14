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
          poster={asset("/video/hero-poster.jpg")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setLoaded(true)}
        >
          <source src={asset("/video/hero-bg.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
    </div>
  );
}
