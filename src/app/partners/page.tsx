import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Partners",
  description: "The institutional partners, advisors, and co-investors backing IFFAC's mission across finance, law, and the creative economy.",
};

const partners = [
  {
    name: "Annan Capital Partners",
    shortName: "ACP",
    category: "Investment Advisor",
    description:
      "A reputable corporate finance firm providing financial expertise and advisory services to creative enterprises. ACP serves as IFFAC's investment advisor and sponsor, responsible for deal sourcing, due diligence, and portfolio management across the creative-economy value chain.",
    location: "Global",
    website: "#",
  },
  {
    name: "Innocent Advisory",
    shortName: "IA",
    category: "Impact Investment Advisory",
    description:
      "An impact investment advisory firm helping clients become more intentional about impact and embed it into their processes. Innocent Advisory supports IFFAC's impact measurement framework and ESG reporting standards.",
    location: "London, UK",
    website: "#",
  },
  {
    name: "Agoo Africa",
    shortName: "AA",
    category: "Digital Platform",
    description:
      "A digital platform dedicated to the African creative sector, fostering financial innovation and inclusion. Agoo Africa bridges IFFAC's portfolio companies with digital financial services and market access tools.",
    location: "Accra, Ghana",
    website: "#",
  },
  {
    name: "Seedstars",
    shortName: "SS",
    category: "Investment & Education",
    description:
      "An international investment and education company headquartered in Geneva, Switzerland, operating across 90+ countries. Seedstars co-delivers the African Fashion Futures Incubator (AFFI) with IFFAC, providing global accelerator expertise and entrepreneur networks.",
    location: "Geneva, Switzerland",
    website: "#",
  },
  {
    name: "IQEQ",
    shortName: "IQ",
    category: "Fund Administration",
    description:
      "A leading fund and corporate services group that helps global investors focus on investing and preserving capital in a sustainable and compliant manner. IQEQ supports IFFAC's fund administration, reporting, and regulatory compliance obligations.",
    location: "Luxembourg",
    website: "#",
  },
  {
    name: "Orange Clover",
    shortName: "OC",
    category: "Legal Services",
    description:
      "A Dutch law firm specialising in national and international high-profile transactions and advisory work. Orange Clover advises IFFAC on fund structuring, cross-border investment agreements, and portfolio company legal frameworks.",
    location: "Amsterdam, Netherlands",
    website: "#",
  },
  {
    name: "TAXAND",
    shortName: "TX",
    category: "Tax & Accounting",
    description:
      "The world's largest independent tax organisation with more than 550 tax partners and over 2,500 tax advisors in 50 countries. TAXAND ensures IFFAC's fund structures and portfolio investments are optimised for tax efficiency across jurisdictions.",
    location: "Global · 50 countries",
    website: "#",
  },
];

const categories = ["Investment Advisor", "Impact Investment Advisory", "Digital Platform", "Investment & Education", "Fund Administration", "Legal Services", "Tax & Accounting"];

const ecosystem = [
  { name: "African Fashion Foundation", role: "Co-delivery partner, AFFI and Fashion Sub-Fund" },
  { name: "TalentX Entertainment", role: "Film Sub-Fund co-investor" },
  { name: "Digital Fashion Academy", role: "Technical skills delivery, AFFI cohorts" },
  { name: "African Development Bank", role: "Strategic multilateral partner" },
  { name: "UNEP", role: "Creative Economy Programme alignment" },
  { name: "ITC Ethical Fashion Initiative", role: "Supply chain and sustainability partner" },
];

export default function PartnersPage() {
  return (
    <div style={{ background: "#F5F0E8" }}>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 lg:px-20" style={{ background: "#0D1B2A" }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-6">Partners</p>
          <h1 className="font-display text-white font-medium leading-[1.05] tracking-tight max-w-3xl mb-8"
            style={{ fontSize: "clamp(3rem,6vw,6rem)" }}>
            We don&apos;t build alone.
          </h1>
          <p className="text-[#C8C4BC] max-w-2xl" style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
            IFFAC operates through an institutional network of finance, legal, and ecosystem partners
            who share our commitment to building sustainable creative enterprises across Africa.
          </p>
        </div>
      </section>

      {/* Core partners grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#0D1B2A]/10">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-12">Institutional Partners</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#0D1B2A]/10">
            {partners.map((p) => (
              <div key={p.name} style={{ background: "#F5F0E8" }}
                className="p-8 flex flex-col gap-4 hover:bg-[#EDE7DA] transition-colors group">
                {/* Monogram */}
                <div className="w-14 h-14 bg-[#0D1B2A] group-hover:bg-[#B8902A] flex items-center justify-center transition-colors duration-300">
                  <span className="font-display text-white group-hover:text-[#0D1B2A] text-lg font-semibold transition-colors duration-300">
                    {p.shortName}
                  </span>
                </div>

                <div>
                  <p className="text-[#B8902A] text-xs font-bold tracking-[0.12em] uppercase mb-1">{p.category}</p>
                  <p className="font-display text-[#0D1B2A] text-xl font-medium">{p.name}</p>
                  <p className="text-[#C8C4BC] text-xs mt-1">{p.location}</p>
                </div>

                <p className="text-[#0D1B2A]/60 text-sm leading-relaxed flex-1">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem partners */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 border-b border-[#0D1B2A]/10" style={{ background: "#EDE7DA" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#C4581A] text-xs font-bold tracking-[0.2em] uppercase mb-5">Ecosystem Partners</p>
              <h2 className="font-display text-[#0D1B2A] font-medium leading-snug mb-5"
                style={{ fontSize: "clamp(1.8rem,3vw,3rem)" }}>
                The broader ecosystem we build with.
              </h2>
              <p className="text-[#0D1B2A]/60 text-base leading-relaxed">
                Beyond our institutional partners, IFFAC collaborates with a network of
                multilateral organisations, creative foundations, and programme co-deliverers
                who extend the fund's reach across the continent.
              </p>
            </div>
            <div className="flex flex-col gap-px bg-[#0D1B2A]/10">
              {ecosystem.map((e) => (
                <div key={e.name} style={{ background: "#EDE7DA" }}
                  className="flex items-start justify-between gap-6 p-6 hover:bg-[#F5F0E8] transition-colors">
                  <p className="font-display text-[#0D1B2A] text-lg font-medium">{e.name}</p>
                  <p className="text-[#C8C4BC] text-sm text-right shrink-0 max-w-[200px] leading-snug">{e.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20" style={{ background: "#0D1B2A" }}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B8902A] text-xs font-bold tracking-[0.2em] uppercase mb-5">Partner with IFFAC</p>
            <h2 className="font-display text-white font-medium leading-snug mb-5"
              style={{ fontSize: "clamp(1.8rem,3vw,3rem)" }}>
              Build the infrastructure Africa&apos;s creative economy deserves.
            </h2>
            <p className="text-[#C8C4BC] text-base leading-relaxed">
              We are always open to strategic partnerships across finance, technology, education,
              legal services, and creative industries. If your organisation shares our commitment
              to African creative enterprise, reach out.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-[#B8902A] text-[#0D1B2A] text-sm font-bold px-8 py-4 hover:bg-[#D4A843] transition-colors">
              Get in touch →
            </Link>
            <Link href="/about"
              className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/5 transition-colors">
              About IFFAC
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
