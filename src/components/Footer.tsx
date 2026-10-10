import Link from "next/link";
import { companies, site } from "@/content/data";

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
            <img src="/img/logo-1-white.png" alt="Commander Group" />
            <p>Quality within your reach. Serving Pakistan since {site.founded}.</p>
            <div className="socials">
              <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div>
            <h4>Links</h4>
            <ul>{links.map(([l, h]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Companies</h4>
            <ul>{companies.map((c) => <li key={c.slug}><Link href={`/companies/${c.slug}`}>{c.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Head Office</h4>
            <p>{site.address}</p>
            <p style={{ marginTop: 10 }}>{site.phones[0]}</p>
            <p>{site.emails[0]}</p>
          </div>
        </div>
        <div className="foot-word">COMMANDER</div>
        <div className="foot-bottom">
          <span>© Copyright Commander 2020. All right reserved.</span>
          <span>Created by Edusoft System Solutions</span>
        </div>
      </div>
    </footer>
  );
}
