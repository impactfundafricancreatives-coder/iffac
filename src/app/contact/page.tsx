import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with IFFAC, for creatives, investors, partners, and press.",
};

const routes = [
  {
    tag: "For Creatives",
    email: "programs@iffa-c.com",
    desc: "Questions about applying, eligibility, or current open calls.",
  },
  {
    tag: "For Investors",
    email: "investors@iffa-c.com",
    desc: "Fund structure, data room access, and co-investment inquiries.",
  },
  {
    tag: "For Partners",
    email: "partnerships@iffa-c.com",
    desc: "Strategic partnerships, program co-delivery, and sponsorship.",
  },
  {
    tag: "For Press",
    email: "media@iffa-c.com",
    desc: "Media inquiries, photography, interviews, and press kit requests.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#F4EFE6]">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#0B1B2B] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-6">Contact</p>
          <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-2xl">
            Tell us what you&apos;re building.
          </h1>
        </div>
      </section>

      {/* Route cards */}
      <section className="py-16 px-6 md:px-16 lg:px-24 border-b border-[#A8A39A]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#A8A39A]/20">
          {routes.map((r) => (
            <div key={r.tag} className="bg-[#F4EFE6] p-8">
              <p className="text-[#C9A24A] text-xs font-bold tracking-[0.15em] uppercase mb-4">{r.tag}</p>
              <p className="text-[#4A4A4A] text-sm leading-relaxed mb-5">{r.desc}</p>
              <a
                href={`mailto:${r.email}`}
                className="text-[#0B1B2B] text-sm font-bold hover:text-[#1F3A8A] transition-colors underline underline-offset-2"
              >
                {r.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* General form */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#B5651D] text-xs font-bold tracking-[0.2em] uppercase mb-5">General Enquiry</p>
            <h2 className="font-display text-[#0B1B2B] text-4xl font-medium leading-snug mb-5">
              Send us a message.
            </h2>
            <p className="text-[#4A4A4A] text-base leading-relaxed mb-8">
              We read every message and respond within 3 business days.
              For urgent press or investor inquiries, email directly above.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[#A8A39A] text-xs font-bold uppercase tracking-wide mb-1">Accra, Ghana</p>
                <p className="text-[#0B1B2B] text-sm">West Africa headquarters</p>
              </div>
              <div>
                <p className="text-[#A8A39A] text-xs font-bold uppercase tracking-wide mb-1">Luxembourg</p>
                <p className="text-[#0B1B2B] text-sm">Fund domicile & European office</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
