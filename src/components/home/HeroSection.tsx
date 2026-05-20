"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";

const WORDS_LINE1 = ["Capital", "that", "respects"];
const WORDS_LINE3 = ["Craft", "that", "earns", "capital."];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els) return;
    els.forEach((el) => {
      const delay = parseInt(el.dataset.reveal ?? "0", 10);
      setTimeout(() => el.classList.add("hero-visible"), delay);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="African creative in editorial fashion, IFFAC"
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay, heavier on left (text side), lighter on right (image side) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.82) 45%, rgba(13,27,42,0.45) 75%, rgba(13,27,42,0.2) 100%)",
          zIndex: 1,
        }}
        aria-hidden
      />

      {/* Top vignette so nav is always readable */}
      <div
        className="absolute top-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(13,27,42,0.6) 0%, transparent 100%)", zIndex: 2 }}
        aria-hidden
      />

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 inset-x-0 h-64 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(13,27,42,0.8) 0%, transparent 100%)", zIndex: 2 }}
        aria-hidden
      />

      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden>
        <div className="absolute top-0 right-[22%] bottom-0 w-px bg-gradient-to-b from-transparent via-[#B8902A]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#B8902A]/50 via-[#B8902A]/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-14 md:pb-20 pt-32" style={{ zIndex: 3 }}>

        {/* Eyebrow */}
        <div className="hero-word" data-reveal="200" style={{ opacity: 0 }}>
          <p className="text-[#C4581A] text-xs font-bold tracking-[0.25em] uppercase mb-7">
            Impact Fund for African Creatives
          </p>
        </div>

        {/* Headline, three lines */}
        <h1 className="font-display font-medium leading-[1.04] tracking-tight mb-8 max-w-4xl">
          {/* Line 1 */}
          <span className="block">
            {WORDS_LINE1.map((w, i) => (
              <span
                key={i}
                data-reveal={`${350 + i * 60}`}
                className="hero-word inline-block mr-[0.2em] text-white"
                style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)", opacity: 0 }}
              >
                {w}
              </span>
            ))}
          </span>

          {/* Line 2, gold italic "craft." */}
          <span className="block">
            <em
              data-reveal="560"
              className="hero-word inline-block text-[#B8902A] gold-pulse"
              style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)", fontStyle: "italic", opacity: 0 }}
            >
              craft.
            </em>
          </span>

          {/* Line 3 */}
          <span className="block">
            {WORDS_LINE3.map((w, i) => (
              <span
                key={i}
                data-reveal={`${680 + i * 60}`}
                className="hero-word inline-block mr-[0.2em] text-white"
                style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)", opacity: 0 }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtext */}
        <div data-reveal="900" className="hero-word max-w-xl mb-11" style={{ opacity: 0 }}>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            We back Africa&apos;s most ambitious creatives, from incubation to scale, with up to{" "}
            <strong className="text-white font-semibold">€2M in patient capital</strong>{" "}
            and a global stage to match.
          </p>
        </div>

        {/* CTAs */}
        <div data-reveal="1050" className="hero-word flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
          <Link
            href="/apply"
            data-cursor="Apply →"
            className="inline-flex items-center justify-center bg-[#B8902A] text-[#0D1B2A] text-sm font-bold px-9 py-4 hover:bg-[#D4A843] transition-colors duration-200"
          >
            Apply for funding →
          </Link>
          <Link
            href="/investors"
            className="inline-flex items-center justify-center border-2 border-white/50 text-white text-sm font-semibold px-9 py-4 hover:bg-white/10 hover:border-white/80 transition-all duration-200"
          >
            For investors
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div
        data-reveal="1200"
        className="hero-word relative w-full border-t border-white/10"
        style={{ zIndex: 3, opacity: 0, background: "rgba(13,27,42,0.7)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 md:grid-cols-4">
          {[
            { val: "34", suffix: "+",  label: "Startups backed" },
            { val: "16", suffix: "+",  label: "Creative sub-sectors" },
            { val: "2",  prefix: "€", suffix: "M", label: "Max seed per venture" },
            { val: "70", suffix: "+",  label: "Investors in network" },
          ].map((s) => (
            <div key={s.label} className="py-6 px-2 md:px-6 border-r border-white/10 last:border-0">
              <p className="font-display text-[#B8902A] font-medium leading-none mb-1.5" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
                {s.prefix}{s.val}{s.suffix}
              </p>
              <p className="text-white/50 text-xs tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-word {
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
          transform: translateY(22px);
        }
        .hero-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
