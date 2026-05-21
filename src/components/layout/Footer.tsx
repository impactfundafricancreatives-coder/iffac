import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const cols = [
  {
    heading: "Programs",
    links: [
      { label: "Incubation",       href: "/programs" },
      { label: "Acceleration",     href: "/programs" },
      { label: "Seed Financing",   href: "/programs" },
      { label: "Fashion Sub-Fund", href: "/programs" },
      { label: "Film Sub-Fund",    href: "/programs" },
    ],
  },
  {
    heading: "Organisation",
    links: [
      { label: "About IFFAC", href: "/about" },
      { label: "Leadership",  href: "/about" },
      { label: "Partners",    href: "/partners" },
      { label: "Community",   href: "/community" },
      { label: "Careers",     href: "/about" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Apply",     href: "/apply" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Stories",   href: "/stories" },
      { label: "Investors", href: "/investors" },
      { label: "Contact",   href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <>
      <style>{`
        .footer-logo:hover  { color: #B8902A !important; }
        .footer-link:hover  { color: #B8902A !important; }
        .footer-legal:hover { color: #F5F0E8 !important; }
      `}</style>

      <footer style={{ background: "#0D1B2A", borderTop: "1px solid rgba(184,144,42,0.25)" }}>

        {/* Newsletter */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
          className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
            <div className="lg:flex-1">
              <p style={{ color: "#B8902A" }} className="text-xs font-bold tracking-[0.2em] uppercase mb-4">
                The IFFAC Journal
              </p>
              <p className="font-display font-medium leading-snug"
                style={{ color: "#F5F0E8", fontSize: "clamp(1.5rem,2.5vw,2.2rem)" }}>
                One email a month, stories,<br className="hidden md:block" /> calls, and the work.
              </p>
            </div>
            <div className="lg:flex-1 max-w-md">
              <NewsletterForm dark />
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="footer-logo flex items-center gap-2 mb-4 group transition-opacity hover:opacity-80">
                <Image src="/logo-icon.png" alt="IFFAC" width={36} height={36} className="shrink-0" />
                <div className="flex flex-col">
                  <span className="font-display font-bold leading-none" style={{ color: "#F5F0E8", fontSize: "1.4rem" }}>
                    IFFAC
                  </span>
                  <span className="text-[8px] font-bold tracking-[0.15em] uppercase leading-tight mt-0.5" style={{ color: "#8A9BB0" }}>
                    Impact Fund for African Creatives
                  </span>
                </div>
              </Link>
              <p style={{ color: "#C8C4BC" }} className="text-sm leading-relaxed mb-5 max-w-[200px]">
                Africa&apos;s first patient-capital platform for the creative economy.
              </p>
              <div className="space-y-0.5">
                <p style={{ color: "#8A9BB0" }} className="text-xs">Accra, Ghana</p>
                <p style={{ color: "#8A9BB0" }} className="text-xs">Luxembourg</p>
              </div>
            </div>

            {/* Nav columns */}
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "#F5F0E8" }}>
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="footer-link text-sm transition-colors duration-200"
                        style={{ color: "#C8C4BC" }}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          className="py-5 px-6 md:px-12 lg:px-20">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ color: "#8A9BB0" }} className="text-xs">
              © {new Date().getFullYear()} Impact Fund for African Creatives. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: "Privacy",       href: "/privacy" },
                { label: "Terms",         href: "/terms" },
                { label: "Accessibility", href: "/accessibility" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="footer-legal text-xs transition-colors duration-200"
                  style={{ color: "#8A9BB0" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
