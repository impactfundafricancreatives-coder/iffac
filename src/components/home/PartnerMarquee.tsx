"use client";

import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { partners } from "@/data/site";

export function PartnerMarquee() {
  const allPartners = [...partners, ...partners]; // duplicate for seamless loop

  return (
    <section
      className="py-16 bg-[#FAFAFA] border-y border-[#888888]/20 overflow-hidden"
      aria-label="Strategic partners"
    >
      <div className="container-content mb-8">
        <Eyebrow>Strategic Partners</Eyebrow>
      </div>

      {/* Marquee track */}
      <div className="relative flex" aria-hidden>
        <div
          className="flex items-center gap-16 animate-marquee whitespace-nowrap"
          style={{ animationDuration: "40s" }}
        >
          {allPartners.map((partner, i) => (
            <span
              key={`${partner.name}-${i}`}
              className="font-ui font-semibold text-sm tracking-wide text-[#888888] hover:text-[#1C1C1C] transition-colors duration-300 cursor-default select-none px-2 shrink-0"
            >
              {partner.name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
