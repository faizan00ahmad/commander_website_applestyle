import Link from "next/link";
import { asset } from "@/lib/asset";
import Reveal from "@/components/Reveal";
import { gharbeenProducts, gharbeenCategories, productUrlSlug } from "@/content/gharbeen-products";

export default function ExploreProducts() {
  return (
    <section className="explore-products">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p className="intro-eyebrow">Our Products</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Explore Our Product Range
            </h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 560, margin: "12px auto 0", lineHeight: 1.6 }}>
              Premium agrochemical solutions across {gharbeenCategories.length} categories &mdash; {gharbeenProducts.length} products trusted by farmers nationwide.
            </p>
          </div>
        </Reveal>

        {gharbeenCategories.map((cat) => {
          const items = gharbeenProducts.filter((p) => p.category === cat);
          if (items.length === 0) return null;
          const preview = items.slice(0, 6);
          return (
            <div key={cat} className="explore-category">
              <Reveal>
                <div className="explore-category-header">
                  <div>
                    <h3 className="explore-category-title">{cat}</h3>
                    <span className="explore-category-count">{items.length} Products</span>
                  </div>
                  <Link href="/companies/gharbeen/catalogue" className="explore-view-all">
                    View All
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </Link>
                </div>
              </Reveal>
              <div className="explore-scroll">
                {preview.map((p) => (
                  <Reveal key={`${p.slug}-${p.imgDir}`}>
                    <Link href={`/companies/gharbeen/catalogue/${productUrlSlug(p)}`} className="explore-card">
                      <div className="explore-card-img">
                        <img src={asset(`/img/${p.imgDir}/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                      </div>
                      <div className="explore-card-info">
                        <h4>{p.name}</h4>
                        <span className="explore-card-size">{p.size}</span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}

        <Reveal>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/companies/gharbeen/catalogue" className="btn btn-primary">
              Browse Full Catalogue
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
