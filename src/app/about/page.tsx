import Link from "next/link";
import Reveal from "@/components/Reveal";
import { vision, mission, companies, stats } from "@/content/data";
import Counter from "@/components/Counter";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us | Commander Group" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">About Us</p>
            <h1>Built on trust. Driven by quality.</h1>
            <p>Since 1996, Commander Group has been Pakistan&apos;s trusted partner in agriculture and energy.</p>
          </Reveal>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <div>
                <h3>Our Vision</h3>
                <p>{vision}</p>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <h3>Our Mission</h3>
                <ul style={{ paddingLeft: 0 }}>
                  {mission.map((m) => (
                    <li key={m} style={{ marginBottom: 12, fontSize: 16, color: "var(--fg-dim)", lineHeight: 1.7, display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", fontWeight: 600, flexShrink: 0 }}>&#10003;</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-grid">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="stat-item">
                <div className="stat-value"><Counter value={s.value} suffix={s.suffix} plain={s.plain} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Values</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>
              What drives us
            </h2>
          </Reveal>
          <div className="values">
            {[
              { icon: "⚡", title: "Commitment", desc: "Dedicated to delivering excellence in everything we do." },
              { icon: "🤝", title: "Integrity", desc: "Building trust through transparency and honest business." },
              { icon: "🏆", title: "Excellence", desc: "Setting the highest standards across every sector we serve." },
            ].map((v) => (
              <Reveal key={v.title}>
                <div className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Our Companies</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32 }}>
              One group. Many sectors.
            </h2>
          </Reveal>
          <div className="intro-companies">
            {companies.map((c) => (
              <Link key={c.slug} href={`/companies/${c.slug}`}>
                <span style={{ cursor: "pointer" }}>{c.short}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
