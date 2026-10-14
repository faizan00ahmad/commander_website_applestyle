"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { asset } from "@/lib/asset";
import { companies } from "@/content/data";
import { useMotionOk } from "./useMotionOk";

const by = (slug: string) => companies.find((c) => c.slug === slug)!;
const steps = [
  { year: "1996", slug: "commander-agro", title: "Commander Agro", text: "Established as an importer and formulator of pesticides, fungicides, rodenticides, acaricides and weedicides, with its own R&D laboratory." },
  { year: "2011", slug: "gharbeen", title: "Gharbeen", text: "The retail venture started, growing to 5 regional and 50 territorial offices that train farmers at their doorstep." },
  { year: "2017", slug: "commander-petrogas", title: "Commander Petrogas", text: "LPG import and distribution began from Multan, with storage for around 300 MT a day and over 9000 MT sold a year." },
  { year: "Next", slug: "commander-seeds", title: "Seeds and Rafco Energy", text: "Commander Seeds and Rafco Energy are joining the group. Details are coming soon." },
];

function Panel({ s, i }: { s: (typeof steps)[number]; i: number }) {
  const c = by(s.slug);
  return (
    <article className="tl-panel">
      <div className="tl-year" aria-hidden>{s.year}</div>
      <div className="tl-card">
        <div className="tl-img"><img src={asset(c.cover)} alt={c.name} loading="lazy" /></div>
        <div className="tl-body">
          <span className="tag">0{i + 1} · {c.sector}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <Link href={`/companies/${c.slug}`} className="more">Explore <span>→</span></Link>
        </div>
      </div>
    </article>
  );
}

/** A pinned timeline: scrolling the page slides the track sideways and grows a line through each milestone. Falls back to a plain stack on touch and small screens. */
export default function CompanyTimeline() {
  const ok = useMotionOk(1024);
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.0005 });
  const x = useTransform(p, (v) => -v * dist);
  const line = useTransform(p, [0, 1], [0, 1]);

  useEffect(() => {
    if (!ok) return;
    const measure = () => setDist(Math.max(0, (track.current?.scrollWidth ?? 0) - innerWidth));
    measure();
    addEventListener("resize", measure);
    const t = setTimeout(measure, 600); // images and fonts settle
    return () => { removeEventListener("resize", measure); clearTimeout(t); };
  }, [ok]);

  if (!ok) {
    return (
      <section className="section">
        <div className="tl-stack-head">
          <div className="eyebrow">Our Journey</div>
          <h2>From one <span className="grad">field</span> to a group</h2>
        </div>
        <div className="tl-stack">{steps.map((s, i) => <Panel key={s.slug} s={s} i={i} />)}</div>
      </section>
    );
  }
  return (
    <div ref={section} className="tl-pin-wrap">
      <div className="tl-sticky">
        <div className="tl-line"><motion.i style={{ scaleX: line }} /></div>
        <motion.div ref={track} className="tl-track" style={{ x }}>
          <div className="tl-intro">
            <div className="eyebrow">Our Journey</div>
            <h2>From one <span className="grad">field</span> to a group</h2>
            <p className="lead">Scroll to move through the milestones of Commander Group.</p>
          </div>
          {steps.map((s, i) => <Panel key={s.slug} s={s} i={i} />)}
        </motion.div>
      </div>
    </div>
  );
}
