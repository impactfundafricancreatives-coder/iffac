"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { impactStats } from "@/data/site";
import Link from "next/link";

export function ImpactStrip() {
  return (
    <section
      className="section-gap bg-[#1C1C1C]"
      aria-labelledby="impact-heading"
    >
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Eyebrow color="gold" className="mb-4">Impact</Eyebrow>
            <h2 id="impact-heading" className="heading-2 text-white">
              The receipts.
            </h2>
          </div>
          <Link
            href="/impact"
            className="caption text-[#888888] hover:text-[#EA6B0E] transition-colors inline-flex items-center gap-2"
          >
            Full impact dashboard →
          </Link>
        </div>

        {/* Stats grid */}
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1C1C1C] p-8 md:p-10"
            >
              <dt className="caption text-[#888888] mb-3">{stat.label}</dt>
              <dd className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-none">
                {stat.value}
              </dd>
              {stat.note && (
                <p className="caption text-[#444444] mt-2">{stat.note}</p>
              )}
            </div>
          ))}
        </dl>

        <p className="mt-6 caption text-[#444444]">
          Figures current as of May 2026.{" "}
          <Link href="/impact/methodology" className="text-[#888888] hover:text-[#EA6B0E] transition-colors underline underline-offset-2">
            Read our methodology
          </Link>
        </p>
      </div>
    </section>
  );
}
