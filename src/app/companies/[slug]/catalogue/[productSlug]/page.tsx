import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ProductCTA from "@/components/ProductCTA";
import { gharbeenProducts, productUrlSlug, findProductByUrlSlug } from "@/content/gharbeen-products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return gharbeenProducts.map((p) => ({
    slug: "gharbeen",
    productSlug: productUrlSlug(p),
  }));
}

export function generateMetadata({ params }: { params: { slug: string; productSlug: string } }): Metadata {
  if (params.slug !== "gharbeen") return { title: "Not Found" };
  const product = findProductByUrlSlug(params.productSlug);
  if (!product) return { title: "Not Found" };
  return { title: `${product.name} | Gharbeen | Commander Group` };
}

export default function ProductPage({ params }: { params: { slug: string; productSlug: string } }) {
  if (params.slug !== "gharbeen") return notFound();
  const p = findProductByUrlSlug(params.productSlug);
  if (!p) return notFound();

  const catSlug = p.category.toLowerCase().replace(/ /g, "-");

  return (
    <>
      <section className="product-detail-hero">
        <div className="container">
          <Reveal>
            <Link href="/companies/gharbeen/catalogue" className="product-detail-back">&larr; Back to Catalogue</Link>
          </Reveal>
          <div className="product-detail-layout">
            <Reveal>
              <div className="product-detail-img">
                <img src={asset(`/img/${p.imgDir}/${p.slug}.webp`)} alt={p.name} />
              </div>
            </Reveal>
            <Reveal>
              <div className="product-detail-info">
                <span className={`catalogue-badge catalogue-badge--${catSlug}`}>{p.category}</span>
                <h1 className="product-detail-name">{p.name}</h1>

                <div className="product-detail-specs">
                  <div className="product-detail-row">
                    <span className="product-detail-label">Active Ingredient</span>
                    <span className="product-detail-value">{p.active}</span>
                  </div>
                  <div className="product-detail-row">
                    <span className="product-detail-label">Formulation</span>
                    <span className="product-detail-value">{p.formulation}</span>
                  </div>
                  <div className="product-detail-row">
                    <span className="product-detail-label">Pack Size</span>
                    <span className="product-detail-value">{p.size}</span>
                  </div>
                </div>

                <ProductCTA name={p.name} size={p.size} formulation={p.formulation} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="card-section" style={{ textAlign: "center", background: "var(--bg-alt)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Explore More</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Browse Our Products</h2>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/companies/gharbeen/catalogue" className="btn btn-primary">Full Catalogue</Link>
              <Link href="/companies/gharbeen" className="btn btn-secondary">Gharbeen Overview</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
