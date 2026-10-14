"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Intro: a seedling grows, pests vanish and a protective arc closes over it while the crop-health figure climbs, then a round iris opens onto the site.
 *  Once per session. Click or Esc skips; a timer guarantees it always ends. */
const clamp = (x: number) => Math.min(1, Math.max(0, x));

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [gone, setGone] = useState(false);
  const [p, setP] = useState(0);
  const skip = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    let seen = false;
    try { seen = sessionStorage.getItem("cg-intro") === "1"; } catch { /* storage blocked */ }
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.dataset.intro = "seen";
      window.__introDone = true;
      setShow(false);
      setGone(true);
      window.dispatchEvent(new Event("intro-done"));
      return;
    }
    root.style.overflow = "hidden";
    window.__lenis?.stop();

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      try { sessionStorage.setItem("cg-intro", "1"); } catch { /* ignore */ }
      root.style.overflow = "";
      window.__lenis?.start();
      window.__introDone = true;
      window.dispatchEvent(new Event("intro-done"));
      setP(1);
      setShow(false);
      // hard fallback: if the exit animation cannot run (paused frames), remove the overlay anyway
      setTimeout(() => { root.dataset.intro = "seen"; setGone(true); }, 1700);
    };

    const t0 = performance.now();
    const dur = 2100;
    // Timer-driven (not rAF) so progress keeps moving even when the browser pauses animation frames in a background tab.
    const tick = setInterval(() => {
      const x = skip.current ? 1 : Math.min(1, (performance.now() - t0) / dur);
      setP(1 - Math.pow(1 - x, 2.4));
      if (x >= 1) { clearInterval(tick); setTimeout(finish, 280); }
    }, 40);
    const failsafe = setTimeout(finish, 3600);
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") skip.current = true; };
    addEventListener("keydown", esc);
    return () => { clearInterval(tick); clearTimeout(failsafe); removeEventListener("keydown", esc); root.style.overflow = ""; };
  }, []);

  const pct = Math.round(p * 100);

  if (gone) return null;
  return (
    <AnimatePresence onExitComplete={() => { document.documentElement.dataset.intro = "seen"; setGone(true); }}>
      {show && (
        <motion.div
          key="pre"
          className="preloader"
          role="presentation"
          onClick={() => { skip.current = true; }}
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 56%)" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pre-glow" aria-hidden />
          <svg viewBox="0 0 240 210" className="pre-svg" aria-hidden>
            {/* soil */}
            <path d="M24 172 H216" className="pre-line thick" />
            <path d="M44 184 H196" className="pre-line faint" strokeDasharray="3 7" />
            {/* protective arc closes over the seedling */}
            <path d="M34 172 C34 36 206 36 206 172" className="pre-shield" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - clamp((p - 0.62) / 0.3)} />
            {/* stem grows with progress */}
            <path d="M120 172 C116 150 124 126 120 76" className="pre-stalk" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - clamp(p / 0.7)} />
            {/* leaves open one pair at a time */}
            {[{ y: 148, at: 0.2, s: 1 }, { y: 120, at: 0.38, s: 0.85 }, { y: 96, at: 0.54, s: 0.7 }].map((l) => {
              const k = clamp((p - l.at) / 0.18);
              return (
                <g key={l.y} style={{ transform: `scale(${k})`, transformOrigin: `120px ${l.y}px`, opacity: k }}>
                  <path d={`M120 ${l.y} C${120 - 26 * l.s} ${l.y - 20 * l.s} ${120 - 50 * l.s} ${l.y - 10 * l.s} ${120 - 52 * l.s} ${l.y - 2}  C${120 - 30 * l.s} ${l.y + 6} ${120 - 10} ${l.y + 4} 120 ${l.y} Z`} className="pre-leaf" />
                  <path d={`M120 ${l.y} C${120 + 26 * l.s} ${l.y - 20 * l.s} ${120 + 50 * l.s} ${l.y - 10 * l.s} ${120 + 52 * l.s} ${l.y - 2}  C${120 + 30 * l.s} ${l.y + 6} ${120 + 10} ${l.y + 4} 120 ${l.y} Z`} className="pre-leaf" />
                </g>
              );
            })}
            {/* ear / bud at the top */}
            <g style={{ transform: `scale(${clamp((p - 0.7) / 0.2)})`, transformOrigin: "120px 76px", opacity: clamp((p - 0.7) / 0.2) }}>
              <ellipse cx="120" cy="62" rx="6" ry="15" className="pre-grain" />
              <ellipse cx="111" cy="72" rx="4.5" ry="10" transform="rotate(-24 111 72)" className="pre-grain" />
              <ellipse cx="129" cy="72" rx="4.5" ry="10" transform="rotate(24 129 72)" className="pre-grain" />
            </g>
            {/* pests that disappear as protection arrives */}
            {[[66, 88], [176, 70], [186, 120]].map(([x, y], i) => (
              <g key={i} style={{ opacity: 1 - clamp((p - (0.38 + i * 0.1)) / 0.12), transform: `translateY(${clamp((p - (0.38 + i * 0.1)) / 0.12) * -10}px)` }}>
                <circle cx={x} cy={y} r="5" fill="#d6303a" />
                <path d={`M${x - 4} ${y - 3} l-6 -4 M${x + 4} ${y - 3} l6 -4`} stroke="#d6303a" strokeWidth="1.8" strokeLinecap="round" />
              </g>
            ))}
          </svg>
          <div className="pre-pct">{String(pct).padStart(2, "0")}<small>%</small></div>
          <p className="pre-note">Crop health · click to skip</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
