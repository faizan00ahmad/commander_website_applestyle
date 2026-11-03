import { asset } from "@/lib/asset";
import Reveal from "@/components/Reveal";
import { chairman } from "@/content/data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Leadership | Commander Group" };

export default function LeadershipPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Leadership</p>
            <h1>The people behind Commander</h1>
            <p>Our leadership team brings decades of experience across agriculture and energy.</p>
          </Reveal>
        </div>
      </section>

      <section className="leader-detail">
        <div className="container">
          {chairman.bios.map((b) => (
            <Reveal key={b.name}>
              <div className="leader-detail-card">
                <img src={asset(b.image)} alt={b.name} />
                <div>
                  <h3>{b.name}</h3>
                  <p className="role">{b.role}</p>
                  {b.paras.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="chairman-letter">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p className="intro-eyebrow">Chairman&apos;s Message</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                A message from {chairman.name}
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="letter-content">
              {chairman.letter.map((p, i) => <p key={i}>{p}</p>)}
              <div className="letter-sign">
                <p style={{ marginBottom: 4, fontStyle: "italic", color: "var(--fg-dim)" }}>{chairman.regards}</p>
                <strong>{chairman.signer}</strong>
                <span>{chairman.signerRole}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
