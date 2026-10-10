import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Commander Group | Quality within your reach",
  description:
    "Commander Group, Multan: agro chemicals, seeds and LPG petrogas businesses serving Pakistan since 1996.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        <div className="glow-bg" aria-hidden><i /><i /></div>
        <ParticleField />
        <div className="grain" aria-hidden />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
