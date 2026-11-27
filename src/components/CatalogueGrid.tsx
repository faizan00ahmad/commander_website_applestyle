"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import Reveal from "@/components/Reveal";
import { gharbeenProducts, gharbeenCategories, productUrlSlug } from "@/content/gharbeen-products";

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query || query.length < 1) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function isMatch(p: { name: string; active: string; category: string; formulation: string }, q: string) {
  return (
    p.name.toLowerCase().includes(q) ||
    p.active.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.formulation.toLowerCase().includes(q)
  );
}

export default function CatalogueGrid({ query = "" }: { query?: string }) {
  const q = query.trim().toLowerCase();

  return (
    <>
      {gharbeenCategories.map((cat) => {
        const items = gharbeenProducts.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} style={{ marginBottom: 56 }}>
            <Reveal>
              <div className="catalogue-preview-header">
                <h3><HighlightText text={cat} query={q} /></h3>
                <span className="catalogue-preview-count">{items.length} Products</span>
              </div>
            </Reveal>
            <div className="catalogue-grid">
              {items.map((p) => {
                const matched = q.length >= 1 && isMatch(p, q);
                return (
                  <Reveal key={`${p.slug}-${p.imgDir}`}>
                    <Link
                      href={`/companies/gharbeen/catalogue/${productUrlSlug(p)}`}
                      className={`catalogue-card catalogue-card--clickable${matched ? " catalogue-card--highlight" : ""}`}
                    >
                      <div className="catalogue-img">
                        <img src={asset(`/img/${p.imgDir}/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                      </div>
                      <div className="catalogue-info">
                        <h4><HighlightText text={p.name} query={q} /></h4>
                        <span className={`catalogue-badge catalogue-badge--${cat.toLowerCase().replace(/ /g, "-")}`}>{cat}</span>
                        <p className="catalogue-active"><HighlightText text={p.active} query={q} /></p>
                        <div className="catalogue-meta">
                          <span><HighlightText text={p.formulation} query={q} /></span>
                          <span>{p.size}</span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
