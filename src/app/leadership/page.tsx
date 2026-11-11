import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { chairman } from "@/content/data";
import type { Metadata } from "next";

const MaleIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="120" height="120" rx="60" fill="var(--bg-alt)" />
    <circle cx="60" cy="45" r="18" fill="var(--line)" />
    <ellipse cx="60" cy="95" rx="30" ry="22" fill="var(--line)" />
  </svg>
);

const FemaleIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="120" height="120" rx="60" fill="var(--bg-alt)" />
    <circle cx="60" cy="42" r="18" fill="var(--line)" />
    <path d="M60 28c-6 0-12 3-15 8s-3 12 0 18c-2 1-4 3-4 5h38c0-2-2-4-4-5 3-6 3-13 0-18s-9-8-15-8z" fill="var(--line)" />
    <ellipse cx="60" cy="95" rx="30" ry="22" fill="var(--line)" />
  </svg>
);

export const metadata: Metadata = { title: "Leadership | Commander Group" };

export default function LeadershipPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="inner-hero inner-hero--short">
        <div className="inner-hero-bg">
          <img src={asset("/img/about-3-1.png")} alt="Leadership" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Leadership</p>
            <h1>The people behind Commander</h1>
            <p>Our leadership team brings decades of experience across agriculture, petrochemicals, and energy.</p>
          </Reveal>
        </div>
      </section>

      {/* ── Chairman Featured ── */}
      <section className="inner-section">
        <div className="container">
          <Reveal>
            <div className="leader-featured">
              <div className="leader-featured-photo">
                <img src={asset("/img/ceo.gif")} alt={chairman.name} />
              </div>
              <div className="leader-featured-text">
                <p className="intro-eyebrow">A Message from Our Late Chairman</p>
                <h2>{chairman.name}</h2>
                <p className="leader-role">{chairman.role}</p>
                {chairman.memorial && (
                  <p style={{ fontStyle: "italic", color: "var(--fg-dim)", marginBottom: 8 }}>{chairman.memorial}</p>
                )}
                {chairman.memorialNote && (
                  <p style={{ fontSize: 15, color: "var(--fg-dim)", lineHeight: 1.7, marginBottom: 16 }}>{chairman.memorialNote}</p>
                )}
                {chairman.letter.map((p, i) => (
                  <p key={i} className="leader-para">{p}</p>
                ))}
                <div className="leader-sign">
                  <p style={{ fontStyle: "italic", color: "var(--fg-dim)" }}>{chairman.regards}</p>
                  <img src={asset("/img/ceo-sign.png")} alt="Signature" className="leader-signature" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Team Members ── */}
      <section className="inner-section inner-section--alt">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="intro-eyebrow">Our Team</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Leadership Team</h2>
            </div>
          </Reveal>
          <div className="leader-team-grid">
            {chairman.bios.map((b) => {
              const isFemale = b.name.includes("Mrs.") || b.name.includes("Samina");
              return (
                <Reveal key={b.name}>
                  <div className="leader-team-card">
                    <div className="leader-team-avatar">
                      {isFemale ? <FemaleIcon /> : <MaleIcon />}
                    </div>
                    <div className="leader-team-info">
                      <h3>{b.name}</h3>
                      <p className="leader-role">{b.role}</p>
                      {b.paras.map((p, i) => (
                        <p key={i} className="leader-para">{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="inner-section">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p className="intro-eyebrow">Awards &amp; Certifications</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Recognized excellence</h2>
              <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.6 }}>Our commitment to quality is backed by internationally recognized certifications and industry awards.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="cert-imgs" style={{ justifyContent: "center" }}>
              <img src={asset("/img/certificate-1-1.jpg")} alt="Certificate" />
              <img src={asset("/img/certificate-1-2.jpg")} alt="Award of Excellence" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Partner With Us</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Let&apos;s build Pakistan&apos;s future together</h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6 }}>Whether you&apos;re a farmer, distributor, or business — we&apos;d love to hear from you.</p>
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
