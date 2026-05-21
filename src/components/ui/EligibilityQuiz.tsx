"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "origin",
    q: "Are you African-born or of African descent?",
    opts: ["Yes", "No"],
  },
  {
    id: "discipline",
    q: "Which creative field best describes your work?",
    opts: ["Fashion & textiles", "Film & media", "Music & audio", "Design & visual arts", "Crafts & artisan goods", "Culinary arts", "Other creative field"],
  },
  {
    id: "stage",
    q: "Where is your business right now?",
    opts: ["I have an idea / early concept", "I have a product and early customers", "I have revenue and want to grow fast", "I'm investment-ready and seeking seed capital"],
  },
  {
    id: "need",
    q: "What do you need most right now?",
    opts: ["Mentorship and skills", "A grant to get started", "Capital to scale", "Investment for major growth"],
  },
];

const stageMap: Record<string, string> = {
  "I have an idea / early concept": "Incubation",
  "I have a product and early customers": "Incubation",
  "I have revenue and want to grow fast": "Acceleration",
  "I'm investment-ready and seeking seed capital": "Seed Financing",
};

export function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const q = questions[step];
  const isEligible = answers.origin === "Yes";
  const recommendedStage = stageMap[answers.stage] || "Incubation";

  if (done) {
    if (!isEligible) {
      return (
        <div className="border border-[#888888]/30 bg-white p-10 text-center">
          <p className="text-3xl mb-4">🌍</p>
          <h2 className="font-display text-[#1C1C1C] text-2xl font-medium mb-3">IFFAC funds African creatives.</h2>
          <p className="text-[#444444] text-base mb-6">Our programs are specifically designed for African-born and diaspora founders. If you're a partner or supporter, we'd love to connect.</p>
          <Link href="/contact" className="inline-flex items-center bg-[#1C1C1C] text-white text-sm font-bold px-6 py-3 hover:bg-[#252525] transition-colors">Get in touch →</Link>
        </div>
      );
    }

    return (
      <div className="border border-[#EA6B0E]/30 bg-white p-10">
        <p className="text-[#EA6B0E] text-xs font-bold tracking-[0.2em] uppercase mb-4">Your result</p>
        <h2 className="font-display text-[#1C1C1C] text-3xl font-medium mb-3">
          You look like a great fit for <span className="text-[#EA6B0E]">{recommendedStage}</span>.
        </h2>
        <p className="text-[#444444] text-base leading-relaxed mb-8">
          Based on your answers, the <strong>{recommendedStage}</strong> program is the right entry point.
          {recommendedStage === "Incubation" && " You'll receive €5K–€10K plus 6–9 months of structured mentorship."}
          {recommendedStage === "Acceleration" && " You'll receive €50K–€250K to expand into global markets."}
          {recommendedStage === "Seed Financing" && " You'll pitch for up to €2M in patient capital."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/apply/portal" className="inline-flex items-center justify-center bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-7 py-3.5 hover:bg-[#D45C00] transition-colors">
            Start your application →
          </Link>
          <button onClick={() => { setStep(0); setAnswers({}); setDone(false); }}
            className="inline-flex items-center justify-center border border-[#888888] text-[#444444] text-sm px-7 py-3.5 hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors">
            Retake quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {questions.map((_, i) => (
          <div key={i} className={`h-1 flex-1 transition-colors duration-300 ${i <= step ? "bg-[#EA6B0E]" : "bg-[#888888]/30"}`} />
        ))}
      </div>
      <p className="text-[#888888] text-xs font-bold uppercase tracking-wide mb-4">Question {step + 1} of {questions.length}</p>

      <div className="border border-[#888888]/30 bg-white p-8 md:p-10">
        <h2 className="font-display text-[#1C1C1C] text-2xl md:text-3xl font-medium mb-8">{q.q}</h2>
        <div className="flex flex-col gap-3">
          {q.opts.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                const updated = { ...answers, [q.id]: opt };
                setAnswers(updated);
                if (step < questions.length - 1) setStep(step + 1);
                else setDone(true);
              }}
              className="w-full text-left px-5 py-4 border border-[#888888]/30 text-[#1C1C1C] text-base hover:border-[#EA6B0E] hover:bg-[#EA6B0E]/5 transition-colors"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
