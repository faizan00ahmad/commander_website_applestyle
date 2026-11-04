import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { companies } from "@/content/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const co = companies.find((c) => c.slug === params.slug);
  return { title: co ? `${co.name} | Commander Group` : "Company | Commander Group" };
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const co = companies.find((c) => c.slug === params.slug);
  if (!co) return notFound();

  const idx = companies.indexOf(co);
  const next = companies[(idx + 1) % companies.length];
  const prev = companies[(idx - 1 + companies.length) % companies.length];

  return (
    <>
      {/* ── Hero with Logo ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <img src={asset(co.cover)} alt={co.name} />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            {co.logo && (
              <div className="co-hero-logo">
                <img src={asset(co.logo)} alt={`${co.short} logo`} />
              </div>
            )}
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>{co.sector}</p>
            <h1>{co.name}</h1>
            <p>{co.description[0]}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Quick Facts Cards ── */}
      {co.facts.length > 0 && (
        <section className="inner-section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="co-facts-grid">
              {co.facts.map((f) => (
                <Reveal key={f.label}>
                  <div className="co-fact-card">
                    <span className="co-fact-value">{f.value}</span>
                    <span className="co-fact-label">{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── About Card ── */}
      <section className="inner-section">
        <div className="container">
          <Reveal>
            <div className="co-intro-card">
              <div className="co-intro-left">
                {co.logo && (
                  <div className="co-intro-logo">
                    <img src={asset(co.logo)} alt={co.short} />
                  </div>
                )}
                <p className="intro-eyebrow">About {co.short}</p>
                <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>What we do</h2>
                {co.description.map((p, i) => (
                  <p key={i} className="co-intro-para">{p}</p>
                ))}
              </div>
              <div className="co-intro-img">
                <img src={asset(co.cover)} alt={co.name} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Products Grid ── */}
      {co.products.length > 0 && (
        <section className="inner-section inner-section--alt">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Products &amp; Services</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>What we offer</h2>
              </div>
            </Reveal>
            <div className="co-products">
              {co.products.map((p) => (
                <Reveal key={p.name}>
                  <div className="co-product-card">
                    <div className="co-product-img">
                      <img src={asset(p.image)} alt={p.name} loading="lazy" />
                    </div>
                    <h4>{p.name}</h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {co.gallery.length > 0 && (
        <section className="inner-section">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Gallery</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Inside {co.short}</h2>
              </div>
            </Reveal>
            <div className="co-gallery">
              {co.gallery.slice(0, 8).map((img, i) => (
                <Reveal key={i}>
                  <div className="co-gallery-item">
                    <img src={asset(img)} alt={`${co.name} ${i + 1}`} loading="lazy" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Navigation ── */}
      <section className="inner-section inner-section--alt">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p className="intro-eyebrow">Explore More</p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Other companies in our group</h2>
            </div>
          </Reveal>
          <div className="co-nav">
            <Link href={`/companies/${prev.slug}`} className="co-nav-card">
              <Reveal>
                <span className="co-nav-label">&larr; Previous</span>
                <span className="co-nav-name">{prev.short}</span>
                <span className="co-nav-sector">{prev.sector}</span>
              </Reveal>
            </Link>
            <Link href={`/companies/${next.slug}`} className="co-nav-card co-nav-card--right">
              <Reveal>
                <span className="co-nav-label">Next &rarr;</span>
                <span className="co-nav-name">{next.short}</span>
                <span className="co-nav-sector">{next.sector}</span>
              </Reveal>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Interested?</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Want to learn more about {co.short}?</h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6 }}>Get in touch to explore our products and partnership opportunities.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/about" className="btn btn-secondary">About Commander</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
