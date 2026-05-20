import type { Metadata } from "next";
import Link from "next/link";
import { ApplyFAQ } from "@/components/ui/ApplyFAQ";

export const metadata: Metadata = {
  title: "Apply for Funding",
  description: "Apply to IFFAC Cohort 2026. Up to €2M in patient capital. We read every application.",
};

const steps = [
  { n: "01", title: "Check eligibility", body: "Answer 6 quick questions to confirm which stage fits you, and get a plain-English summary of what we're looking for before you invest time in the full application." },
  { n: "02", title: "Download the handbook", body: "The Application Handbook covers character limits, sample answers, the pitch-video brief, and exactly what the investment committee reads. Download it before you begin." },
  { n: "03", title: "Complete your application", body: "Our portal lets you save progress and return any time before the deadline. Share your story, financials, three work samples, and a short pitch video (max 3 minutes)." },
  { n: "04", title: "Decision within 8 weeks", body: "Every application is read by a program officer. Shortlisted applicants pitch the Investment Committee in person or by video. All applicants receive a response." },
];

const eligibility = [
  "African-born or African diaspora founder",
  "Operating in any of 16 creative sub-sectors",
  "Fashion, film, music, design, craft, culinary arts, and more",
  "Pan-African, all 54 countries and diaspora welcome",
  "Any stage from early idea through established enterprise",
];

export default function ApplyPage() {
  return (
    <div className="bg-[#F4EFE6]">

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B1B2B] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Deadline banner */}
          <div className="inline-flex items-center gap-3 bg-[#1F3A8A] px-5 py-2.5 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#C9A24A] animate-pulse shrink-0" />
            <span className="text-white text-sm font-semibold">
              Cohort 2026 open, deadline <strong className="text-[#C9A24A]">30 June 2026</strong>
            </span>
          </div>

          <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-3xl mb-8">
            Apply. We read every application.
          </h1>

          <p className="text-[#A8A39A] text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Up to <strong className="text-white">€2M in patient capital</strong> for Africa's most ambitious
            creative entrepreneurs, in fashion, film, music, design, crafts, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/apply/portal" className="inline-flex items-center justify-center bg-[#C9A24A] text-[#0B1B2B] text-sm font-bold px-8 py-4 hover:bg-[#b8913e] transition-colors">
              Start your application →
            </Link>
            <a href="/resources/application-handbook.pdf" className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/5 transition-colors">
              Download handbook (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-[#A8A39A]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#B5651D] text-xs font-bold tracking-[0.2em] uppercase mb-5">Eligibility</p>
            <h2 className="font-display text-[#0B1B2B] text-4xl md:text-5xl font-medium leading-snug mb-6">
              Is IFFAC right for you?
            </h2>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
              We back creative entrepreneurs at every stage, from first idea to second fund raise.
              Not sure which program fits? Answer the 3-minute quiz.
            </p>
            <Link href="/apply/eligibility" className="inline-flex items-center bg-[#0B1B2B] text-white text-sm font-bold px-7 py-3.5 hover:bg-[#111111] transition-colors">
              Take the eligibility quiz →
            </Link>
          </div>

          <div className="space-y-3">
            {eligibility.map((item) => (
              <div key={item} className="flex items-start gap-4 p-5 bg-white border border-[#A8A39A]/20">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#2F5D3A] flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="text-[#0B1B2B] text-base">{item}</p>
              </div>
            ))}
            <p className="text-[#A8A39A] text-sm pt-2">
              Unsure? <Link href="/contact" className="text-[#1F3A8A] font-semibold hover:underline">Talk to a program officer →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#0B1B2B]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-5">How to Apply</p>
          <h2 className="font-display text-white text-4xl md:text-5xl font-medium leading-snug mb-16">
            Four steps to a funded future.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#0B1B2B] p-10 hover:bg-[#0f2338] transition-colors">
                <p className="font-display text-white/10 text-6xl font-medium mb-6 leading-none">{s.n}</p>
                <h3 className="text-white text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-[#A8A39A] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/apply/portal" className="inline-flex items-center justify-center bg-[#C9A24A] text-[#0B1B2B] text-sm font-bold px-8 py-4 hover:bg-[#b8913e] transition-colors">
              Start your application →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white/40 text-white text-sm font-semibold px-8 py-4 hover:bg-white/5 transition-colors">
              Book office hours
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#B5651D] text-xs font-bold tracking-[0.2em] uppercase mb-5">FAQ</p>
          <h2 className="font-display text-[#0B1B2B] text-4xl font-medium mb-12">
            Questions we get asked most.
          </h2>
          <ApplyFAQ />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-[#C9A24A] px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-[#0B1B2B] text-4xl font-medium mb-2">Ready to apply?</h2>
            <p className="text-[#0B1B2B]/70 text-base">
              Save progress any time. Return before the deadline. We read everything.
            </p>
          </div>
          <Link href="/apply/portal" className="shrink-0 inline-flex items-center justify-center bg-[#0B1B2B] text-white text-sm font-bold px-10 py-4 hover:bg-[#111111] transition-colors">
            Start your application →
          </Link>
        </div>
      </section>

    </div>
  );
}
