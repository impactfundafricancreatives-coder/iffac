import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IFFAC: Impact Fund for African Creatives",
    template: "%s | IFFAC",
  },
  description:
    "Africa's first patient-capital platform for the creative economy. A US$150M fund backing visionary African entrepreneurs in fashion, film, music, design, and craft.",
  keywords: ["African creative fund", "impact investment Africa", "creative economy", "IFFAC"],
  authors: [{ name: "IFFAC" }],
  metadataBase: new URL("https://iffa-c.com"),
  openGraph: {
    type: "website",
    siteName: "IFFAC",
    title: "IFFAC: Impact Fund for African Creatives",
    description: "Capital that respects craft. Craft that earns capital.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IFFAC: Impact Fund for African Creatives",
    description: "Capital that respects craft. Craft that earns capital.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
