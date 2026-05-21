import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { portfolioBrands } from "@/data/site";
import { ArrowRight } from "lucide-react";

const disciplineLabel: Record<string, string> = {
  fashion: "Fashion",
  film: "Film",
  music: "Music",
  design: "Design",
  crafts: "Crafts",
  "visual-arts": "Visual Arts",
  culinary: "Culinary",
  other: "Creative",
};

export function FeaturedPortfolio() {
  const featured = portfolioBrands.slice(0, 6);

  return (
    <section className="section-gap bg-[#FAFAFA]" aria-labelledby="portfolio-heading">
      <div className="container-content">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow className="mb-4">Portfolio</Eyebrow>
            <h2 id="portfolio-heading" className="heading-2 text-[#1C1C1C]">
              The brands. The makers.<br />The receipts.
            </h2>
          </div>
          <Link href="/portfolio">
            <Button variant="secondary" size="md">
              See all brands <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        {/* Grid, 7/5 asymmetric on first row, then 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#888888]/20">
          {featured.map((brand) => (
            <Link
              key={brand.slug}
              href={`/portfolio/${brand.slug}`}
              className="group bg-[#FAFAFA] hover:bg-[#1C1C1C] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA6B0E]"
              aria-label={`${brand.name}, ${brand.discipline}`}
            >
              {/* Image area */}
              <div className="aspect-[4/3] bg-[#888888]/20 overflow-hidden relative">
                {/* Placeholder until real images are provided */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C]/5 to-[#1C1C1C]/20 group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display font-medium text-6xl text-[#888888]/30 group-hover:text-white/10 transition-colors duration-500"
                    aria-hidden
                  >
                    {brand.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-[#FFC200] group-hover:text-[#EA6B0E] transition-colors duration-300">
                    {disciplineLabel[brand.discipline]} · {brand.country}
                  </span>
                  <span className="caption text-[#888888]">{brand.year}</span>
                </div>
                <h3 className="heading-4 text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="caption text-[#444444] group-hover:text-[#888888] transition-colors duration-300 line-clamp-2">
                  {brand.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <p className="body-md text-[#444444]">
            34+ ventures backed across 9 countries.{" "}
            <Link href="/apply" className="text-[#1F3A8A] hover:text-[#1C1C1C] underline underline-offset-2 transition-colors">
              Become part of this →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
