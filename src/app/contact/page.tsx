import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Awards from "@/components/Awards";
import { ContactForm } from "@/components/Forms";
import { site } from "@/content/data";

export const metadata = { title: "Contact Us | Commander Group", description: "Contact Commander Group at 5A/5B Industrial Estate, Multan: phone, e-mail and enquiry form." };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title={<>Get in <span className="grad">touch</span></>} />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <Reveal>
            <div className="form-card">
              <div className="info-item"><span>Head Office</span>{site.address}</div>
              <div className="info-item"><span>Phone</span><a href="tel:+92616514060">{site.phones[0]}</a></div>
              <div className="info-item"><span>Mobile</span><a href="tel:+923456320003">{site.mobile}</a><div className="muted" style={{ fontSize: 14 }}>{site.mobileContact}</div></div>
              <div className="info-item"><span>Fax</span>{site.fax}</div>
              <div className="info-item"><span>E-Mail</span>{site.emails.map((e) => <div key={e}><a href={`mailto:${e}`}>{e}</a></div>)}</div>
            </div>
          </Reveal>
          <Reveal delay={1}><div className="form-card"><ContactForm /></div></Reveal>
        </div>
      </section>
      <Awards />
    </>
  );
}
