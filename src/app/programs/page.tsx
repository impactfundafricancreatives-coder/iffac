import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs",
  description: "Three stages. Sixteen sub-sectors. One ladder to scale, IFFAC's full program offering.",
};

const stages = [
  {
    n: "01",
    title: "Incubation",
    range: "€5,000 – €10,000",
    duration: "6 – 9 months",
    accent: "#FFC200",
    who: "Structured programs for early-stage creative entrepreneurs.",
    get: ["Sub-sector specialist mentorship", "Business support & capacity building", "Peer network access", "€5K–€10K financial support"],
    eligibility: "Any African creative with a structured idea and initial proof-of-concept.",
  },
  {
    n: "02",
    title: "Acceleration",
    range: "€50,000 – €250,000",
    duration: "Ongoing support",
    accent: "#1F3A8A",
    who: "Ventures with demonstrated traction ready to expand globally.",
    get: ["Non-repayable grants €50K–€250K", "International market access", "Fashion week / festival placements", "Seed-pitch preparation"],
    eligibility: "Operating business with at least 12 months trading history and verifiable revenue.",
  },
  {
    n: "03",
    title: "Seed Financing",
    range: "Up to €2M",
    duration: "Patient capital",
    accent: "#EA6B0E",
    who: "Investment-ready ventures pitching for institutional backing.",
    get: ["Up to €2M equity or convertible debt", "Investment Committee pitch process", "Continued technical assistance", "Global distribution & press support"],
    eligibility: "Acceleration alumni or equivalent-stage ventures with a vetted business plan.",
  },
];

const pillars = [
  { name: "Black Heritage Textiles Group (BHTG)", amount: "US$100M target", desc: "Circularity and value-chain enablement in African textiles and manufacturing." },
  { name: "Fashion Sub-Fund", amount: "US$1M", desc: "Debt/equity vehicle in collaboration with the African Fashion Foundation (AFF)." },
  { name: "Film Sub-Fund", amount: "US$1M", desc: "Strategic investment into TalentX's $2M film fund, backing African cinema." },
  { name: "Grants for Upskilling", amount: "US$22M target", desc: "Technical assistance including the African Fashion Futures Incubator (AFFI)." },
];

export default function ProgramsPage() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* Hero with real image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ minHeight: "60vh" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/program-incubation.jpg"
            alt="African creatives in a program workshop"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(28,28,28,0.96) 0%, rgba(28,28,28,0.85) 55%, rgba(28,28,28,0.5) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-6">Programs</p>
          <h1 className="font-display text-white font-medium leading-[1.05] tracking-tight max-w-3xl mb-6"
            style={{ fontSize: "clamp(3rem,6vw,6rem)" }}>
            Three stages. One ladder to scale.
          </h1>
          <p className="text-[#AAAAAA] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Built for how creative businesses actually grow. Enter at any stage, exit with global reach.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-8 py-4 hover:bg-[#FF7A1A] transition-colors"
          >
            Apply for Cohort 2026 →
          </Link>
        </div>
      </section>

      {/* Three stages */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-[#888888]/20">
        <div className="max-w-7xl mx-auto space-y-px bg-[#888888]/20">
          {stages.map((s) => (
            <div key={s.n} className="bg-[#FAFAFA] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-5xl font-medium" style={{ color: s.accent + "33" }}>
                    {s.n}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: s.accent }}>
                      {s.title}
                    </p>
                    <p className="font-display text-[#1C1C1C] text-2xl font-medium">{s.range}</p>
                  </div>
                </div>
                <p className="text-[#444444] text-sm">{s.duration}</p>
              </div>

              {/* Middle */}
              <div className="lg:col-span-1">
                <p className="text-[#888888] text-xs font-bold uppercase tracking-wide mb-3">What you get</p>
                <ul className="space-y-2">
                  {s.get.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-[#1C1C1C] text-sm">
                      <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#EA6B0E]" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right */}
              <div className="lg:col-span-1">
                <p className="text-[#888888] text-xs font-bold uppercase tracking-wide mb-3">Eligibility</p>
                <p className="text-[#444444] text-sm leading-relaxed mb-6">{s.eligibility}</p>
                <Link
                  href="/apply"
                  className="inline-flex items-center text-sm font-bold hover:gap-2 transition-all gap-1"
                  style={{ color: s.accent }}
                >
                  Apply for {s.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-5">Funding Pillars</p>
          <h2 className="font-display text-white text-4xl font-medium mb-14">Four vehicles. One mandate.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {pillars.map((p) => (
              <div key={p.name} className="bg-[#1C1C1C] p-10 hover:bg-[#252525] transition-colors">
                <p className="text-[#EA6B0E] text-xl font-display font-medium mb-2">{p.amount}</p>
                <p className="text-white font-semibold text-base mb-3">{p.name}</p>
                <p className="text-[#888888] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
          <Link href="/apply" className="inline-flex items-center justify-center bg-[#1C1C1C] text-white text-sm font-bold px-8 py-4 hover:bg-[#252525] transition-colors">
            Apply now →
          </Link>
          <Link href="/portfolio" className="inline-flex items-center justify-center border border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold px-8 py-4 hover:bg-[#1C1C1C] hover:text-white transition-colors">
            See the portfolio
          </Link>
        </div>
      </section>

    </div>
  );
}
