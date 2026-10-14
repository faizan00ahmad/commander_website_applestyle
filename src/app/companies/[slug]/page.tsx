import { asset } from "@/lib/asset";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import Awards from "@/components/Awards";
import { companies, distributors } from "@/content/data";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = companies.find((x) => x.slug === params.slug);
  return { title: `${c?.name ?? "Company"} | Commander Group`, description: c ? c.description[0].replace(/^Plant site address:[^.]*.s*/, "").slice(0, 155).trimEnd() + "…" : undefined };
}

export default function Company({ params }: { params: { slug: string } }) {
  const c = companies.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <>
      <PageHero eyebrow={c.sector} title={c.name} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          {c.comingSoon ? (
            <Reveal>
              <div className="soon-box">
                <div className="eyebrow" style={{ justifyContent: "center" }}>{c.sector}</div>
                <h2>Coming <span className="grad">soon</span></h2>
                <p className="lead" style={{ margin: "0 auto 28px" }}>{c.description[0]}</p>
                <Link href="/" className="btn">← Back to home</Link>
              </div>
            </Reveal>
          ) : (
            <div className="co-grid">
              <Reveal>
                {c.logo && <div className="logo-box"><img src={asset(c.logo)} alt={c.name} /></div>}
                <div className="prose">{c.description.map((p) => <p key={p}>{p}</p>)}</div>
              </Reveal>
              <Reveal delay={1}>
                <div className="facts">
                  {c.facts.map((f) => <div className="fact" key={f.label}><b>{f.value}</b><span>{f.label}</span></div>)}
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {!c.comingSoon && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="sec-head"><div className="eyebrow">Product Details</div><h2>Gallery</h2></div>
              <Gallery images={c.gallery} alt={c.short} />
            </Reveal>
          </div>
        </section>
      )}

      {c.slug === "commander-petrogas" && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="sec-head"><div className="eyebrow">Network</div><h2>Distributor List</h2></div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>S.N</th><th>Distributor Name</th><th>Address</th><th>Contact Number</th></tr></thead>
                  <tbody>
                    {distributors.slice(0, 8).map((d, i) => (
                      <tr key={d[0]}><td>{i + 1}</td><td>{d[0]}</td><td>{d[1]}</td><td><a href={`tel:${d[2].replace(/\s/g, "")}`}>{d[2]}</a></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link href="/distributors" className="btn" style={{ marginTop: 24 }}>View full list →</Link>
            </Reveal>
          </div>
        </section>
      )}
      <Awards />
    </>
  );
}
