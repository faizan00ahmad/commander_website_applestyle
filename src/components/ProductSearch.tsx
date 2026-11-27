"use client";

import { useMemo } from "react";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { gharbeenProducts, productUrlSlug } from "@/content/gharbeen-products";

export default function ProductSearch({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (q: string) => void;
}) {
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return gharbeenProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.active.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.formulation.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="product-search">
      <div className="product-search-input-wrap">
        <svg className="product-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input
          type="text"
          className="product-search-input"
          placeholder="Search products by name, ingredient, or category..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query && (
          <button className="product-search-clear" onClick={() => onQueryChange("")} aria-label="Clear search">
            &times;
          </button>
        )}
      </div>
      {query.trim().length >= 2 && (
        <div className="product-search-results">
          {results.length === 0 ? (
            <p className="product-search-empty">No products found for &ldquo;{query}&rdquo;</p>
          ) : (
            <>
              <p className="product-search-count">{results.length} product{results.length !== 1 ? "s" : ""} found</p>
              <div className="product-search-grid">
                {results.map((p) => (
                  <Link
                    key={`${p.slug}-${p.imgDir}`}
                    href={`/companies/gharbeen/catalogue/${productUrlSlug(p)}`}
                    className="product-search-card"
                  >
                    <div className="product-search-card-img">
                      <img src={asset(`/img/${p.imgDir}/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                    </div>
                    <div className="product-search-card-info">
                      <h4>{p.name}</h4>
                      <span className={`catalogue-badge catalogue-badge--${p.category.toLowerCase().replace(/ /g, "-")}`}>{p.category}</span>
                      <p>{p.active}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
