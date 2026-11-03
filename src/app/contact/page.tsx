import Reveal from "@/components/Reveal";
import { site } from "@/content/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us | Commander Group" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Contact</p>
            <h1>Get in touch</h1>
            <p>We&apos;d love to hear from you. Reach out and let&apos;s grow together.</p>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          <Reveal>
            <div className="contact-info">
              <h3>Head Office</h3>
              <div className="contact-item">
                <h4>Address</h4>
                <p>{site.address}</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>{site.phones[0]}</p>
              </div>
              <div className="contact-item">
                <h4>Mobile</h4>
                <p>{site.mobile}</p>
                <p style={{ fontSize: 13, color: "var(--fg-dim)" }}>{site.mobileContact}</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                {site.emails.map((e) => <p key={e}>{e}</p>)}
              </div>
              <div className="contact-item">
                <h4>Fax</h4>
                <p>{site.fax}</p>
              </div>
              <div className="contact-item">
                <h4>Social</h4>
                <div style={{ display: "flex", gap: 12 }}>
                  <a href={site.facebook} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 14 }}>Facebook</a>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: 14 }}>Instagram</a>
                </div>
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
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="How can we help?" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Your message..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
