"use client";
import { motion } from "framer-motion";
import { useIntroDone } from "./useMotionOk";

const ease = [0.22, 1, 0.36, 1] as const;

/** Headline that sprouts: plain words rise letter by letter and straighten up; accent words grow in as one gradient piece.
 *  `waitIntro` holds the animation until the loader has finished (hero only). */
export default function SproutText({
  text, accent = [], as: Tag = "h2", className = "", delay = 0, waitIntro = false,
}: { text: string; accent?: string[]; as?: "h1" | "h2" | "h3"; className?: string; delay?: number; waitIntro?: boolean }) {
  const introDone = useIntroDone();
  const hold = waitIntro && !introDone;
  const words = text.split(" ");
  let n = 0;
  return (
    <Tag className={`sprout ${className}`} aria-label={text}>
      {words.map((w, wi) => {
        const isAccent = accent.includes(w.replace(/[^\w&]/g, ""));
        const common = {
          initial: { y: "105%", rotate: 7, opacity: 0 },
          animate: waitIntro && !hold ? { y: 0, rotate: 0, opacity: 1 } : undefined,
          whileInView: waitIntro ? undefined : { y: 0, rotate: 0, opacity: 1 },
          viewport: { once: true, margin: "-6% 0px" },
        };
        return (
          <span key={wi} className="sprout-word" aria-hidden>
            {isAccent ? (
              <span className="sprout-clip">
                <motion.span className="grad sprout-piece" {...common} transition={{ duration: 0.9, delay: delay + n++ * 0.05, ease }}>{w}</motion.span>
              </span>
            ) : (
              [...w].map((ch, ci) => (
                <span key={ci} className="sprout-clip">
                  <motion.span className="sprout-piece" {...common} transition={{ duration: 0.75, delay: delay + n++ * 0.028, ease }}>{ch}</motion.span>
                </span>
              ))
            )}
            {wi < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
