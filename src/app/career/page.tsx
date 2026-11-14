"use client";
import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CareerPage() {
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
      if (fileRef.current) {
        const dt = new DataTransfer();
        dt.items.add(file);
        fileRef.current.files = dt.files;
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="inner-hero inner-hero--short">
        <div className="inner-hero-bg">
          <img src={asset("/img/about-3-1.png")} alt="Career at Commander Group" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Career</p>
            <h1>Join Our Team</h1>
            <p>Be part of a growing group that values expertise, integrity and progress across agriculture and energy.</p>
          </Reveal>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="inner-section">
        <div className="container" style={{ maxWidth: 720 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p className="intro-eyebrow">Apply Now</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Submit Your Application</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="+92 300 1234567" required />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp</label>
                    <input type="tel" placeholder="+92 300 1234567" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Upload CV</label>
                  <div
                    className={`cv-dropzone cv-dropzone--compact${dragging ? " cv-dropzone--active" : ""}${fileName ? " cv-dropzone--done" : ""}`}
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileRef.current?.click()}
                  >
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {fileName ? (
                      <div className="cv-dropzone-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22, flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: 14 }}>{fileName}</span>
                        <span style={{ fontSize: 12, color: "var(--fg-dim)", marginLeft: "auto" }}>Change</span>
                      </div>
                    ) : (
                      <div className="cv-dropzone-row">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28, flexShrink: 0 }}>
                          <path d="M24 32V16M24 16L18 22M24 16L30 22" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 32V36C8 38.2 9.8 40 12 40H36C38.2 40 40 38.2 40 36V32" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontWeight: 500, fontSize: 14 }}>Drag &amp; drop your CV here</span>
                        <span style={{ fontSize: 12, color: "var(--fg-dim)", marginLeft: "auto" }}>or browse</span>
                      </div>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 4 }}>
                  Submit Application
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginLeft: 8 }}><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </button>
              </form>
            </div>
          </Reveal>

          {/* How to Apply button */}
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <button
                className="career-guide-btn"
                onClick={() => setGuideOpen(true)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                How to Apply - Read Guide
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Guide Modal ── */}
      {guideOpen && (
        <div className="modal-overlay" onClick={() => setGuideOpen(false)}>
          <div className="modal-content modal-content--guide" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setGuideOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <div className="modal-header modal-header--compact">
              <h3>How to Apply</h3>
              <p>Follow these steps to submit your application</p>
            </div>

            <div className="guide-steps">
              <div className="guide-step">
                <span className="guide-step-num">1</span>
                <div>
                  <strong>Fill in Your Details</strong>
                  <p>Enter your full name, phone number, WhatsApp number and email address. Make sure your <strong>WhatsApp number is active</strong> as our HR team will use it to contact you.</p>
                </div>
              </div>
              <div className="guide-step">
                <span className="guide-step-num">2</span>
                <div>
                  <strong>Upload Your CV</strong>
                  <p>Upload your CV by dragging and dropping it into the upload area, or click to browse your files. We accept <strong>PDF, DOC and DOCX</strong> formats. Make sure your CV is up to date.</p>
                </div>
              </div>
              <div className="guide-step">
                <span className="guide-step-num">3</span>
                <div>
                  <strong>Submit Your Application</strong>
                  <p>Click the green &quot;Submit Application&quot; button. You will see a confirmation once your application is received successfully.</p>
                </div>
              </div>
              <div className="guide-step">
                <span className="guide-step-num">4</span>
                <div>
                  <strong>What Happens Next</strong>
                  <p>Our HR team will review your CV. If you are shortlisted, we will contact you on <strong>WhatsApp</strong> within <strong>5-7 working days</strong>. Please keep your phone accessible.</p>
                </div>
              </div>
            </div>

            <div className="guide-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18, flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
              <span>If you do not hear from us within 7 working days, you may re-apply after 30 days with an updated CV.</span>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Explore More</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Learn more about Commander Group</h2>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/about" className="btn btn-primary">About Us</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
