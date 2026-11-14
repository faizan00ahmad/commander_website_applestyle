import Link from "next/link";
import { asset } from "@/lib/asset";
import { companies, site } from "@/content/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={asset("/img/commander-logo.png")} alt="Commander Group" />
            <p>Quality within your reach. Serving Pakistan since {site.founded}.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/feedback">Feedback</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Companies</h4>
            <ul>
              {companies.map((c) => (
                <li key={c.slug}><Link href={`/companies/${c.slug}`}>{c.short}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Head Office</h4>
            <ul>
              <li><span style={{ fontSize: 14, color: "var(--fg-dim)" }}>{site.address}</span></li>
              <li><span style={{ fontSize: 14, color: "var(--fg-dim)" }}>{site.phones[0]}</span></li>
              <li><span style={{ fontSize: 14, color: "var(--fg-dim)" }}>{site.emails[0]}</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Commander Group. All rights reserved.</span>
          <span>Created by Edusoft System Solutions</span>
        </div>
      </div>
    </footer>
  );
}
