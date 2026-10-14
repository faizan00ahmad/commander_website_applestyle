"use client";
import { useRef } from "react";
import Link from "next/link";
import { useAnimationFrame, useMotionValue, useScroll, useVelocity } from "framer-motion";
import { asset } from "@/lib/asset";
import { companies } from "@/content/data";

const agro = companies.find((c) => c.slug === "commander-agro")!.gallery;
const gharbeen = companies.find((c) => c.slug === "gharbeen")!.gallery;

function Row({ images, dir, base, href, label }: { images: string[]; dir: 1 | -1; base: number; href: string; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const paused = useRef(false);
  const { scrollY } = useScroll();
  const vel = useVelocity(scrollY);
  const reduce = useRef(false);
  useAnimationFrame((_, delta) => {
    const el = track.current;
    if (!el) return;
    reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) return;
    const half = el.scrollWidth / 2;
    const boost = Math.min(Math.abs(vel.get()) / 900, 5); // faster while the page is being scrolled
    const speed = paused.current ? 0 : base * (1 + boost);
    let nx = x.get() + dir * speed * (delta / 1000);
    if (nx <= -half) nx += half;
    if (nx > 0) nx -= half;
    x.set(nx);
    el.style.transform = `translate3d(${nx}px,0,0)`;
  });
  return (
    <div className="pm-row" onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <div className="pm-track" ref={track}>
        {[...images, ...images].map((s, i) => (
          <Link key={i} href={href} className="pm-item" tabIndex={i >= images.length ? -1 : 0} aria-hidden={i >= images.length} aria-label={i < images.length ? `${label} ${i + 1}` : undefined}>
            <img src={asset(s)} alt="" loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Two tilted rows of real product photos, drifting in opposite directions. Speed rises with scroll velocity; hover pauses a row. */
export default function ProductMarquee() {
  return (
    <div className="pm" aria-label="Commander and Gharbeen products">
      <Row images={gharbeen.slice(0, 14)} dir={-1} base={46} href="/companies/gharbeen" label="Gharbeen product" />
      <Row images={agro.slice(0, 12)} dir={1} base={38} href="/companies/commander-agro" label="Commander Agro photo" />
    </div>
  );
}
