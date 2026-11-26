import Link from "next/link";
import { asset } from "@/lib/asset";
import Reveal from "@/components/Reveal";
import { gharbeenProducts, gharbeenCategories, productUrlSlug } from "@/content/gharbeen-products";

export default function CatalogueGrid() {
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
                  <Link
                    href={`/companies/gharbeen/catalogue/${productUrlSlug(p)}`}
                    className="catalogue-card catalogue-card--clickable"
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
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
