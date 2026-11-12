import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { companies } from "@/content/data";
import { gharbeenBottles } from "@/content/gharbeen-products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ slug: "gharbeen" }];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (params.slug !== "gharbeen") return { title: "Not Found" };
  return { title: "Bottles — Gharbeen Product Catalogue | Commander Group" };
}

export default function BottlesPage({ params }: { params: { slug: string } }) {
  if (params.slug !== "gharbeen") return notFound();
  const co = companies.find((c) => c.slug === "gharbeen")!;

  return (
    <>
      <section className="inner-hero inner-hero--short">
        <div className="inner-hero-bg">
          <img src={asset(co.cover)} alt="Gharbeen Bottles" />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            {co.logo && (
              <div className="co-hero-logo">
                <img src={asset(co.logo)} alt="Gharbeen logo" />
              </div>
            )}
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Gharbeen · Product Catalogue</p>
            <h1>Bottles</h1>
            <p>Liquid formulations — EC, SC, SL &amp; OD — for crop protection and nutrition. {gharbeenBottles.length} products.</p>
          </Reveal>
        </div>
      </section>

      <section className="inner-section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 32 }}>
              <Link href="/companies/gharbeen" className="catalogue-back">&larr; Back to Gharbeen</Link>
            </div>
          </Reveal>
          <div className="catalogue-grid">
            {gharbeenBottles.map((p) => (
              <Reveal key={p.slug}>
                <div className="catalogue-card">
                  <div className="catalogue-img">
                    <img src={asset(`/img/gharbeen-bottles/${p.slug}.webp`)} alt={p.name} loading="lazy" />
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
            <p className="intro-eyebrow">More Products</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Looking for sachets?</h2>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/companies/gharbeen/sachets" className="btn btn-primary">View Sachets</Link>
              <Link href="/companies/gharbeen" className="btn btn-secondary">Back to Gharbeen</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
