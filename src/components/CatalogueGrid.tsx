"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import Reveal from "@/components/Reveal";
import ProductModal from "@/components/ProductModal";
import { gharbeenProducts, gharbeenCategories } from "@/content/gharbeen-products";
import type { GharbeenProduct } from "@/content/gharbeen-products";

export default function CatalogueGrid() {
  const [selected, setSelected] = useState<GharbeenProduct | null>(null);

  return (
    <>
      {gharbeenCategories.map((cat) => {
        const items = gharbeenProducts.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} style={{ marginBottom: 56 }}>
            <Reveal>
              <div className="catalogue-preview-header">
                <h3>{cat}</h3>
                <span className="catalogue-preview-count">{items.length} Products</span>
              </div>
            </Reveal>
            <div className="catalogue-grid">
              {items.map((p) => (
                <Reveal key={`${p.slug}-${p.imgDir}`}>
                  <div
                    className="catalogue-card catalogue-card--clickable"
                    onClick={() => setSelected(p)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(p); }}
                  >
                    <div className="catalogue-img">
                      <img src={asset(`/img/${p.imgDir}/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                    </div>
                    <div className="catalogue-info">
                      <h4>{p.name}</h4>
                      <span className={`catalogue-badge catalogue-badge--${cat.toLowerCase().replace(/ /g, "-")}`}>{cat}</span>
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
        );
      })}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
