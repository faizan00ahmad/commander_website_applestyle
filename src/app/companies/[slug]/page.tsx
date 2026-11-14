import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { companies } from "@/content/data";
import { gharbeenBottles, gharbeenSachets } from "@/content/gharbeen-products";
import { commanderAgroBags } from "@/content/commander-agro-products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const co = companies.find((c) => c.slug === params.slug);
  return { title: co ? `${co.name} | Commander Group` : "Company | Commander Group" };
}

const companyTeams: Record<string, { name: string; role: string }[]> = {
  "commander-agro": [
    { name: "Mr. Usman Rafique", role: "Director" },
    { name: "Mr. Saad Rafique", role: "Director" },
    { name: "Mr. Zahid Ullah", role: "Director Operations" },
    { name: "Mr. Asif Mehmood", role: "GM Sales" },
    { name: "Mr. Tariq Hussain", role: "Head of R&D" },
    { name: "Mr. Naveed Akhtar", role: "Head of QC" },
  ],
  "gharbeen": [
    { name: "Mr. Usman Rafique", role: "Director" },
    { name: "Mr. Saad Rafique", role: "Director" },
    { name: "Mr. Kamran Ali", role: "GM Sales" },
    { name: "Mr. Waqas Ahmed", role: "Regional Manager" },
    { name: "Mr. Faisal Shahzad", role: "Head of Marketing" },
    { name: "Mr. Imran Khan", role: "Supply Chain Manager" },
  ],
  "gharbeen-seeds": [
    { name: "Mr. Usman Rafique", role: "Director" },
    { name: "Mr. Ahmad Raza", role: "Head of Research" },
    { name: "Mr. Bilal Tariq", role: "Operations Manager" },
    { name: "Mr. Zubair Hassan", role: "Field Manager" },
  ],
  "mak-ag": [
    { name: "Mr. Saad Rafique", role: "Director" },
    { name: "Mr. Kashif Nadeem", role: "Operations Head" },
    { name: "Mr. Adnan Yousaf", role: "Technical Manager" },
    { name: "Mr. Rizwan Shah", role: "Sales Manager" },
  ],
  "commander-petrogas": [
    { name: "Mr. Usman Rafique", role: "Director" },
    { name: "Mr. Saad Rafique", role: "Director" },
    { name: "Mr. Farhan Malik", role: "GM Operations" },
    { name: "Mr. Shahbaz Ali", role: "Plant Manager" },
    { name: "Mr. Junaid Arshad", role: "Safety Officer" },
  ],
  "rafco-energy": [
    { name: "Mr. Usman Rafique", role: "Director" },
    { name: "Mr. Saad Rafique", role: "Director" },
    { name: "Mr. Hassan Raza", role: "Head of Projects" },
    { name: "Mr. Sohail Ahmed", role: "Operations Manager" },
  ],
};

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const co = companies.find((c) => c.slug === params.slug);
  if (!co) return notFound();
  const team = companyTeams[co.slug] || [];

  const idx = companies.indexOf(co);
  const next = companies[(idx + 1) % companies.length];
  const prev = companies[(idx - 1 + companies.length) % companies.length];

  return (
    <>
      {/* ── Hero with Logo ── */}
      <section className="inner-hero">
        <div className="inner-hero-bg">
          <img src={asset(co.cover)} alt={co.name} />
          <div className="inner-hero-overlay" />
        </div>
        <div className="container inner-hero-content">
          <Reveal>
            {co.logo && (
              <div className="co-hero-logo">
                <img src={asset(co.logo)} alt={`${co.short} logo`} />
              </div>
            )}
            <p className="intro-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>{co.sector}</p>
            <h1>{co.name}</h1>
            {co.tagline && <p className="co-hero-tagline">{co.tagline}</p>}
            <p>{co.description[0]}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Quick Facts Cards ── */}
      {co.facts.length > 0 && (
        <section className="inner-section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="co-facts-grid">
              {co.facts.map((f) => (
                <Reveal key={f.label}>
                  <div className="co-fact-card">
                    <span className="co-fact-value">{f.value}</span>
                    <span className="co-fact-label">{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Mission & Vision (Gharbeen) / About Card (others) ── */}
      {co.slug === "gharbeen" ? (
        <section className="inner-section">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Who We Are</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Mission &amp; Vision</h2>
              </div>
            </Reveal>
            <div className="mv-grid">
              <Reveal>
                <div className="mv-card">
                  <div className="mv-icon">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="22" stroke="var(--accent)" strokeWidth="2" fill="none" />
                      <circle cx="24" cy="24" r="14" stroke="var(--accent)" strokeWidth="2" fill="none" />
                      <circle cx="24" cy="24" r="6" fill="var(--accent)" />
                    </svg>
                  </div>
                  <h3>Our Mission</h3>
                  <p>To connect agricultural solutions with the people and fields where their value is realized — making crop protection accessible, understandable and relevant to every grower&apos;s needs.</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="mv-card">
                  <div className="mv-icon">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4L30 16H42L32 24L36 38L24 30L12 38L16 24L6 16H18L24 4Z" stroke="var(--accent)" strokeWidth="2" fill="none" />
                      <path d="M24 12L28 20H36L30 25L32 34L24 28L16 34L18 25L12 20H20L24 12Z" fill="var(--accent)" opacity="0.2" />
                    </svg>
                  </div>
                  <h3>Our Vision</h3>
                  <p>To become the most trusted agricultural distribution brand in Pakistan — building the commercial bridge between innovation and farmer adoption through channel reach, field engagement and product education.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ) : (
        <section className="inner-section">
          <div className="container">
            <Reveal>
              <div className="co-intro-card">
                <div className="co-intro-left">
                  {co.logo && (
                    <div className="co-intro-logo">
                      <img src={asset(co.logo)} alt={co.short} />
                    </div>
                  )}
                  <p className="intro-eyebrow">About {co.short}</p>
                  <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>What we do</h2>
                  {co.description.map((p, i) => (
                    <p key={i} className="co-intro-para">{p}</p>
                  ))}
                </div>
                <div className="co-intro-img">
                  <img src={asset(co.cover)} alt={co.name} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Capability Pillars ── */}
      {co.capabilities && co.capabilities.length > 0 && (
        <section className="inner-section inner-section--alt">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">What Sets Us Apart</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Capability Pillars</h2>
              </div>
            </Reveal>
            <div className="cap-grid">
              {co.capabilities.map((cap, i) => (
                <Reveal key={cap}>
                  <div className="cap-card">
                    <span className="cap-num">{String(i + 1).padStart(2, "0")}</span>
                    <h4>{cap}</h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Products Grid (companies without dedicated catalogue) ── */}
      {co.slug !== "gharbeen" && co.slug !== "commander-agro" && co.products.length > 0 && (
        <section className="inner-section inner-section--alt">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Products &amp; Services</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>What we offer</h2>
              </div>
            </Reveal>
            <div className="co-products">
              {co.products.map((p) => (
                <Reveal key={p.name}>
                  <div className="co-product-card">
                    <div className="co-product-img">
                      <img src={asset(p.image)} alt={p.name} loading="lazy" />
                    </div>
                    <h4>{p.name}</h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Product Catalogue Preview (Gharbeen) ── */}
      {co.slug === "gharbeen" && (
        <section className="inner-section inner-section--alt">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Products &amp; Services</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Product Catalogue</h2>
              </div>
            </Reveal>

            <Reveal>
              <div className="catalogue-preview-header">
                <h3>Bottles</h3>
                <span className="catalogue-preview-count">{gharbeenBottles.length} Products</span>
              </div>
            </Reveal>
          </div>
          <div className="catalogue-marquee">
            <div className="catalogue-marquee-track" style={{ "--marquee-items": gharbeenBottles.length } as React.CSSProperties}>
              {[...gharbeenBottles, ...gharbeenBottles].map((p, i) => (
                <div className="catalogue-preview-card" key={`${p.slug}-${i}`}>
                  <div className="catalogue-preview-img">
                    <img src={asset(`/img/gharbeen-bottles/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                  </div>
                  <h4>{p.name}</h4>
                  <span className={`catalogue-badge catalogue-badge--${p.category.toLowerCase().replace(/ /g, "-")}`}>{p.category}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <Reveal>
              <div className="catalogue-preview-cta">
                <Link href="/companies/gharbeen/bottles" className="btn btn-primary">See All Bottles &rarr;</Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="catalogue-preview-header" style={{ marginTop: 64 }}>
                <h3>Sachets</h3>
                <span className="catalogue-preview-count">{gharbeenSachets.length} Products</span>
              </div>
            </Reveal>
          </div>
          <div className="catalogue-marquee">
            <div className="catalogue-marquee-track catalogue-marquee-track--reverse" style={{ "--marquee-items": gharbeenSachets.length } as React.CSSProperties}>
              {[...gharbeenSachets, ...gharbeenSachets].map((p, i) => (
                <div className="catalogue-preview-card" key={`${p.slug}-${i}`}>
                  <div className="catalogue-preview-img">
                    <img src={asset(`/img/gharbeen-sachets/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                  </div>
                  <h4>{p.name}</h4>
                  <span className={`catalogue-badge catalogue-badge--${p.category.toLowerCase().replace(/ /g, "-")}`}>{p.category}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <Reveal>
              <div className="catalogue-preview-cta">
                <Link href="/companies/gharbeen/sachets" className="btn btn-primary">See All Sachets &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Product Catalogue Preview (Commander Agro) ── */}
      {co.slug === "commander-agro" && (
        <section className="inner-section inner-section--alt">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Products &amp; Services</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Product Catalogue</h2>
              </div>
            </Reveal>

            <Reveal>
              <div className="catalogue-preview-header">
                <h3>Fertilizer Bags</h3>
                <span className="catalogue-preview-count">{commanderAgroBags.length} Products</span>
              </div>
            </Reveal>
          </div>
          <div className="catalogue-marquee">
            <div className="catalogue-marquee-track" style={{ "--marquee-items": commanderAgroBags.length } as React.CSSProperties}>
              {[...commanderAgroBags, ...commanderAgroBags].map((p, i) => (
                <div className="catalogue-preview-card" key={`${p.slug}-${i}`}>
                  <div className="catalogue-preview-img">
                    <img src={asset(`/img/commander-agro-bags/${p.slug}.webp`)} alt={p.name} loading="lazy" />
                  </div>
                  <h4>{p.name}</h4>
                  <span className={`catalogue-badge catalogue-badge--${p.category.toLowerCase().replace(/ /g, "-")}`}>{p.category}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <Reveal>
              <div className="catalogue-preview-cta">
                <Link href="/companies/commander-agro/bags" className="btn btn-primary">See All Bags &rarr;</Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {co.gallery.length > 0 && (
        <section className="inner-section">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Gallery</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Inside {co.short}</h2>
              </div>
            </Reveal>
            <div className="co-gallery">
              {co.gallery.slice(0, 8).map((img, i) => (
                <Reveal key={i}>
                  <div className="co-gallery-item">
                    <img src={asset(img)} alt={`${co.name} ${i + 1}`} loading="lazy" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Team ── */}
      {team.length > 0 && (
        <section className="inner-section">
          <div className="container">
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p className="intro-eyebrow">Our People</p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Meet the Team</h2>
              </div>
            </Reveal>
            <div className="team-row">
              {team.map((m) => (
                <Reveal key={m.name}>
                  <div className="team-card">
                    <div className="team-avatar">
                      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="120" rx="60" fill="var(--bg-alt)" />
                        <circle cx="60" cy="45" r="20" fill="var(--glass-border)" />
                        <ellipse cx="60" cy="100" rx="35" ry="28" fill="var(--glass-border)" />
                      </svg>
                    </div>
                    <h4 className="team-name">{m.name}</h4>
                    <span className="team-role">{m.role}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Navigation ── */}
      <section className="inner-section inner-section--alt">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p className="intro-eyebrow">Explore More</p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em" }}>Other companies in our group</h2>
            </div>
          </Reveal>
          <div className="co-nav">
            <Link href={`/companies/${prev.slug}`} className="co-nav-card">
              <Reveal>
                <span className="co-nav-label">&larr; Previous</span>
                <span className="co-nav-name">{prev.short}</span>
                <span className="co-nav-sector">{prev.sector}</span>
              </Reveal>
            </Link>
            <Link href={`/companies/${next.slug}`} className="co-nav-card co-nav-card--right">
              <Reveal>
                <span className="co-nav-label">Next &rarr;</span>
                <span className="co-nav-name">{next.short}</span>
                <span className="co-nav-sector">{next.sector}</span>
              </Reveal>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="card-section" style={{ textAlign: "center", background: "var(--bg)" }}>
        <div className="container">
          <Reveal>
            <p className="intro-eyebrow">Interested?</p>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Want to learn more about {co.short}?</h2>
            <p style={{ fontSize: 16, color: "var(--fg-dim)", maxWidth: 520, margin: "0 auto 24px", lineHeight: 1.6 }}>Get in touch to explore our products and partnership opportunities.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Contact Us</Link>
              <Link href="/about" className="btn btn-secondary">About Commander</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
