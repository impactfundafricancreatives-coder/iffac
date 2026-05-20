"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is eligible to apply?",
    a: "Creative entrepreneurs operating in any of Africa's 16 cultural and creative sub-sectors, including fashion, film, music, visual arts, design, crafts, and culinary arts. You must be African-born or a diaspora founder. There is no minimum revenue requirement for Incubation.",
  },
  {
    q: "Is this a grant or a loan?",
    a: "Incubation support (€5K–€10K) and Acceleration grants (€50K–€250K) are non-repayable. Seed Financing (up to €2M) is patient capital, typically structured as equity or convertible debt, depending on your business model and preference.",
  },
  {
    q: "Can I apply in French or Portuguese?",
    a: "We accept applications in English, French, and Portuguese. Our multilingual portal is in development, for now, please apply in English and note your preferred language in your cover statement.",
  },
  {
    q: "Do I need an existing business to apply?",
    a: "For Incubation, a structured idea with initial proof-of-concept is sufficient. For Acceleration and Seed, you must have an operating business with verifiable revenue and at least one year of trading history.",
  },
  {
    q: "Can I apply to multiple programs at once?",
    a: "You may only hold one active application at a time. If you're unsure which stage suits you, the eligibility quiz will recommend the best fit, and a program officer is available at office hours to advise.",
  },
  {
    q: "What happens to my application data?",
    a: "Your data is encrypted at rest and handled in accordance with GDPR (our fund is domiciled in Luxembourg, EU rules apply). We do not share your application with third parties without your consent. You can request deletion at any time.",
  },
];

export function ApplyFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#A8A39A]/30 bg-white">
          <button
            className="w-full flex items-start justify-between gap-4 p-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[#0B1B2B] font-semibold text-base leading-snug">{faq.q}</span>
            <span className="shrink-0 mt-0.5 text-[#A8A39A] text-xl leading-none">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-6">
              <p className="text-[#4A4A4A] text-sm leading-relaxed border-t border-[#A8A39A]/20 pt-4">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
