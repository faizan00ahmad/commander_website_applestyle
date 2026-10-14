import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Awards from "@/components/Awards";
import { CareerForm } from "@/components/Forms";

export const metadata = { title: "Career | Commander Group", description: "Apply online for a career at Commander Group, Multan." };

export default function Career() {
  return (
    <>
      <PageHero eyebrow="Career" title={<>Careers <span className="grad">Apply Online</span></>} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <Reveal><div className="form-card"><CareerForm /></div></Reveal>
        </div>
      </section>
      <Awards />
    </>
  );
}
