import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DataRoomForm } from "@/components/ui/DataRoomForm";

export const metadata: Metadata = {
  title: "Investors",
  description: "Africa's creative economy is a US$60B+ market. IFFAC is the institutional vehicle to allocate to it.",
};

const pillars = [
  { acronym: "BHTG", name: "Black Heritage Textiles Group", amount: "US$100M", desc: "Circularity and value-chain enablement in African textiles and manufacturing.", color: "#0AA350" },
  { acronym: "AFF", name: "Fashion Sub-Fund", amount: "US$1M", desc: "Debt/equity vehicle launched with the African Fashion Foundation.", color: "#1F3A8A" },
  { acronym: "Film", name: "Film Sub-Fund", amount: "US$1M", desc: "Strategic investment into TalentX's $2M fund, backing African cinema.", color: "#FFC200" },
  { acronym: "AFFI", name: "Grants for Upskilling", amount: "US$22M", desc: "Technical assistance including the African Fashion Futures Incubator.", color: "#EA6B0E" },
];

const sdgs = [
  { n: "8", label: "Decent Work & Economic Growth" },
  { n: "9", label: "Industry, Innovation & Infrastructure" },
  { n: "10", label: "Reduced Inequalities" },
  { n: "17", label: "Partnerships for the Goals" },
];

export default function InvestorsPage() {
  return (
    <div className="bg-[#FAFAFA]">

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#1C1C1C] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-6">For Investors</p>
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight max-w-3xl mb-8">
            Africa's creative economy is a US$60B+ market. We are how you allocate to it.
          </h1>
          <p className="text-[#888888] text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            IFFAC is a US$150M patient-capital platform, the first institutional vehicle
            purpose-built for Africa's cultural and creative industries. Managed by{" "}
            <strong className="text-white">Annan Capital Partners</strong>, backed by sovereign investors,
            DFIs, and strategic family offices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#data-room" className="inline-flex items-center justify-center bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-8 py-4 hover:bg-[#D45C00] transition-colors">
              Request the data room →
            </a>
            <a href="/resources/iffac-one-pager.pdf" className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/5 transition-colors">
              Download one-pager (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* The thesis */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-[#888888]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">The Thesis</p>
            <h2 className="font-display text-[#1C1C1C] text-4xl font-medium leading-snug mb-6">
              The continent's most powerful export has always been its culture.
            </h2>
            <p className="text-[#444444] text-lg leading-relaxed mb-4">
              Africa's cultural and creative industries generate an estimated US$60B annually,
              support millions of livelihoods, and reach global audiences, yet receive a fraction
              of formal capital relative to their economic contribution.
            </p>
            <p className="text-[#444444] text-base leading-relaxed">
              IFFAC exists to close that gap: deploying patient capital across 16 creative
              sub-sectors through a three-stage model with technical assistance built in at
              every phase.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#888888]/20">
            {[
              { v: "US$60B+", l: "Annual creative economy output" },
              { v: "US$150M", l: "IFFAC total target raise" },
              { v: "€2M", l: "Max seed per venture" },
              { v: "16+", l: "Sub-sectors targeted" },
            ].map((s) => (
              <div key={s.l} className="bg-[#FAFAFA] p-8">
                <p className="font-display text-[#1C1C1C] text-4xl font-medium mb-2">{s.v}</p>
                <p className="text-[#888888] text-xs leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund structure */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-5">Fund Structure</p>
          <h2 className="font-display text-white text-4xl font-medium mb-5">Four funding pillars.</h2>
          <p className="text-[#888888] text-lg max-w-xl mb-14">
            IFFAC deploys capital through four distinct vehicles, allowing LPs to allocate across
            the creative-economy value chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {pillars.map((p) => (
              <div key={p.acronym} className="bg-[#1C1C1C] p-10 hover:bg-[#252525] transition-colors border-t-2" style={{ borderColor: p.color }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: p.color }}>{p.acronym}</span>
                  <span className="font-display text-2xl font-medium" style={{ color: p.color }}>{p.amount}</span>
                </div>
                <p className="text-white font-semibold text-base mb-3">{p.name}</p>
                <p className="text-[#888888] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event photo strip */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image
          src="/event-venue.jpg"
          alt="IFFAC fashion exhibition"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(28,28,28,0.55)" }}>
          <p className="font-display text-white text-center font-medium italic"
            style={{ fontSize: "clamp(1.5rem,3vw,3rem)" }}>
            &ldquo;Join us on a journey to empower Africa&apos;s creative visionaries.&rdquo;
          </p>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-[#888888]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Governance & ESG</p>
            <h2 className="font-display text-[#1C1C1C] text-4xl font-medium leading-snug mb-6">
              Impact that meets institutional standard.
            </h2>
            <p className="text-[#444444] text-base leading-relaxed mb-6">
              IFFAC is structured as an Alternative Investment Fund (AIF), managed under an
              EU-registered AIFM through Annan Capital Partners. Our ESG framework aligns with the
              UN SDGs and UNEP&apos;s Creative Economy Programme.
            </p>
            <p className="text-[#444444] text-base leading-relaxed mb-8">
              Roberta Annan serves as UNEP Goodwill Ambassador for the Creative Economy, the only
              such appointment globally, underscoring IFFAC&apos;s multilateral credibility and
              governance posture.
            </p>
            <Link href="/about" className="text-[#1C1C1C] text-sm font-bold hover:text-[#EA6B0E] transition-colors">
              Meet the investment committee →
            </Link>
          </div>

          <div>
            <div className="mb-8 space-y-0">
              {[
                { label: "Fund domicile", value: "Luxembourg" },
                { label: "Fund type", value: "Alternative Investment Fund (AIF)" },
                { label: "Investment advisor", value: "Annan Capital Partners" },
                { label: "Target raise", value: "US$150M" },
                { label: "Active countries", value: "Ghana, Nigeria, Kenya, Rwanda, Senegal + 4 more" },
                { label: "Portfolio companies", value: "34+ startups backed" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-4 border-b border-[#888888]/20">
                  <span className="text-[#888888] text-sm">{row.label}</span>
                  <span className="text-[#1C1C1C] text-sm font-semibold text-right max-w-[200px]">{row.value}</span>
                </div>
              ))}
            </div>

            <p className="text-[#888888] text-xs font-bold uppercase tracking-wide mb-4">UN SDG Alignment</p>
            <div className="grid grid-cols-2 gap-3">
              {sdgs.map((s) => (
                <div key={s.n} className="flex items-center gap-3 border border-[#888888]/20 p-4 bg-white">
                  <span className="font-display text-[#1C1C1C] text-3xl font-medium leading-none">{s.n}</span>
                  <span className="text-[#444444] text-xs leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network photo */}
      <section className="py-20 md:py-24 px-6 md:px-16 lg:px-24 border-b border-[#888888]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/investors-diagram.png"
              alt="IFFAC investor network event"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Our Investor Network</p>
            <h2 className="font-display text-[#1C1C1C] text-4xl font-medium leading-snug mb-5">
              70+ investors. One shared thesis.
            </h2>
            <p className="text-[#444444] text-base leading-relaxed mb-4">
              IFFAC&apos;s investor network spans sovereign funds, development finance institutions,
              family offices, and high-net-worth individuals — all united by the belief that
              Africa&apos;s creative economy is both a significant cultural and commercial opportunity.
            </p>
            <p className="text-[#444444] text-base leading-relaxed">
              Investors benefit from a curated portfolio of vetted creative ventures, transparent
              impact reporting, and the credibility that comes from DFI-grade governance and
              a Luxembourg-domiciled AIF structure.
            </p>
          </div>
        </div>
      </section>

      {/* Data room request */}
      <section id="data-room" className="py-20 md:py-28 bg-[#1C1C1C] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-5">Investor Relations</p>
            <h2 className="font-display text-white text-4xl font-medium leading-snug mb-5">
              Ready to review the full package?
            </h2>
            <p className="text-[#888888] text-base leading-relaxed mb-6">
              Qualified investors can request access to the IFFAC data room, including fund
              documents, audited financials, portfolio metrics, AIFM registration details, and
              the investment committee composition.
            </p>
            <p className="text-[#444444] text-sm">We respond to all qualified inquiries within 2 business days.</p>
          </div>
          <DataRoomForm />
        </div>
      </section>

    </div>
  );
}
