import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Incubation",
    ticket: "€5,000 – €10,000",
    duration: "6 – 9 months",
    description:
      "Structured programs with sub-sector incubation specialists. Capacity building, business support, and mentorship for early-stage creative ventures.",
    href: "/programs/incubation",
    accentColor: "#B5651D",
  },
  {
    number: "02",
    label: "Acceleration",
    ticket: "€50,000 – €250,000",
    duration: "Ongoing",
    description:
      "Grants that drive expansion, sustainability, and globalization. Prepares ventures for seed-stage pitching and international market entry.",
    href: "/programs/acceleration",
    accentColor: "#1F3A8A",
  },
  {
    number: "03",
    label: "Seed Financing",
    ticket: "Up to €2M",
    duration: "Patient capital",
    description:
      "Patient capital up to €2M following an investment-committee pitch and a vetted business plan, with continued technical assistance at every stage.",
    href: "/programs/seed",
    accentColor: "#C9A24A",
  },
];

export function CapitalLadder() {
  return (
    <section className="section-gap bg-[#F4EFE6]" aria-labelledby="ladder-heading">
      <div className="container-content">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <Eyebrow className="mb-4">Programs</Eyebrow>
          <h2 id="ladder-heading" className="heading-2 text-[#0B1B2B] mb-4">
            Three stages. Sixteen sub-sectors.<br />One ladder to scale.
          </h2>
          <p className="body-lg text-[#4A4A4A]">
            A patient-capital ladder built for how creative businesses actually grow, from
            idea to enterprise, from enterprise to global stage.
          </p>
        </div>

        {/* Stage cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#A8A39A]/30">
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              className="relative flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#A8A39A]/30 last:border-0 group hover:bg-[#0B1B2B] transition-colors duration-500"
            >
              {/* Stage number */}
              <span
                className="font-display font-medium text-7xl leading-none mb-6 transition-colors duration-500 group-hover:text-white/10"
                style={{ color: stage.accentColor + "33" }}
                aria-hidden
              >
                {stage.number}
              </span>

              {/* Content */}
              <div className="flex-1">
                <span
                  className="eyebrow mb-3 block transition-colors duration-300"
                  style={{ color: stage.accentColor }}
                >
                  {stage.label}
                </span>
                <p className="heading-3 text-[#0B1B2B] group-hover:text-white mb-1 transition-colors duration-300">
                  {stage.ticket}
                </p>
                <p className="caption text-[#A8A39A] mb-5">{stage.duration}</p>
                <p className="body-md text-[#4A4A4A] group-hover:text-[#A8A39A] transition-colors duration-300">
                  {stage.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={stage.href}
                className="mt-8 inline-flex items-center gap-2 caption text-[#0B1B2B] group-hover:text-[#C9A24A] transition-colors duration-300 group/link"
                aria-label={`Learn about ${stage.label} program`}
              >
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                />
              </Link>

              {/* Bottom gold rule on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: stage.accentColor }}
                aria-hidden
              />
            </div>
          ))}
        </div>

        <p className="mt-6 caption text-[#A8A39A]">
          Creatives may enter at any stage. All programs provide capital + capability + connections.
        </p>
      </div>
    </section>
  );
}
