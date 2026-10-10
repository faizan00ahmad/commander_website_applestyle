"use client";
import Link from "next/link";
import { useState } from "react";
import { corporate } from "@/content/data";

export default function CorporateTabs() {
  const [i, setI] = useState(0);
  const c = corporate[i];
  return (
    <div>
      <div className="tabs" role="tablist">
        {corporate.map((t, n) => (
          <button key={t.key} role="tab" aria-selected={n === i} className={`tab ${n === i ? "on" : ""}`} onClick={() => setI(n)}>{t.key}</button>
        ))}
      </div>
      <div className="panel">
        <p>{c.text}</p>
        <Link className="more" href={`/companies/${c.slug}`}>Learn more <span>→</span></Link>
      </div>
    </div>
  );
}
