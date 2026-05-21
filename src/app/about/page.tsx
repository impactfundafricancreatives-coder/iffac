import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "IFFAC: built by an African, for Africa's creatives, and engineered for the world.",
};

const team = [
  {
    name: "Roberta Annan",
    title: "Founder & Managing Partner",
    tag: "Visionary & Investor",
    photo: "/team-roberta.jpg",
    bio: "Globally-renowned investment expert, businesswoman and philanthropist. UNEP Goodwill Ambassador for the Creative Economy and founder of The African Fashion Foundation. Board member of multiple institutions including The Frallain Group and Industrie Africa. Advisory board member of Condé Nast College of Fashion & Design. Holds a Master's in Biotechnology from Georgetown University and completed leadership training at Harvard Business School.",
  },
  {
    name: "Derrick de Necker",
    title: "Investment Committee",
    tag: "Strategy & Corporate Finance",
    photo: "/team-derrick.png",
    bio: "Former CEO with over 25 years of expertise in global investments, structuring, strategy, and commercialization. Joint-Managing Partner at NinetyEast Capital Partners and a major listed Private Equity Investment Vehicle on the Mauritius Stock Exchange. COO of Fleming Financial Trust Ltd and board member of Fleming Group entities listed on the Frankfurt Stock Exchange.",
  },
  {
    name: "Mayowa Ayodele",
    title: "Investment Committee",
    tag: "VC & Industry Maven",
    photo: "/team-mayowa.png",
    bio: "Finance and investment specialist with focus on financial advisory, private equity and venture capital across manufacturing, retail, logistics, fintech, and agribusiness. Worked with the International Finance Corporation and Deloitte. Former Director at Standard Chartered Private Equity Africa managing a $200M portfolio. Co-founder of Arkana Partners. Fellow of the Institute of Chartered Accountants of Nigeria.",
  },
  {
    name: "Elisabeth Morzadec",
    title: "Head of Programs",
    tag: "Programs & Ecosystem",
    photo: "/team-elisabeth.png",
    bio: "Leads the African Fashion Futures Incubator and ecosystem-enabling events. Holds a Master's degree in African Development from the School of Oriental and African Studies in London. Of French and Ghanaian heritage with extensive West Africa cultural and creative industries experience.",
  },
];

const milestones = [
  { year: "2011", event: "African Fashion Foundation (AFF) founded by Roberta Annan" },
  { year: "2018", event: "IFFAC announced at the Paris Peace Forum" },
  { year: "2021", event: "Fund formally launched during Paris Fashion Week" },
  { year: "2023", event: "Fashion Sub-Fund and Film Sub-Fund activated" },
  { year: "2024", event: "Target raise restructured upward to US$150M" },
  { year: "2026", event: "Cohort 2026 open call launched — applications now live" },
];

const objectives = [
  "Identify top talent in African creative industries and improve their success rates",
  "Provide dedicated support for women entrepreneurs across the continent",
  "Directly contribute to UN Sustainable Development Goals 8, 9, 10, and 17",
  "Create high-quality jobs for Africa's youth through the creative sector",
  "Improve global positioning and integration of African creative industries",
  "Highlight and export Africa's rich and diverse culture and artistry",
  "Provide investors with risk-adjusted commercial returns",
];

export default function AboutPage() {
  return (
    <div style={{ background: "#FAFAFA" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "#1C1C1C", minHeight: "60vh" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/creative-kayayei.jpg"
            alt="African creative at work"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(28,28,28,0.95) 0%, rgba(28,28,28,0.80) 50%, rgba(28,28,28,0.4) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-6">About IFFAC</p>
          <h1 className="font-display font-medium leading-[1.05] tracking-tight max-w-3xl mb-8 text-white"
            style={{ fontSize: "clamp(3rem,6vw,7rem)" }}>
            Built by an African, for Africa&apos;s creatives.
          </h1>
          <p className="text-[#AAAAAA] max-w-2xl" style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
            IFFAC is a US$150M patient-capital platform that backs visionary African entrepreneurs
            in fashion, film, music, design, craft, and more.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Mission</p>
            <p className="font-display text-[#1C1C1C] font-medium leading-snug mb-8"
              style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
              To structure, facilitate, and enable Africa&apos;s creative sector to access capital, resources, and international markets with profitability and integrity.
            </p>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Vision</p>
            <p className="text-[#1C1C1C]/70 text-lg leading-relaxed">
              To empower the creative sector of Africa by enabling and facilitating its creatives
              to resonate at a global level — building sustainable enterprises that compete and win
              on the world&apos;s most important stages.
            </p>
          </div>
          <div>
            <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-6">Our Objectives</p>
            <ul className="space-y-3">
              {objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#EA6B0E]" />
                  <p className="text-[#1C1C1C]/70 text-base leading-relaxed">{obj}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-12">Our Story</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1C1C]/10">
            {milestones.map((m) => (
              <div key={m.year} style={{ background: "#FAFAFA" }} className="p-8">
                <p className="font-display text-[#EA6B0E] font-medium mb-4" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)" }}>
                  {m.year}
                </p>
                <p className="text-[#1C1C1C] text-base leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#1C1C1C]/10">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-5">Leadership</p>
          <h2 className="font-display text-[#1C1C1C] font-medium mb-14"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            The people deploying the capital.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1C1C1C]/10">
            {team.map((t) => (
              <div key={t.name} style={{ background: "#FAFAFA" }} className="group flex flex-col">
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1C1C1C]/10">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Info */}
                <div className="p-6 flex flex-col gap-1 flex-1">
                  <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.12em] uppercase">{t.tag}</p>
                  <p className="font-display text-[#1C1C1C] text-xl font-medium">{t.name}</p>
                  <p className="text-[#AAAAAA] text-xs mb-3">{t.title}</p>
                  <p className="text-[#1C1C1C]/60 text-sm leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ background: "#1C1C1C" }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — venue image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/event-venue.jpg"
              alt="IFFAC fashion exhibition"
              fill
              className="object-cover"
            />
          </div>
          {/* Right — governance details */}
          <div>
            <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-5">Governance</p>
            <h2 className="font-display text-white font-medium leading-snug mb-6"
              style={{ fontSize: "clamp(1.8rem,3vw,3rem)" }}>
              Built to institutional standard.
            </h2>
            <p className="text-[#AAAAAA] text-base leading-relaxed mb-8">
              IFFAC is domiciled in Luxembourg as an Alternative Investment Fund (AIF),
              with Annan Capital Partners serving as investment advisor. Our ESG framework
              aligns with UN SDGs 8, 9, 10, and 17, meeting EU regulatory requirements.
            </p>
            <div className="space-y-0">
              {[
                { label: "Fund domicile", value: "Luxembourg" },
                { label: "Fund type", value: "Alternative Investment Fund (AIF)" },
                { label: "Investment advisor", value: "Annan Capital Partners" },
                { label: "Target raise", value: "US$150M" },
                { label: "SDG alignment", value: "Goals 8, 9, 10, 17" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-4 border-b border-white/8">
                  <span className="text-[#AAAAAA] text-sm">{row.label}</span>
                  <span className="text-white text-sm font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 px-6 md:px-12 lg:px-20" style={{ background: "#FAFAFA" }}>
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row gap-4">
          <Link href="/apply"
            className="inline-flex items-center justify-center bg-[#1C1C1C] text-white text-sm font-bold px-8 py-4 hover:bg-[#252525] transition-colors">
            Apply for funding →
          </Link>
          <Link href="/partners"
            className="inline-flex items-center justify-center border border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold px-8 py-4 hover:bg-[#1C1C1C] hover:text-white transition-colors">
            Our partners
          </Link>
          <Link href="/investors"
            className="inline-flex items-center justify-center border border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold px-8 py-4 hover:bg-[#1C1C1C] hover:text-white transition-colors">
            Investor overview
          </Link>
        </div>
      </section>

    </div>
  );
}
