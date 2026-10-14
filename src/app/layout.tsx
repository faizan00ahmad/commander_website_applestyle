import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import Preloader from "@/components/motion/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import SeedCursor from "@/components/motion/SeedCursor";
import GrowthStem from "@/components/motion/GrowthStem";
import GlobalFx from "@/components/motion/GlobalFx";
import MotionProvider from "@/components/motion/MotionProvider";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Commander Group | Quality within your reach",
  description:
    "Commander Group, Multan: agro chemicals, seeds and LPG petrogas businesses serving Pakistan since 1996.",
  openGraph: { type: "website", siteName: "Commander Group", title: "Commander Group | Quality within your reach", description: "Agro chemicals, seeds and LPG petrogas businesses serving Pakistan since 1996.", locale: "en_PK" },
  twitter: { card: "summary", title: "Commander Group | Quality within your reach" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Applies the saved theme before first paint to avoid a dark-to-light flash. */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}try{if(sessionStorage.getItem("cg-intro")==="1")document.documentElement.dataset.intro="seen"}catch(e){}` }} />
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>
        <noscript><style>{`.preloader{display:none!important}.reveal,.sprout-piece{opacity:1!important;transform:none!important}`}</style></noscript>
        <MotionProvider>
        <a className="skip" href="#main">Skip to content</a>
        <Preloader />
        <SmoothScroll />
        <SeedCursor />
        <GrowthStem />
        <GlobalFx />
        <div className="glow-bg" aria-hidden><i /><i /></div>
        <ParticleField />
        <div className="grain" aria-hidden />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
