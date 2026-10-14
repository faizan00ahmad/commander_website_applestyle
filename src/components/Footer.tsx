import { asset } from "@/lib/asset";
import Link from "next/link";
import { companies, site } from "@/content/data";
import FooterWordmark from "./motion/FooterWordmark";

const links: [string, string][] = [
  ["Home", "/"], ["About Us", "/about"], ["Chairman Message", "/chairman"],
  ["Services", "/services"], ["Distributor", "/distributors"], ["Career", "/career"], ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
          <span className="logo-chip"><img src={asset("/img/commander-logo.png")} alt="Commander Group" /></span>
            <p>Quality within your reach. Serving Pakistan since {site.founded}.</p>
            <div className="socials">
              <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div>
            <h3>Links</h3>
            <ul>{links.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
          </div>
          <div>
            <h3>Companies</h3>
            <ul>{companies.map((c) => <li key={c.slug}><Link href={`/companies/${c.slug}`}>{c.name}</Link></li>)}</ul>
          </div>
          <div>
            <h3>Head Office</h3>
            <p>{site.address}</p>
            <p style={{ marginTop: 10 }}>{site.phones[0]}</p>
            <p>{site.emails[0]}</p>
          </div>
        </div>
        <FooterWordmark />
        <div className="foot-bottom">
          <span>© Copyright Commander 2020. All right reserved.</span>
          <span>Created by Edusoft System Solutions</span>
        </div>
      </div>
    </footer>
  );
}
