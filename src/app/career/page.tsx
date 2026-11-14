"use client";
import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CareerPage() {
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
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

      {/* ── How It Works ── */}
      <section className="inner-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p className="intro-eyebrow">How It Works</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Three simple steps</h2>
            </div>
          </Reveal>
          <div className="career-steps">
            <Reveal>
              <div className="career-step-card">
                <div className="career-step-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="6" width="32" height="36" rx="4" stroke="var(--accent)" strokeWidth="2" fill="none" />
                    <path d="M16 16H32M16 22H32M16 28H26" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="career-step-num">Step 1</span>
                <h4>Fill the Form</h4>
                <p>Enter your name, phone, WhatsApp and email. Make sure your WhatsApp number is active.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="career-step-card">
                <div className="career-step-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 32V16M24 16L18 22M24 16L30 22" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 32V36C8 38.2 9.8 40 12 40H36C38.2 40 40 38.2 40 36V32" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="career-step-num">Step 2</span>
                <h4>Upload Your CV</h4>
                <p>Drag and drop or click to upload. We accept PDF, DOC and DOCX files.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="career-step-card">
                <div className="career-step-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 24C6 24 12 12 24 12C36 12 42 24 42 24C42 24 36 36 24 36C12 36 6 24 6 24Z" stroke="var(--accent)" strokeWidth="2" fill="none" />
                    <circle cx="24" cy="24" r="6" stroke="var(--accent)" strokeWidth="2" fill="none" />
                    <circle cx="24" cy="24" r="2" fill="var(--accent)" />
                  </svg>
                </div>
                <span className="career-step-num">Step 3</span>
                <h4>We Review &amp; Contact</h4>
                <p>Our HR team reviews your CV. If shortlisted, we contact you on <strong>WhatsApp</strong> within 5-7 working days.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="inner-section inner-section--alt">
        <div className="container" style={{ maxWidth: 640 }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <p className="intro-eyebrow">Apply Now</p>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Submit Your Application</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your full name" required />
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
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>

                {/* CV Upload */}
                <div className="form-group">
                  <label>Upload CV</label>
                  <div
                    className={`cv-dropzone${dragging ? " cv-dropzone--active" : ""}${fileName ? " cv-dropzone--done" : ""}`}
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
                      <div className="cv-dropzone-success">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        <p style={{ color: "var(--accent)", fontWeight: 600 }}>{fileName}</p>
                        <p style={{ fontSize: 12, color: "var(--fg-dim)" }}>Click to change file</p>
                      </div>
                    ) : (
                      <>
                        <div className="cv-dropzone-icon">
                          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 40 }}>
                            <path d="M24 32V16M24 16L18 22M24 16L30 22" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 32V36C8 38.2 9.8 40 12 40H36C38.2 40 40 38.2 40 36V32" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p style={{ fontWeight: 500, fontSize: 14 }}>Drag &amp; drop your CV here</p>
                        <p style={{ fontSize: 12, color: "var(--fg-dim)", marginTop: 2 }}>or click to browse (PDF, DOC, DOCX)</p>
                      </>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                  Submit Application
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginLeft: 8 }}><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

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
