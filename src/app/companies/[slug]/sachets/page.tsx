import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ slug: "gharbeen" }];
}

export const metadata: Metadata = {
  title: "Product Catalogue | Gharbeen | Commander Group",
};

export default function SachetsPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh", textAlign: "center" }}>
      <div>
        <p style={{ marginBottom: 16 }}>Our products are now organized by category.</p>
        <Link href={`/companies/${params.slug}/catalogue`} className="btn btn-primary">View Product Catalogue</Link>
      </div>
    </div>
  );
}
