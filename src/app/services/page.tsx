import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Awards from "@/components/Awards";

export const metadata = { title: "Services | Commander Group" };

const services = [
  { t: "Import & Formulation", d: "Pesticides, Fungicides, Rodenticides, Acaricides and Weedicides, formulated as liquid, powder and granule products.", href: "/companies/commander-agro", img: "/img/commander-agro-03-thumb.jpg" },
  { t: "Retail & Farmer Training", d: "Branded formulations through 5 regional and 50 territorial offices, with on-field training for farmers.", href: "/companies/gharbeen", img: "/img/guderian-thumb.jpg" },
  { t: "LPG Import & Distribution", d: "LPG imported, stored, refilled in dedicated cylinders and delivered through retail outlets and authorized distributors across Pakistan.", href: "/companies/commander-petrogas", img: "/img/petrogas-03-thumb.jpg" },
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Our <span className="grad">Services</span></>} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container cards">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i as 0 | 1 | 2}>
              <Link href={s.href} className="card" style={{ height: "100%" }}>
                <div className="thumb"><img src={s.img} alt={s.t} loading="lazy" /></div>
                <div className="body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="more">Learn more <span>→</span></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Awards />
    </>
  );
}
