"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import { stats } from "@/content/data";

const slides = [
  { img: "/img/hero-office.jpg", label: "Head Office", place: "Multan" },
  { img: "/img/hero-lpg.jpg", label: "LPG Loading Yard", place: "Commander Petrogas" },
  { img: "/img/hero-plant.jpg", label: "LPG Plant Gate", place: "Industrial Estate, Multan" },
  { img: "/img/hero-lab.jpg", label: "R&D Laboratory", place: "ISO 17025" },
  { img: "/img/hero-formulation.jpg", label: "Formulation Plant", place: "Commander Agro" },
];

export default function Hero({ videoSrc }: { videoSrc?: string }) {
  const [i, setI] = useState(0);
  const [hasVideo, setHasVideo] = useState(Boolean(videoSrc));
  const vid = useRef<HTMLVideoElement>(null);

  // Restarting the timer on every slide change keeps manual dot clicks in sync with the progress bar.
  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % slides.length), 5500);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section className="hero2">
      {/* Backdrop: blurred, darkened reel of the same photos */}
      <div className="hero2-bg" aria-hidden>
        {slides.map((s, n) => (
          <div key={s.img} className={`bg-slide ${n === i ? "on" : ""}`} style={{ backgroundImage: `url(${s.img})` }} />
        ))}
        <div className="hero2-shade" />
      </div>

      <div className="container hero2-grid">
        <div className="hero2-copy">
          <div className="pill"><b /> Multan, Pakistan · Since 1996</div>
          <h1>
            Quality within <span className="grad">your reach.</span>
          </h1>
          <p className="lead">
            Commander Group is a diversified Pakistani group across agro chemicals, seeds and petrogas, built on commitment, integrity and excellence for more than 25 years.
          </p>
          <div className="hero-actions">
            <Link href="#businesses" className="btn primary">Explore our businesses <span aria-hidden>→</span></Link>
            <Link href="/contact" className="btn">Contact us</Link>
          </div>
        </div>

        <div className="reel" aria-label="Commander Group facilities">
          <div className="reel-frame">
            {slides.map((s, n) => (
              <img key={s.img} src={s.img} alt={s.label} className={`reel-img ${n === i ? "on" : ""}`} />
            ))}
            {/* If a real video is dropped in /public/video/commander-hero.mp4 it plays on top automatically */}
            {hasVideo && (
              <video
                ref={vid}
                className="reel-video"
                src={videoSrc}
                autoPlay muted loop playsInline
                onError={() => setHasVideo(false)}
              />
            )}
            <div className="reel-top"><span className="rec"><b /> Live from our sites</span><span>{String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
            <div className="reel-cap">
              <small>{slides[i].place}</small>
              <strong>{slides[i].label}</strong>
            </div>
            <div className="reel-bar" key={i}><i /></div>
          </div>
          <div className="reel-dots">
            {slides.map((s, n) => (
              <button key={s.img} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Show ${s.label}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero2-stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num"><Counter value={s.value} suffix={s.suffix} plain={s.plain} /></div>
              <div className="lab">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
