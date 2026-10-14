import { asset } from "@/lib/asset";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import HeroVisual from "@/components/motion/HeroVisual";
import SproutText from "@/components/motion/SproutText";
import ProductMarquee from "@/components/motion/ProductMarquee";
import CompanyTimeline from "@/components/motion/CompanyTimeline";
import CorporateTabs from "@/components/CorporateTabs";
import Awards from "@/components/Awards";
import { chairman, companies, stats } from "@/content/data";

const ticker = ["Agro Chemicals", "Seeds", "Petrogas", "LPG", "Pesticides", "Fungicides", "Weedicides", "Rodenticides", "Acaricides", "ISO 9000", "ISO 14000", "ISO 17025"];

const pillars = [
  { big: "ISO 17025", title: "Certified R&D", text: "State of the art laboratories and a research team behind every formulation." },
  { big: "9000+ MT", title: "Annual LPG sales", text: "Petrogas moves over 9000 MT a year, from north to south across Pakistan." },
  { big: "ISO 9000 · 14000", title: "Certified facilities", text: "Our LPG facilities hold ISO 9000 and ISO 14000 certification." },
  { big: "Since 1996", title: "Trusted for 25+ years", text: "Commitment, integrity and excellence since the group was established." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill"><b /> Commander Group · Multan, Pakistan · Since 1996</div>
            <SproutText as="h1" text="Quality within your reach" accent={["your","reach"]} waitIntro />
            <p className="lead">
              A diversified group growing across agro chemicals, seeds and petrogas, built on commitment, integrity and excellence for more than 25 years.
            </p>
            <div className="hero-actions">
              <Link href="#businesses" className="btn primary">Our Businesses →</Link>
              <Link href="/career" className="btn">Career</Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num"><Counter value={s.value} suffix={s.suffix} plain={s.plain} /></div>
                  <div className="lab">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="businesses" style={{ paddingTop: 30 }}>
        <div className="container">
          <Reveal>
            <div className="sec-head">
              <div className="eyebrow">Our Businesses</div>
              <SproutText text="One group. Many sectors." accent={["Many","sectors"]} />
            </div>
          </Reveal>
          <div className="cards">
            {companies.map((c, i) => (
              <Reveal key={c.slug} delay={((i % 3) as 0 | 1 | 2)}>
                <Link href={`/companies/${c.slug}`} className="card" style={{ height: "100%" }}>
                  {c.comingSoon && <span className="soon">Coming soon</span>}
                  <div className="thumb"><img src={asset(c.cover)} alt={c.name} loading="lazy" /></div>
                  <div className="body">
                    <span className="tag">{c.sector}</span>
                    <h3>{c.name}</h3>
                    <p>{c.description[0].slice(0, 150).trimEnd()}…</p>
                    <span className="more">Learn more <span>→</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pm-section">
        <div className="container">
          <Reveal>
            <div className="sec-head">
              <div className="eyebrow">Our Products</div>
              <SproutText text="Seen in the fields of Pakistan" accent={["fields"]} />
            </div>
          </Reveal>
        </div>
        <ProductMarquee />
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <div className="sec-head">
              <div className="eyebrow">Why Commander</div>
              <SproutText text="Built for quality at scale" accent={["quality","scale"]} />
            </div>
          </Reveal>
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={((i % 3) as 0 | 1 | 2)}>
                <div className="pillar">
                  <b>{p.big}</b>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CompanyTimeline />

      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="eyebrow">Corporate Details</div>
            <SproutText text="Agro Chemicals, Seeds, Petrogas" accent={["Petrogas"]} />
            <p className="lead" style={{ marginTop: 20 }}>
              From formulation plants and R&amp;D to LPG storage and distribution, every business in the group follows one standard of quality.
            </p>
          </Reveal>
          <Reveal delay={1}><CorporateTabs /></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <div className="chair">
              <img className="portrait" src={asset("/img/ceo.gif")} alt={chairman.name} />
              <div>
                <div className="eyebrow">Message from the Chairman</div>
                <blockquote>{chairman.excerpt}</blockquote>
                <div className="who"><b>{chairman.name}</b><span>{chairman.role}</span></div>
                <Link href="/chairman" className="btn" style={{ marginTop: 26 }}>Read more →</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Awards />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta">
              <div className="eyebrow" style={{ justifyContent: "center" }}>Career</div>
              <SproutText text="Grow with Commander" accent={["Commander"]} />
              <p className="lead">Join a team that is moving forward into an era of growth and opportunity.</p>
              <Link href="/career" className="btn primary">Apply Online →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
