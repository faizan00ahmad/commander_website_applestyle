import Link from "next/link";
import type { ReactNode } from "react";

export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumb"><Link href="/">Home</Link> / {eyebrow}</div>
        <h1>{title}</h1>
        {children && <p className="lead" style={{ marginTop: 22 }}>{children}</p>}
      </div>
    </section>
  );
}
