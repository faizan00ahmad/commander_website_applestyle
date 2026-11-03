import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Commander Group | Quality within your reach",
  description:
    "Commander Group, Multan: agro chemicals, seeds and LPG petrogas businesses serving Pakistan since 1996.",
  openGraph: { type: "website", siteName: "Commander Group", title: "Commander Group | Quality within your reach", description: "Agro chemicals, seeds and LPG petrogas businesses serving Pakistan since 1996.", locale: "en_PK" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
      <body>
        <a className="sr-only" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
