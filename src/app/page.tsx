import React from "react";
import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import HeroVisual from "@/components/motion/HeroVisual";
import LeaderSlider from "@/components/LeaderSlider";
import { companies, stats, chairman, videoTestimonials } from "@/content/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <HeroVisual />
        <div className="hero-content">
          <p className="hero-eyebrow">Commander Group · Since 1996</p>
          <h1>Quality within <span>your reach</span></h1>
          <p className="hero-desc">
            From protecting crops to powering homes — Pakistan&apos;s most trusted agriculture and energy group, serving thousands of farmers and businesses nationwide.
          </p>
          <div className="hero-btns">
            <Link href="/about" className="btn btn-primary">Explore Our Story</Link>
            <Link href="/contact" className="btn btn-secondary">Partner With Us</Link>
          </div>
        </div>
        <div className="hero-scroll">
          Scroll
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="stats-bar">
        <div className="stats-grid-home">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="stat-block-home">
                <span className="stat-value-home"><Counter value={s.value} suffix={s.suffix} plain={s.plain} /></span>
                <span className="stat-label-home">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="intro">
        <div className="container">
          <div className="intro-grid">
            <Reveal>
              <div className="intro-text">
                <p className="intro-eyebrow">Who We Are</p>
                <h2>Building Pakistan&apos;s future from the ground up</h2>
                <p className="intro-lead">
                  Founded in 1996, Commander Group has grown from a single crop-protection company into a diversified conglomerate spanning six companies across agriculture, petrochemicals, seeds, and energy.
                </p>
                <p className="intro-sub">
                  With 55+ offices nationwide, ISO-certified manufacturing facilities, and a team of over 500 professionals, we serve thousands of farmers and businesses — delivering innovation, reliability, and trust across every sector we operate in.
                </p>
                <div className="intro-highlights">
                  <div className="intro-highlight">
                    <span className="intro-highlight-num">6</span>
                    <span className="intro-highlight-label">Companies</span>
                  </div>
                  <div className="intro-highlight">
                    <span className="intro-highlight-num">25+</span>
                    <span className="intro-highlight-label">Years</span>
                  </div>
                  <div className="intro-highlight">
                    <span className="intro-highlight-num">55+</span>
                    <span className="intro-highlight-label">Offices</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="intro-visual">
                <div className="group-tree">
                  <div className="tree-root">
                    <img src={asset("/img/commander-logo.png")} alt="Commander Group" className="tree-root-logo" />
                    <span className="tree-root-label">Commander Group</span>
                    <span className="tree-root-since">Since 1996</span>
                  </div>
                  <div className="tree-line" />
                  <div className="tree-branches">
                    {companies.map((c) => (
                      <Link href={`/companies/${c.slug}`} className="tree-node" key={c.slug}>
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Company Cards (Sticky Stack) ── */}
      <section className="cc-stack">
        {companies.map((c, i) => (
          <div key={c.slug} className="company-card" style={{ zIndex: i + 1 }}>
            <div className={`cc-inner${i % 2 === 1 ? " reverse" : ""}`}>
              <div className="cc-text">
                <Reveal>
                  <p className="cc-eyebrow">{c.sector}</p>
                  <h3>{c.short}</h3>
                  <p>{c.description[0]}</p>
                  <Link href={`/companies/${c.slug}`} className="cc-cta">
                    Explore {c.short}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </Link>
                  <div className="cc-products">
                    {c.products.map((p) => (
                      <div className="cc-product" key={p.name}>
                        <img src={asset(p.image)} alt={p.name} loading="lazy" />
                        <span>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="cc-img-side">
                <img src={asset(c.cover)} alt={c.name} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Leadership Preview ── */}
      <section className="leadership">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <p className="intro-eyebrow">Leadership</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                The people behind Commander
              </h2>
              <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.6 }}>
                Led by visionaries with decades of experience across agriculture, petrochemicals, and energy.
              </p>
            </div>
          </Reveal>
          <LeaderSlider slides={[
            {
              name: chairman.name,
              role: chairman.role,
              message: chairman.letter[0],
              image: asset("/img/ceo.gif"),
            },
            {
              name: chairman.bios[0].name,
              role: chairman.bios[0].role,
              message: chairman.bios[0].paras[0],
              initials: "UR",
            },
            {
              name: chairman.bios[1].name,
              role: chairman.bios[1].role,
              message: chairman.bios[1].paras[0],
              initials: "SR",
            },
          ]} />
        </div>
      </section>

      {/* ── Video Testimonials — Phone Mockup Marquee ── */}
      <section className="video-testimonials">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <p className="intro-eyebrow">From the Field</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Hear it from our farmers
              </h2>
              <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.6 }}>
                Real stories from the farmers and partners who grow with Commander Group every season.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="phone-marquee">
          <div className="phone-track">
            {videoTestimonials.map((v) => (
              <div className="phone-mockup" key={v.id}>
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/${v.id}/&show_text=false&width=280`}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      title={v.title}
                    />
                  </div>
                </div>
                <div className="phone-label">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Let&apos;s Grow Together</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Ready to partner with Pakistan&apos;s most trusted agriculture &amp; energy group?
            </h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6 }}>
              Whether you&apos;re a farmer, distributor, or business — we&apos;d love to explore how we can work together.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
              <Link href="/about" className="btn btn-secondary">Learn About Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
