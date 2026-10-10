"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { companies, nav } from "@/content/data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" aria-label="Commander Group home">
          <span className="logo-chip"><img src="/img/commander-logo.png" alt="Commander Group" /></span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {nav.map((n) =>
            n.children ? (
              <div className="dd" key={n.label}>
                <Link href={n.href} className={path.startsWith("/companies") ? "active" : ""}>{n.label}</Link>
                <div className="dd-menu">
                  {companies.map((c) => <Link key={c.slug} href={`/companies/${c.slug}`}>{c.name}</Link>)}
                </div>
              </div>
            ) : (
              <Link key={n.label} href={n.href} className={path === n.href ? "active" : ""}>{n.label}</Link>
            )
          )}
          <Link href="/career" className="btn primary" style={{ marginLeft: 6, padding: "10px 18px" }}>Career</Link>
        </nav>
        <div className="hdr-actions">
          <ThemeToggle />
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "✕" : "☰"}</button>
        </div>
      </div>
    </header>
  );
}
