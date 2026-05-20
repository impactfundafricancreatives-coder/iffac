"use client";

import { useEffect, useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { impactStats } from "@/data/site";
import Link from "next/link";

export function ImpactStrip() {
  return (
    <section
      className="section-gap bg-[#0B1B2B]"
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
            className="caption text-[#A8A39A] hover:text-[#C9A24A] transition-colors inline-flex items-center gap-2"
          >
            Full impact dashboard →
          </Link>
        </div>

        {/* Stats grid */}
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0B1B2B] p-8 md:p-10"
            >
              <dt className="caption text-[#A8A39A] mb-3">{stat.label}</dt>
              <dd className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl leading-none">
                {stat.value}
              </dd>
              {stat.note && (
                <p className="caption text-[#4A4A4A] mt-2">{stat.note}</p>
              )}
            </div>
          ))}
        </dl>

        <p className="mt-6 caption text-[#4A4A4A]">
          Figures current as of May 2026.{" "}
          <Link href="/impact/methodology" className="text-[#A8A39A] hover:text-[#C9A24A] transition-colors underline underline-offset-2">
            Read our methodology
          </Link>
        </p>
      </div>
    </section>
  );
}
