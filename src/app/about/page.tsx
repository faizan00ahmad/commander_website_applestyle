import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Awards from "@/components/Awards";
import { mission, vision } from "@/content/data";

export const metadata = { title: "About Us | Commander Group" };

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title={<>Quality <span className="grad">within your reach</span></>} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container split">
          <Reveal>
            <div className="vm">
              <div className="eyebrow">Our Vision</div>
              <h3>Our Vision</h3>
              <p className="muted" style={{ marginTop: 14 }}>{vision}</p>
            </div>
            <img src="/img/about-3-1.png" alt="Commander Group" style={{ marginTop: 20, borderRadius: 20 }} />
          </Reveal>
          <Reveal delay={1}>
            <div className="eyebrow">Our Mission</div>
            <h2 style={{ marginBottom: 28 }}>What we stand for</h2>
            <ul className="list">{mission.map((m) => <li key={m}>{m}</li>)}</ul>
          </Reveal>
        </div>
      </section>
      <Awards />
    </>
  );
}
