import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/content/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us | Commander Group" };

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <img src={asset("/img/banner-1-3.jpg")} alt="Commander Group office" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Contact Us</p>
            <h1>Let&apos;s grow together</h1>
            <p>Have a question or want to partner with us? We&apos;d love to hear from you.</p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="contact-cards">
        <div className="container">
          <div className="contact-cards-grid">
            <Reveal>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h4>Head Office</h4>
                <p>{site.address}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h4>Phone</h4>
                <p>{site.phones[0]}</p>
                <p style={{ fontSize: 14, marginTop: 4 }}>{site.mobile}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <h4>Email</h4>
                {site.emails.map((e) => <p key={e}>{e}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-info-side">
                <h3>Get in touch</h3>
                <p>Fill out the form and our team will get back to you within 24 hours. You can also reach us directly through phone or email.</p>

                <div className="contact-detail">
                  <h4>Working Hours</h4>
                  <p>Monday to Saturday: 9:00 AM - 6:00 PM</p>
                </div>

                <div className="contact-detail">
                  <h4>Key Contact</h4>
                  <p>{site.mobileContact}</p>
                  <p>{site.mobile}</p>
                </div>

                <div className="contact-detail">
                  <h4>Fax</h4>
                  <p>{site.fax}</p>
                </div>

                <div className="contact-social">
                  <a href={site.facebook} target="_blank" rel="noreferrer" className="contact-social-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Facebook
                  </a>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="contact-social-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="contact-form">
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>Send a Message</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="Your phone number" />
                    </div>
                    <div className="form-group">
                      <label>Company</label>
                      <input type="text" placeholder="Your company (optional)" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option>Product Inquiry</option>
                      <option>Distribution Partnership</option>
                      <option>Career Opportunities</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Message
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginLeft: 8 }}><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="contact-map">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p className="intro-eyebrow">Location</p>
              <h2 className="section-heading">Find us in Multan</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="contact-map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.123!2d71.4567!3d30.1575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5A%2F5B+Industrial+Estate+Multan!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "var(--radius)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Commander Group Head Office"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
