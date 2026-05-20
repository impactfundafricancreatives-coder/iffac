"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioBrands } from "@/data/site";
import type { Discipline } from "@/types";
import { cn } from "@/lib/utils";

type Stage = "all" | "incubation" | "acceleration" | "seed";
type FilterDiscipline = "all" | Discipline;

const disciplines: { value: FilterDiscipline; label: string }[] = [
  { value: "all", label: "All disciplines" },
  { value: "fashion", label: "Fashion" },
  { value: "film", label: "Film" },
  { value: "music", label: "Music" },
  { value: "design", label: "Design" },
  { value: "crafts", label: "Crafts" },
  { value: "visual-arts", label: "Visual Arts" },
];

const stages: { value: Stage; label: string }[] = [
  { value: "all", label: "All stages" },
  { value: "incubation", label: "Incubation" },
  { value: "acceleration", label: "Acceleration" },
  { value: "seed", label: "Seed" },
];

const stageColor: Record<string, string> = {
  incubation: "#B5651D",
  acceleration: "#1F3A8A",
  seed: "#C9A24A",
};

export function PortfolioGrid() {
  const [discipline, setDiscipline] = useState<FilterDiscipline>("all");
  const [stage, setStage] = useState<Stage>("all");

  const filtered = portfolioBrands.filter((b) => {
    const matchDiscipline = discipline === "all" || b.discipline === discipline;
    const matchStage = stage === "all" || b.stage === stage;
    return matchDiscipline && matchStage;
  });

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filter portfolio">
        <div className="flex flex-wrap gap-2">
          {disciplines.map((d) => (
            <button
              key={d.value}
              onClick={() => setDiscipline(d.value)}
              className={cn(
                "caption px-4 py-2 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A]",
                discipline === d.value
                  ? "bg-[#0B1B2B] text-white border-[#0B1B2B]"
                  : "bg-transparent text-[#4A4A4A] border-[#A8A39A]/40 hover:border-[#0B1B2B] hover:text-[#0B1B2B]"
              )}
              aria-pressed={discipline === d.value}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="w-px bg-[#A8A39A]/30 self-stretch mx-1 hidden sm:block" aria-hidden />

        <div className="flex flex-wrap gap-2">
          {stages.map((s) => (
            <button
              key={s.value}
              onClick={() => setStage(s.value)}
              className={cn(
                "caption px-4 py-2 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A]",
                stage === s.value
                  ? "bg-[#0B1B2B] text-white border-[#0B1B2B]"
                  : "bg-transparent text-[#4A4A4A] border-[#A8A39A]/40 hover:border-[#0B1B2B] hover:text-[#0B1B2B]"
              )}
              aria-pressed={stage === s.value}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="caption text-[#A8A39A] mb-6" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "brand" : "brands"} found
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="heading-4 text-[#4A4A4A] mb-2">No matches in this filter.</p>
          <p className="body-md text-[#A8A39A]">
            Try widening your search, there are {portfolioBrands.length} brands and counting.
          </p>
          <button
            onClick={() => { setDiscipline("all"); setStage("all"); }}
            className="mt-4 caption text-[#1F3A8A] hover:text-[#0B1B2B] transition-colors underline underline-offset-2"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#A8A39A]/20">
          {filtered.map((brand) => (
            <Link
              key={brand.slug}
              href={`/portfolio/${brand.slug}`}
              className="group bg-[#F4EFE6] hover:bg-[#0B1B2B] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24A]"
            >
              {/* Image */}
              <div className="aspect-[4/3] bg-[#A8A39A]/20 overflow-hidden relative flex items-center justify-center">
                <span
                  className="font-display font-medium text-8xl text-[#A8A39A]/25 group-hover:text-white/10 transition-colors duration-500 select-none"
                  aria-hidden
                >
                  {brand.name.charAt(0)}
                </span>
              </div>

              {/* Meta */}
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span
                    className="eyebrow transition-colors duration-300 group-hover:text-[#C9A24A]"
                    style={{ color: stageColor[brand.stage] }}
                  >
                    {brand.discipline} · {brand.country}
                  </span>
                  <span className="caption text-[#A8A39A]">{brand.year}</span>
                </div>
                <h3 className="heading-4 text-[#0B1B2B] group-hover:text-white transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="caption text-[#4A4A4A] group-hover:text-[#A8A39A] transition-colors duration-300">
                  {brand.tagline}
                </p>
                <span
                  className="mt-1 self-start caption px-2 py-0.5 border capitalize transition-colors duration-300"
                  style={{
                    borderColor: stageColor[brand.stage] + "66",
                    color: stageColor[brand.stage],
                  }}
                >
                  {brand.stage}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
