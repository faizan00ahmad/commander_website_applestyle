"use client";

import { useEffect, useCallback } from "react";
import { asset } from "@/lib/asset";
import type { GharbeenProduct } from "@/content/gharbeen-products";

export default function ProductModal({
  product,
  onClose,
}: {
  product: GharbeenProduct | null;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [product, handleKey]);

  if (!product) return null;

  const p = product;
  const catSlug = p.category.toLowerCase().replace(/ /g, "-");

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="product-modal-img">
          <img src={asset(`/img/${p.imgDir}/${p.slug}.webp`)} alt={p.name} />
        </div>
        <div className="product-modal-info">
          <span className={`catalogue-badge catalogue-badge--${catSlug}`}>{p.category}</span>
          <h2>{p.name}</h2>
          <div className="product-modal-detail">
            <div className="product-modal-row">
              <span className="product-modal-label">Active Ingredient</span>
              <span>{p.active}</span>
            </div>
            <div className="product-modal-row">
              <span className="product-modal-label">Formulation</span>
              <span>{p.formulation}</span>
            </div>
            <div className="product-modal-row">
              <span className="product-modal-label">Pack Size</span>
              <span>{p.size}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
