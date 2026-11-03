"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { companies } from "@/content/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <img src={asset("/img/commander-logo.png")} alt="Commander Group" />
        </Link>
        <nav className={`nav${open ? " open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <div className="dd">
            <a href="#">Companies</a>
            <div className="dd-menu">
              {companies.map((c) => (
                <Link key={c.slug} href={`/companies/${c.slug}`} onClick={() => setOpen(false)}>{c.short}</Link>
              ))}
            </div>
          </div>
          <Link href="/leadership" onClick={() => setOpen(false)}>Leadership</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
        <div className="nav-actions">
          <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
