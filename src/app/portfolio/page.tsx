import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "34+ ventures backed across 9 countries and 16 creative sub-sectors.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#1C1C1C] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-6">Portfolio</p>
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
              The brands. The makers.
            </h1>
          </div>
          <div>
            <p className="text-[#888888] text-lg leading-relaxed mb-8">
              34+ ventures backed across 9 countries and 16 creative sub-sectors, every one
              building something the world hasn't seen before, from Africa.
            </p>
            <Link href="/apply" className="inline-flex items-center bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-7 py-3.5 hover:bg-[#D45C00] transition-colors">
              Become part of this →
            </Link>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-16 md:py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <PortfolioGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#1C1C1C] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-white font-display text-3xl font-medium mb-1">Ready to join this pipeline?</p>
            <p className="text-[#888888] text-sm">Cohort 2026 is open, deadline 30 June.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/apply" className="inline-flex items-center justify-center bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-7 py-3.5 hover:bg-[#D45C00] transition-colors">
              Apply now →
            </Link>
            <Link href="/investors" className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-semibold px-7 py-3.5 hover:bg-white/5 transition-colors">
              Invest in this pipeline
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
