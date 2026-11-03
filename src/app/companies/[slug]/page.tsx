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

  return (
    <>
      <section className="co-hero">
        <div className="co-hero-bg">
          <img src={asset(co.cover)} alt={co.name} />
          <div />
        </div>
        <div className="container co-hero-content">
          <Reveal>
            <p className="sector">{co.sector}</p>
            <h1>{co.name}</h1>
          </Reveal>
        </div>
      </section>

      <section className="co-body">
        <div className="container">
          {co.description.map((p, i) => (
            <Reveal key={i}><p>{p}</p></Reveal>
          ))}

          {co.facts.length > 0 && (
            <Reveal>
              <div className="co-facts">
                {co.facts.map((f) => (
                  <div key={f.label}>
                    <div className="co-fact-val">{f.value}</div>
                    <div className="co-fact-label">{f.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {co.products.length > 0 && (
            <>
              <Reveal>
                <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 48, marginBottom: 24 }}>
                  Products
                </h2>
              </Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
                {co.products.map((p) => (
                  <Reveal key={p.name}>
                    <div className="cc-product">
                      <img src={asset(p.image)} alt={p.name} style={{ borderRadius: 12, aspectRatio: "1", objectFit: "cover", width: "100%", marginBottom: 8 }} />
                      <span style={{ fontWeight: 500 }}>{p.name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {co.gallery.length > 0 && (
        <section className="co-gallery">
          <div className="container">
            <Reveal><h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24 }}>Gallery</h2></Reveal>
            <div className="gallery-grid">
              {co.gallery.map((img, i) => (
                <Reveal key={i}><img src={asset(img)} alt={`${co.name} ${i + 1}`} loading="lazy" /></Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="card-section" style={{ textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", marginBottom: 24 }}>Interested in our products?</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/" className="btn btn-secondary">All Companies</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
