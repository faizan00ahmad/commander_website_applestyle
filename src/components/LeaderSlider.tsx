"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Slide = {
  name: string;
  role: string;
  message: string;
  image?: string;
  initials?: string;
};

export default function LeaderSlider({ slides }: { slides: Slide[] }) {
  const [idx, setIdx] = useState(0);
  const len = slides.length;

  const next = useCallback(() => setIdx((i) => (i + 1) % len), [len]);

  useEffect(() => {
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="leader-slider">
      <div className="leader-slider-viewport">
        <div
          className="leader-slider-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {slides.map((s) => (
            <div className="leader-slide" key={s.name}>
              <div className="leader-slide-img">
                {s.image ? (
                  <img src={s.image} alt={s.name} />
                ) : s.initials ? (
                  <div className="leader-initials-lg">{s.initials}</div>
                ) : null}
              </div>
              <div className="leader-slide-text">
                <h4>{s.name}</h4>
                <p className="role">{s.role}</p>
                <p className="leader-slide-msg">{s.message}</p>
                <Link href="/leadership" className="leader-see-more">
                  See More
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="leader-dots">
        {slides.map((s, i) => (
          <button
            key={s.name}
            className={`leader-dot${i === idx ? " active" : ""}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to ${s.name}`}
          />
        ))}
      </div>
    </div>
  );
}
