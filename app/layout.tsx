import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Oswald } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SmoothScrollProvider from "@/components/providers/smooth-scroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "StrictFood | Le cheat meal qui n'en est pas un",
  description:
    "Fast-good healthy a Perpignan. Burgers premium, 0% huile, ingredients artisanaux locaux. Commande par telephone.",
  openGraph: {
    title: "StrictFood | Le cheat meal qui n'en est pas un",
    description:
      "Fast-good healthy a Perpignan. Burgers premium, 0% huile, ingredients artisanaux locaux.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
