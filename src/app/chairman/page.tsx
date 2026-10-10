import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Awards from "@/components/Awards";
import { chairman } from "@/content/data";

export const metadata = { title: "Chairman Message | Commander Group" };

export default function Chairman() {
  return (
    <>
      <PageHero eyebrow="Chairman Message" title={<>Message from the <span className="grad">Chairman</span></>} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container co-grid">
          <Reveal>
            <div className="prose">
              {chairman.letter.map((p) => <p key={p}>{p}</p>)}
              <p style={{ color: "var(--hi)" }}>{chairman.regards}</p>
              <p style={{ color: "var(--hi)", marginBottom: 4, fontSize: 20 }}><b>{chairman.signer}</b></p>
              <p className="muted">{chairman.signerRole}</p>
              <img src="/img/ceo-sign.png" alt="Signature" style={{ height: 70, width: "auto", background: "#fff", borderRadius: 10, padding: 8 }} />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="facts">
              <img src="/img/ceo.gif" alt={chairman.name} style={{ borderRadius: 20, border: "1px solid var(--line)", width: "100%" }} />
              <div className="fact"><b style={{ fontSize: 24 }}>{chairman.name}</b><span>{chairman.role}</span></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container cards" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {chairman.bios.map((b, i) => (
            <Reveal key={b.name} delay={(i + 1) as 1 | 2}>
              <div className="vm" style={{ height: "100%" }}>
                <div className="eyebrow">{b.role}</div>
                <h3 style={{ marginBottom: 16 }}>{b.name}</h3>
                {b.paras.map((p) => <p key={p} className="muted" style={{ marginBottom: 14 }}>{p}</p>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Awards />
    </>
  );
}
