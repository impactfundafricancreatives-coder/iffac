import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { AnimatedSection } from "@/components/home/AnimatedSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "IFFAC: Impact Fund for African Creatives",
  description: "Capital that respects craft. Craft that earns capital. A US$150M Pan-African patient-capital platform.",
};

const stages = [
  { n: "01", title: "Incubation",     range: "€5K – €10K",    duration: "6–9 months",     accent: "#FFC200", body: "Structured programs with sub-sector specialists, capacity building, mentorship, and financial support for early-stage creative ventures." },
  { n: "02", title: "Acceleration",   range: "€50K – €250K",  duration: "Ongoing support", accent: "#888888", body: "Grants that drive expansion, sustainability, and global reach. Prepares ventures for seed-stage investment and international markets." },
  { n: "03", title: "Seed Financing", range: "Up to €2M",     duration: "Patient capital", accent: "#EA6B0E", body: "Patient capital for investment-ready ventures, equity or convertible debt, with continued technical assistance at every stage of growth." },
];

const portfolio = [
  { name: "Atto Tetteh",    country: "Ghana",        discipline: "Fashion",  stage: "Acceleration", i: "A" },
  { name: "Studio Kali",    country: "Senegal",      discipline: "Design",   stage: "Incubation",   i: "S" },
  { name: "Nairobi Frames", country: "Kenya",        discipline: "Film",     stage: "Seed",         i: "N" },
  { name: "Adire Atelier",  country: "Nigeria",      discipline: "Fashion",  stage: "Acceleration", i: "A" },
  { name: "Kigali Sound",   country: "Rwanda",       discipline: "Music",    stage: "Incubation",   i: "K" },
  { name: "Cape Craft Co.", country: "South Africa", discipline: "Crafts",   stage: "Acceleration", i: "C" },
];

const stories = [
  { category: "From the Studio", title: "Atto Tetteh is cutting Accra's silhouette for the world", date: "Apr 2026", time: "8 min", href: "/stories/atto-tetteh-accra-silhouette" },
  { category: "From the Set",    title: "The cinema fund changing East Africa's film economy",       date: "Mar 2026", time: "6 min", href: "/stories/nairobi-frames-east-african-cinema" },
  { category: "Research",        title: "The state of African creative capital: 2026 outlook",       date: "Feb 2026", time: "12 min",href: "/stories/state-of-african-creative-capital" },
];

const partners = [
  "African Fashion Foundation", "Annan Capital Partners", "Seedstars",
  "Digital Fashion Academy", "TalentX Entertainment", "African Development Bank",
  "UNEP", "ITC Ethical Fashion Initiative",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── MISSION ── (cream, clip-diagonal-top) */}
      <section className="bg-[#FAFAFA] clip-diagonal-top py-24 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" stagger>
            <div>
              <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-6">Our Mission</p>
              <h2 className="font-display text-[#1C1C1C] font-medium leading-[1.08] tracking-tight" style={{ fontSize: "clamp(2.5rem,5vw,5rem)" }}>
                Africa's first patient-capital platform for the creative economy.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-[#1C1C1C]/70 text-lg leading-relaxed">
                IFFAC is a US$150M fund that backs visionary African entrepreneurs across 16
                creative sub-sectors, providing capital, technical support, and global market
                access at every stage of growth.
              </p>
              <p className="text-[#1C1C1C]/60 text-base leading-relaxed">
                Founded by <strong className="text-[#1C1C1C] font-semibold">Roberta Annan</strong>,
                UNEP Goodwill Ambassador for the Creative Economy and founder of the African
                Fashion Foundation, IFFAC is built for scale.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#1C1C1C] text-sm font-bold hover:text-[#EA6B0E] transition-colors gap-1 hover:gap-2">
                Our story →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── THREE STAGES ── (navy, clip-diagonal-bottom) */}
      <section className="bg-[#1C1C1C] clip-diagonal-bottom px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Programs</p>
            <h2 className="font-display text-white font-medium leading-snug" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Three stages. One ladder to scale.
            </h2>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8" stagger>
            {stages.map((s) => (
              <Link
                key={s.n}
                href="/programs"
                data-cursor="Explore"
                className="group relative bg-[#1C1C1C] p-10 flex flex-col gap-5 overflow-hidden
                  hover:-translate-y-2 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                {/* Animated top border */}
                <div
                  className="absolute top-0 left-0 h-[2px] transition-all duration-300 ease-out"
                  style={{
                    width: "40px",
                    background: s.accent,
                    "--full-width": "100%",
                  } as React.CSSProperties}
                />
                <style>{`
                  a:hover [class*="absolute"][class*="top-0"] { width: 100% !important; }
                `}</style>

                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: s.accent }}>
                    Stage {s.n}
                  </p>
                  <p
                    className="font-display font-medium text-white leading-tight transition-all duration-300 group-hover:scale-[1.04] origin-left"
                    style={{ fontSize: "clamp(1.4rem,2vw,2rem)" }}
                  >
                    {s.title}
                  </p>
                </div>

                <div>
                  <p className="font-display font-medium text-3xl" style={{ color: s.accent }}>{s.range}</p>
                  <p className="text-[#AAAAAA] text-xs mt-1">{s.duration}</p>
                </div>

                <p className="text-[#AAAAAA] text-sm leading-relaxed flex-1">{s.body}</p>

                <p className="text-xs font-bold tracking-wide transition-all duration-200 group-hover:translate-x-1" style={{ color: s.accent }}>
                  Learn more →
                </p>
              </Link>
            ))}
          </AnimatedSection>

          <p className="mt-8 text-[#AAAAAA] text-sm pb-20">
            All programs combine capital + capability + connections. Enter at any stage.
          </p>
        </div>
      </section>

      {/* ── IMPACT STATS ── (cream) */}
      <section className="bg-[#FAFAFA] clip-diagonal-top py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Impact</p>
            <h2 className="font-display text-[#1C1C1C] font-medium" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              The receipts.
            </h2>
          </AnimatedSection>
          <StatsCounter />
          <AnimatedSection className="mt-8">
            <Link href="/impact" className="text-[#AAAAAA] text-sm hover:text-[#1C1C1C] transition-colors">
              Full impact dashboard →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PORTFOLIO ── (cream-dark) */}
      <section className="bg-[#F0F0F0] py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Portfolio</p>
              <h2 className="font-display text-[#1C1C1C] font-medium" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
                The brands. The makers.
              </h2>
            </div>
            <Link href="/portfolio" className="shrink-0 border border-[#1C1C1C] text-[#1C1C1C] text-xs font-bold px-6 py-3 hover:bg-[#1C1C1C] hover:text-white transition-colors">
              See all brands →
            </Link>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10" stagger>
            {portfolio.map((b) => (
              <Link
                key={b.name}
                href="/portfolio"
                data-cursor="View →"
                className="group bg-[#F0F0F0] p-8 hover:bg-[#1C1C1C] transition-colors duration-500 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#1C1C1C] group-hover:bg-[#EA6B0E] flex items-center justify-center transition-colors duration-500">
                  <span className="font-display text-white group-hover:text-[#1C1C1C] text-xl font-medium transition-colors duration-500">
                    {b.i}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#FFC200] group-hover:text-[#EA6B0E] transition-colors duration-300 mb-1">
                    {b.discipline} · {b.country}
                  </p>
                  <p className="font-display text-[#1C1C1C] group-hover:text-white text-xl font-medium transition-colors duration-300">
                    {b.name}
                  </p>
                </div>
                <span className="text-[#AAAAAA] text-xs border border-[#1C1C1C]/20 group-hover:border-white/20 px-2.5 py-0.5 self-start transition-colors duration-300">
                  {b.stage}
                </span>
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHO WE SERVE ── (navy) */}
      <section className="bg-[#1C1C1C] clip-diagonal-top py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="mb-14">
            <h2 className="font-display text-white font-medium" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
              Built for creatives. Built for investors.
            </h2>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8" stagger>
            {[
              {
                tag:  "For Creatives",
                body: "The only fund that understands what you build. Apply for up to €2M, and a partner who speaks your language.",
                cta:  "Apply for funding →",
                href: "/apply",
                bg:   "bg-[#1C1C1C]",
              },
              {
                tag:  "For Investors",
                body: "Africa's creative economy is a US$60B+ opportunity with DFI-grade governance, AIF structure, and a clear return pathway.",
                cta:  "Investor overview →",
                href: "/investors",
                bg:   "bg-[#252525]",
              },
            ].map((c) => (
              <div key={c.tag} className={`${c.bg} p-12 md:p-16 flex flex-col gap-6`}>
                <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase">{c.tag}</p>
                <p className="text-white text-xl md:text-2xl leading-relaxed flex-1">{c.body}</p>
                <Link
                  href={c.href}
                  className="self-start inline-flex items-center bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-7 py-3.5 hover:bg-[#FF7A1A] transition-colors"
                >
                  {c.cta}
                </Link>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── STORIES ── (cream) */}
      <section className="bg-[#FAFAFA] clip-diagonal-top py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Stories</p>
              <h2 className="font-display text-[#1C1C1C] font-medium" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)" }}>
                From the studios, sets, and looms.
              </h2>
            </div>
            <Link href="/stories" className="shrink-0 text-[#1C1C1C] text-sm font-bold hover:text-[#EA6B0E] transition-colors">
              Read all stories →
            </Link>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1C1C1C]/10" stagger>
            {stories.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                data-cursor="Read →"
                className="group bg-[#FAFAFA] p-8 hover:bg-[#1C1C1C] transition-colors duration-500 flex flex-col gap-5"
              >
                <div className="aspect-video bg-[#1C1C1C]/8 group-hover:bg-[#252525] transition-colors duration-500" />
                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-[#FFC200] group-hover:text-[#EA6B0E] text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-300">
                    {s.category} · {s.time}
                  </p>
                  <h3 className="font-display text-[#1C1C1C] group-hover:text-white text-xl font-medium leading-snug transition-colors duration-300 flex-1">
                    {s.title}
                  </h3>
                  <p className="text-[#AAAAAA] text-xs">{s.date}</p>
                </div>
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── PARTNERS MARQUEE ── (cream-dark) */}
      <section className="bg-[#F0F0F0] py-16 overflow-hidden border-y border-[#1C1C1C]/10">
        <p className="text-center text-[#AAAAAA] text-xs font-bold tracking-[0.2em] uppercase mb-10 px-6">
          Strategic Partners
        </p>
        {/* Row 1, left */}
        <div className="flex items-center gap-12 whitespace-nowrap mb-4">
          <div className="flex items-center gap-12 marquee-left">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="shrink-0 text-[#AAAAAA] hover:text-[#1C1C1C] text-sm font-bold tracking-wide transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
        {/* Row 2, right */}
        <div className="flex items-center gap-12 whitespace-nowrap">
          <div className="flex items-center gap-12 marquee-right">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="shrink-0 text-[#1C1C1C]/20 text-sm font-bold tracking-wide cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── (navy) */}
      <section className="bg-[#1C1C1C] clip-diagonal-top py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-6">The IFFAC Journal</p>
            <h2 className="font-display text-white font-medium mb-4" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
              One email a month.
            </h2>
            <p className="text-[#AAAAAA] text-lg mb-10">
              Stories, open calls, and the work shaping Africa&apos;s creative economy.
            </p>
            <NewsletterForm dark />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
