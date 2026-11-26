import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CatalogueGrid from "@/components/CatalogueGrid";
import { companies } from "@/content/data";
import { gharbeenProducts, gharbeenCategories } from "@/content/gharbeen-products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ slug: "gharbeen" }];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (params.slug !== "gharbeen") return { title: "Not Found" };
  return { title: "Product Catalogue | Gharbeen | Commander Group" };
}

export default function CataloguePage({ params }: { params: { slug: string } }) {
  if (params.slug !== "gharbeen") return notFound();
  const co = companies.find((c) => c.slug === "gharbeen")!;

  return (
    <>
      <section className="inner-hero inner-hero--short">
        <div className="inner-hero-bg">
          <img src={asset(co.cover)} alt="Gharbeen Product Catalogue" />
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
            <h1>Full Product Catalogue</h1>
            <p>{gharbeenProducts.length} products across {gharbeenCategories.filter(cat => gharbeenProducts.some(p => p.category === cat)).length} categories.</p>
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

          <CatalogueGrid />
        </div>
      </section>

      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Explore More</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Back to Gharbeen</h2>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/companies/gharbeen" className="btn btn-primary">Gharbeen Overview</Link>
              <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
