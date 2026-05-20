"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",     href: "/about" },
  { label: "Programs",  href: "/programs" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Partners",  href: "/partners" },
  { label: "Investors", href: "/investors" },
  { label: "Stories",   href: "/stories" },
  { label: "Community", href: "/community" },
];

export function Navigation() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-6 focus:z-[200] focus:bg-[#B8902A] focus:text-[#0D1B2A] focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || open
            ? "rgba(13,27,42,0.95)"
            : "rgba(13,27,42,0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(184,144,42,0.2)"
            : "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between"
          style={{ height: scrolled ? 64 : 80, transition: "height 0.4s ease" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="IFFAC home">
            <span
              className="font-display font-semibold tracking-tight text-white group-hover:text-[#B8902A] transition-colors duration-300"
              style={{ fontSize: scrolled ? "1.4rem" : "1.7rem", transition: "font-size 0.4s ease" }}
            >
              IFFAC
            </span>
            <div className="hidden sm:flex flex-col border-l border-white/25 pl-3 gap-0.5">
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/60 leading-tight">
                Impact Fund
              </span>
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/60 leading-tight">
                for African Creatives
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative text-[11px] font-bold tracking-[0.1em] uppercase transition-colors duration-200 pb-0.5 whitespace-nowrap"
                  style={{
                    color: active ? "#B8902A" : "#F5F0E8",
                    opacity: active ? 1 : 0.85,
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#B8902A"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#F5F0E8"; }}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#B8902A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA — Apply only */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/apply"
              className="text-xs font-bold px-5 py-2.5 bg-[#B8902A] text-[#0D1B2A] hover:bg-[#D4A843] transition-colors duration-200 whitespace-nowrap"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-white hover:text-[#B8902A] transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ background: "#0D1B2A" }}>
          {/* Close tap area behind panel */}
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          <div
            className="absolute top-0 right-0 h-full w-[80vw] max-w-sm flex flex-col pt-24 px-8 pb-10"
            style={{ background: "#0D1B2A", borderLeft: "1px solid rgba(184,144,42,0.2)" }}
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-b border-white/8 py-5 font-display text-3xl font-medium text-white hover:text-[#B8902A] transition-colors"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/apply"
              className="mt-auto inline-flex items-center justify-center bg-[#B8902A] text-[#0D1B2A] text-sm font-bold px-6 py-4 hover:bg-[#D4A843] transition-colors"
            >
              Apply for Funding →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
