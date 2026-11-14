"use client";
import { useState } from "react";
import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type FeedbackType = "suggestion" | "complaint" | null;

export default function FeedbackPage() {
  const [selected, setSelected] = useState<FeedbackType>(null);

  const close = () => setSelected(null);

  return (
    <>
      {/* ── Hero ── */}
      <section className="inner-hero inner-hero--short">
        <div className="inner-hero-bg">
          <img src={asset("/img/banner-1-3.jpg")} alt="Feedback" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Feedback</p>
            <h1>We Value Your Voice</h1>
            <p>Your feedback helps us improve. Share a suggestion or let us know about a concern.</p>
          </Reveal>
        </div>
      </section>

      {/* ── Feedback Type Selection ── */}
      <section className="inner-section">
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="intro-eyebrow">Choose a Category</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>How can we help?</h2>
              <p style={{ fontSize: 15, color: "var(--fg-dim)", maxWidth: 480, margin: "12px auto 0", lineHeight: 1.6 }}>Select an option below to share your feedback.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="feedback-cards">
              <button
                className="feedback-card"
                onClick={() => setSelected("suggestion")}
              >
                <div className="feedback-card-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="20" r="14" stroke="var(--accent)" strokeWidth="2" fill="none" />
                    <path d="M24 12V20L30 24" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
                    <path d="M18 34H30V38C30 40.2 28.2 42 26 42H22C19.8 42 18 40.2 18 38V34Z" stroke="var(--accent)" strokeWidth="2" fill="none" />
                    <path d="M24 6V8M36 20H38M10 20H12M32.5 10.5L31 12M15.5 10.5L17 12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Suggestion</h3>
                <p>Share an idea or improvement that could help us serve you better.</p>
                <span className="feedback-card-action">Share Suggestion &rarr;</span>
              </button>

              <button
                className="feedback-card"
                onClick={() => setSelected("complaint")}
              >
                <div className="feedback-card-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" stroke="var(--accent)" strokeWidth="2" fill="none" />
                    <path d="M24 14V28" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="24" cy="34" r="2" fill="var(--accent)" />
                  </svg>
                </div>
                <h3>Complaint</h3>
                <p>Let us know about a concern so we can address it promptly.</p>
                <span className="feedback-card-action">Report Issue &rarr;</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Feedback Form Modal ── */}
      {selected && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-content modal-content--feedback" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <div className="modal-header modal-header--compact">
              <h3>{selected === "suggestion" ? "Share Your Suggestion" : "Submit Your Complaint"}</h3>
              <p>{selected === "suggestion" ? "Tell us how we can improve." : "Please share the details of your concern."}</p>
            </div>

            <form className="modal-form-compact">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="+92 300 1234567" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <select defaultValue="">
                    <option value="" disabled>Select (optional)</option>
                    <option>Commander Agro</option>
                    <option>Gharbeen</option>
                    <option>Gharbeen Seeds</option>
                    <option>MAK AG</option>
                    <option>Commander Petrogas</option>
                    <option>Rafco Energy</option>
                    <option>General / Commander Group</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder={selected === "suggestion" ? "Title for your suggestion" : "Title for your complaint"} required />
              </div>
              <div className="form-group">
                <label>Details</label>
                <textarea
                  placeholder={selected === "suggestion" ? "Describe your suggestion..." : "Describe your complaint..."}
                  rows={3}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Submit {selected === "suggestion" ? "Suggestion" : "Complaint"}
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginLeft: 8 }}><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Need Direct Help?</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Reach out to us directly</h2>
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
