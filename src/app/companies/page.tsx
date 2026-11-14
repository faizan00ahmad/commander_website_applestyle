import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { companies, stats } from "@/content/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Companies | Commander Group" };

export default function CompaniesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <img src={asset("/img/commander-agro-02.jpg")} alt="Commander Group" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            <div className="co-hero-logo">
              <img src={asset("/img/commander-group-logo.webp")} alt="Commander Group logo" />
            </div>
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Commander Group · Since 1996</p>
            <h1>Our Companies</h1>
            <p>A diversified conglomerate spanning agriculture, petrochemicals, seeds, and energy. Six companies united under one mission of quality and trust.</p>
          </Reveal>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="stats-grid-inner">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="stat-block">
                <div className="stat-value"><Counter value={s.value} suffix={s.suffix} plain={s.plain} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Group Overview ── */}
      <section className="inner-section">
        <div className="container">
          <Reveal>
            <div className="co-intro-card">
              <div className="co-intro-left">
                <div className="co-intro-logo">
                  <img src={asset("/img/commander-group-logo.webp")} alt="Commander Group" />
                </div>
                <p className="intro-eyebrow">About the Group</p>
                <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>One vision. Six companies. Endless impact.</h2>
                <p className="co-intro-para">Founded in 1996, Commander Group has grown from a single crop-protection company into a diversified conglomerate spanning six companies across agriculture, petrochemicals, seeds, and energy.</p>
                <p className="co-intro-para">With 55+ offices nationwide, ISO-certified manufacturing facilities, and a team of over 500 professionals, we serve thousands of farmers and businesses, delivering innovation, reliability, and trust across every sector we operate in.</p>
                <p className="co-intro-para">Our group holds ISO 9000, ISO 14000, and ISO 17025 certifications, a testament to our commitment to world-class manufacturing and environmental standards.</p>
              </div>
              <div className="co-intro-img">
                <img src={asset("/img/banner-1-1.jpg")} alt="Commander Group headquarters" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Company Cards (Sticky Stack) ── */}
      <div className="cc-stack">
        {companies.map((c, i) => (
          <div key={c.slug} className="company-card" style={{ zIndex: i + 1 }}>
            <div className={`cc-inner${i % 2 === 1 ? " reverse" : ""}`}>
              <div className="cc-text">
                <Reveal>
                  {c.logo && (
                    <div className="companies-card-logo">
                      <img src={asset(c.logo)} alt={`${c.short} logo`} />
                    </div>
                  )}
                  <p className="cc-eyebrow">{c.sector}</p>
                  <h3>{c.name}</h3>
                  <p>{c.description[0]}</p>
                  {c.description[1] && (
                    <p style={{ marginTop: 12, color: "var(--fg-dim)", lineHeight: 1.7, fontSize: 15 }}>{c.description[1]}</p>
                  )}
                  <div className="companies-card-facts">
                    {c.facts.slice(0, 3).map((f) => (
                      <div key={f.label} className="companies-card-fact">
                        <span className="companies-card-fact-val">{f.value}</span>
                        <span className="companies-card-fact-lbl">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/companies/${c.slug}`} className="cc-cta">
                    Explore {c.short}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </Link>
                </Reveal>
              </div>
              <div className="cc-img-side">
                <img src={asset(c.cover)} alt={c.name} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Partner With Us</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Ready to grow together?</h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6 }}>Whether you&apos;re a farmer, distributor, or business, we&apos;d love to hear from you.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link href="/about" className="btn btn-secondary">About Commander</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
