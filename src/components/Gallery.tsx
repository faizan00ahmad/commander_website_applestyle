"use client";
import { useEffect, useState } from "react";

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((x) => (x! + 1) % images.length);
      if (e.key === "ArrowLeft") setI((x) => (x! - 1 + images.length) % images.length);
    };
    addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [i, images.length]);
  return (
    <>
      <div className="gallery">
        {images.map((s, n) => (
          <button key={s} onClick={() => setI(n)} aria-label={`Open ${alt} ${n + 1}`}>
            <img src={s} alt={`${alt} ${n + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="lightbox" onClick={() => setI(null)}>
          <button className="x" aria-label="Close">✕</button>
          <button className="p" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setI((i - 1 + images.length) % images.length); }}>‹</button>
          <img src={images[i].replace("-thumb", "")} onError={(e) => { e.currentTarget.src = images[i]; }} alt={`${alt} ${i + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="n" aria-label="Next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % images.length); }}>›</button>
        </div>
      )}
    </>
  );
}
