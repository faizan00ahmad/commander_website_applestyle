import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { companies } from "@/content/data";
import { commanderAgroBags } from "@/content/commander-agro-products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ slug: "commander-agro" }];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (params.slug !== "commander-agro") return { title: "Not Found" };
  return { title: "Fertilizer Bags — Commander Agro Product Catalogue | Commander Group" };
}

export default function BagsPage({ params }: { params: { slug: string } }) {
  if (params.slug !== "commander-agro") return notFound();
  const co = companies.find((c) => c.slug === "commander-agro")!;

  return (
    <>
      <section className="inner-hero inner-hero--short">
        <div className="inner-hero-bg">
          <img src={asset(co.cover)} alt="Commander Agro Bags" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            {co.logo && (
              <div className="co-hero-logo">
                <img src={asset(co.logo)} alt="Commander Agro logo" />
              </div>
            )}
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Commander Agro · Product Catalogue</p>
            <h1>Fertilizer Bags</h1>
            <p>Premium imported &amp; locally formulated fertilizers for enhanced crop nutrition. {commanderAgroBags.length} products.</p>
          </Reveal>
        </div>
      </section>

      <section className="inner-section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 32 }}>
              <Link href="/companies/commander-agro" className="catalogue-back">&larr; Back to Commander Agro</Link>
            </div>
          </Reveal>
          <div className="catalogue-grid">
            {commanderAgroBags.map((p) => (
              <Reveal key={p.slug}>
                <div className="catalogue-card">
                  <div className="catalogue-img">
                    <img src={asset(`/img/commander-agro-bags/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                  </div>
                  <div className="catalogue-info">
                    <h4>{p.name}</h4>
                    <span className={`catalogue-badge catalogue-badge--${p.category.toLowerCase().replace(/ /g, "-")}`}>{p.category}</span>
                    <p className="catalogue-active">{p.active}</p>
                    <div className="catalogue-meta">
                      <span>{p.formulation}</span>
                      <span>{p.size}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Explore More</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Discover our full range</h2>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/companies/commander-agro" className="btn btn-primary">Back to Commander Agro</Link>
              <Link href="/companies" className="btn btn-secondary">All Companies</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
