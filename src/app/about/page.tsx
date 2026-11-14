import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { vision, mission, companies, stats } from "@/content/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us | Commander Group" };

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <img src={asset("/img/commander-agro-02.jpg")} alt="Commander Group fields" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>About Commander Group</p>
            <h1>Built on trust.<br />Driven by quality.</h1>
            <p>Since 1996, Commander Group has grown into Pakistan&apos;s most trusted conglomerate across agriculture and energy, serving thousands of farmers and businesses nationwide.</p>
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

      {/* ── Sticky Stack Cards ── */}
      <div className="cc-stack about-stack">

        {/* Card 1 — Group Hierarchy */}
        <div className="company-card" style={{ zIndex: 1 }}>
          <div className="cc-inner">
            <div className="cc-text">
              <Reveal>
                <p className="cc-eyebrow">Our Group</p>
                <h3>One vision. Six companies.</h3>
                <p>Commander Group is a diversified conglomerate spanning agriculture, petrochemicals, seeds, and energy, united under one mission of quality and trust.</p>
              </Reveal>
            </div>
            <div className="cc-tree-side">
              <Reveal>
                <div className="group-tree">
                  <div className="tree-root">
                    <img src={asset("/img/commander-logo.png")} alt="Commander Group" className="tree-root-logo" />
                    <span className="tree-root-label">Commander Group</span>
                    <span className="tree-root-since">Since 1996</span>
                  </div>
                  <div className="tree-line" />
                  <div className="tree-branches">
                    {companies.map((c) => (
                      <Link href={`/companies/${c.slug}`} className="tree-node" data-company={c.slug} key={c.slug}>
                        {c.logo ? (
                          <img src={asset(c.logo)} alt={c.short} className="tree-node-logo" />
                        ) : (
                          <div className="tree-node-icon">{c.short[0]}</div>
                        )}
                        <span className="tree-node-name">{c.short}</span>
                        <span className="tree-node-sector">{c.sector}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Card 2 — Our Story */}
        <div className="company-card" style={{ zIndex: 2 }}>
          <div className="cc-inner reverse">
            <div className="cc-text">
              <Reveal>
                <p className="cc-eyebrow">Our Story</p>
                <h3>From a single company to a diversified conglomerate</h3>
                <p>Founded in 1996, Commander Group began as a crop-protection company in Multan. What started as a single entity importing and formulating pesticides for Pakistani farmers has grown into a six-company conglomerate spanning agro chemicals, seeds, petrochemicals, and energy infrastructure.</p>
                <p style={{ marginTop: 16, color: "var(--fg-dim)", lineHeight: 1.7 }}>Today, with 55+ offices nationwide, ISO-certified manufacturing facilities, and a team of over 500 professionals, Commander Group is one of Pakistan&apos;s most respected names in agriculture and energy.</p>
              </Reveal>
            </div>
            <div className="cc-img-side">
              <img src={asset("/img/commander-agro-01.jpg")} alt="Commander manufacturing facility" />
            </div>
          </div>
        </div>

        {/* Card 3 — Vision */}
        <div className="company-card" style={{ zIndex: 3 }}>
          <div className="cc-inner">
            <div className="cc-text">
              <Reveal>
                <p className="cc-eyebrow">Our Vision</p>
                <h3>A better future for Pakistan&apos;s agriculture &amp; energy</h3>
                <p style={{ fontSize: 18, lineHeight: 1.7 }}>{vision}</p>
              </Reveal>
            </div>
            <div className="cc-img-side">
              <img src={asset("/img/petrogas.jpg")} alt="Energy infrastructure" />
            </div>
          </div>
        </div>

        {/* Card 4 — Mission */}
        <div className="company-card" style={{ zIndex: 4 }}>
          <div className="cc-inner reverse">
            <div className="cc-text">
              <Reveal>
                <p className="cc-eyebrow">Our Mission</p>
                <h3>The principles that guide everything we do</h3>
                <div className="vm-list" style={{ marginTop: 20 }}>
                  {mission.map((m, i) => (
                    <div key={m} className="vm-list-item">
                      <span className="vm-num">0{i + 1}</span>
                      <p>{m}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="cc-img-side">
              <img src={asset("/img/commander-agro-02.jpg")} alt="Commander fields" />
            </div>
          </div>
        </div>

        {/* Card 5 — Facilities */}
        <div className="company-card" style={{ zIndex: 5 }}>
          <div className="cc-inner">
            <div className="cc-text">
              <Reveal>
                <p className="cc-eyebrow">Our Facilities</p>
                <h3>World-class infrastructure across Pakistan</h3>
                <p>State-of-the-art manufacturing plants, ISO-certified laboratories, and strategically located distribution centers ensure quality reaches every corner of Pakistan.</p>
                <div className="facility-mini" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 24 }}>
                  <img src={asset("/img/banner-1-2.jpg")} alt="LPG facility" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
                  <img src={asset("/img/commander-agro-09.jpg")} alt="Manufacturing" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
                </div>
              </Reveal>
            </div>
            <div className="cc-img-side">
              <img src={asset("/img/banner-1-1.jpg")} alt="Commander Group headquarters" />
            </div>
          </div>
        </div>

        {/* Card 6 — Certifications */}
        <div className="company-card" style={{ zIndex: 6 }}>
          <div className="cc-inner reverse">
            <div className="cc-text">
              <Reveal>
                <p className="cc-eyebrow">Certifications</p>
                <h3>Internationally recognized quality standards</h3>
                <p>Commander Group holds ISO 9000, ISO 14000, and ISO 17025 certifications, a testament to our commitment to world-class manufacturing and environmental standards.</p>
                <div className="cert-imgs" style={{ marginTop: 24 }}>
                  <img src={asset("/img/certificate-1-1.jpg")} alt="ISO Certificate" />
                  <img src={asset("/img/certificate-1-2.jpg")} alt="Quality Certificate" />
                </div>
              </Reveal>
            </div>
            <div className="cc-img-side">
              <img src={asset("/img/commander-agro-05.jpg")} alt="Farmer applying crop protection" />
            </div>
          </div>
        </div>

      </div>

      {/* ── Our Companies (still grid, outside stack) ── */}
      <section className="inner-section inner-section--alt">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="intro-eyebrow">Our Companies</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>One group. Six companies. Endless impact.</h2>
            </div>
          </Reveal>
          <div className="about-companies">
            {companies.map((c) => (
              <Reveal key={c.slug}>
                <Link href={`/companies/${c.slug}`} className="about-co-card">
                  <div className="about-co-img">
                    <img src={asset(c.cover)} alt={c.short} loading="lazy" />
                  </div>
                  <div className="about-co-info">
                    <span className="about-co-sector">{c.sector}</span>
                    <h4>{c.short}</h4>
                    <span className="about-co-arrow">&rarr;</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Let&apos;s Grow Together</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Ready to grow together?</h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6 }}>Whether you&apos;re a farmer, distributor, or business, we&apos;d love to hear from you.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link href="/leadership" className="btn btn-secondary">Meet Our Leaders</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
