"use client";

import { useState } from "react";
import Link from "next/link";

const steps = ["About You", "Your Business", "Your Work", "Submit"];

export function ApplicationPortal() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-[#C9A24A]/30 bg-white p-12 text-center">
        <p className="text-5xl mb-5">✓</p>
        <h2 className="font-display text-[#0B1B2B] text-3xl font-medium mb-3">Application received.</h2>
        <p className="text-[#4A4A4A] text-base mb-2">We'll be in touch within 8 weeks of the deadline.</p>
        <p className="text-[#A8A39A] text-sm mb-8">In the meantime, join our info session on 15 June for Q&A.</p>
        <Link href="/" className="inline-flex items-center bg-[#0B1B2B] text-white text-sm font-bold px-7 py-3.5 hover:bg-[#111111] transition-colors">
          Back to home →
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <button
              onClick={() => i < step && setStep(i)}
              className={`flex items-center gap-2.5 shrink-0 ${i < step ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                i < step ? "bg-[#2F5D3A] text-white" : i === step ? "bg-[#C9A24A] text-[#0B1B2B]" : "bg-[#A8A39A]/20 text-[#A8A39A]"
              }`}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wide hidden sm:block ${i === step ? "text-[#0B1B2B]" : "text-[#A8A39A]"}`}>
                {s}
              </span>
            </button>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-3 transition-colors ${i < step ? "bg-[#2F5D3A]" : "bg-[#A8A39A]/30"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0, About You */}
      {step === 0 && (
        <StepCard title="About you" onNext={() => setStep(1)}>
          <Field id="ap-name" label="Full name" type="text" placeholder="Your full name" />
          <Field id="ap-email" label="Email" type="email" placeholder="you@email.com" />
          <Field id="ap-country" label="Country of operation" type="text" placeholder="e.g. Ghana, Nigeria, Kenya…" />
          <div>
            <label htmlFor="ap-discipline" className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">Creative discipline</label>
            <select id="ap-discipline" className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] focus:outline-none focus:border-[#0B1B2B] transition-colors appearance-none">
              <option value="">Select your discipline</option>
              <option>Fashion & textiles</option>
              <option>Film & media</option>
              <option>Music & audio</option>
              <option>Design & visual arts</option>
              <option>Crafts & artisan goods</option>
              <option>Culinary arts</option>
              <option>Other</option>
            </select>
          </div>
        </StepCard>
      )}

      {/* Step 1, Your Business */}
      {step === 1 && (
        <StepCard title="Your business" onNext={() => setStep(2)} onBack={() => setStep(0)}>
          <Field id="ap-bizname" label="Business name" type="text" placeholder="Your brand or company name" />
          <Field id="ap-founded" label="Year founded" type="text" placeholder="e.g. 2022" />
          <div>
            <label htmlFor="ap-stage" className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">Program applying for</label>
            <select id="ap-stage" className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] focus:outline-none focus:border-[#0B1B2B] transition-colors appearance-none">
              <option>Incubation (€5K–€10K)</option>
              <option>Acceleration (€50K–€250K)</option>
              <option>Seed Financing (up to €2M)</option>
            </select>
          </div>
          <div>
            <label htmlFor="ap-pitch" className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">
              What does your business do? <span className="text-[#A8A39A] font-normal normal-case tracking-normal">(max 300 characters)</span>
            </label>
            <textarea id="ap-pitch" rows={4} maxLength={300} placeholder="Describe what you make, who it's for, and why it matters…"
              className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors resize-none" />
          </div>
        </StepCard>
      )}

      {/* Step 2, Your Work */}
      {step === 2 && (
        <StepCard title="Your work" onNext={() => setStep(3)} onBack={() => setStep(1)}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">
              Portfolio or work samples
            </label>
            <div className="border-2 border-dashed border-[#A8A39A]/40 bg-white p-10 text-center">
              <p className="text-[#A8A39A] text-sm mb-2">Drag and drop files, or click to browse</p>
              <p className="text-[#A8A39A] text-xs">PDF, images, or a portfolio URL, max 20MB total</p>
            </div>
          </div>
          <div>
            <label htmlFor="ap-video" className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">
              Pitch video URL <span className="text-[#A8A39A] font-normal normal-case tracking-normal">(max 3 minutes, YouTube, Vimeo, or Drive)</span>
            </label>
            <input id="ap-video" type="url" placeholder="https://…"
              className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors" />
          </div>
          <div>
            <label htmlFor="ap-why" className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">
              Why IFFAC, why now? <span className="text-[#A8A39A] font-normal normal-case tracking-normal">(max 500 characters)</span>
            </label>
            <textarea id="ap-why" rows={5} maxLength={500} placeholder="Tell us what you'd do with the capital and support…"
              className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors resize-none" />
          </div>
        </StepCard>
      )}

      {/* Step 3, Review & Submit */}
      {step === 3 && (
        <div className="border border-[#A8A39A]/30 bg-white p-8 md:p-10">
          <h2 className="font-display text-[#0B1B2B] text-2xl font-medium mb-6">Ready to submit?</h2>
          <p className="text-[#4A4A4A] text-base leading-relaxed mb-8">
            By submitting, you confirm all information is accurate and consent to IFFAC
            processing your data in accordance with our Privacy Policy and GDPR requirements.
          </p>
          <div className="flex items-start gap-3 mb-8">
            <input type="checkbox" id="consent" className="mt-1" />
            <label htmlFor="consent" className="text-[#0B1B2B] text-sm leading-relaxed">
              I confirm I am African-born or of African descent, the information above is accurate,
              and I consent to IFFAC processing my application data.
            </label>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setSubmitted(true)}
              className="inline-flex items-center justify-center bg-[#C9A24A] text-[#0B1B2B] text-sm font-bold px-8 py-4 hover:bg-[#b8913e] transition-colors"
            >
              Submit application →
            </button>
            <button onClick={() => setStep(2)} className="inline-flex items-center justify-center border border-[#A8A39A] text-[#4A4A4A] text-sm px-7 py-4 hover:border-[#0B1B2B] hover:text-[#0B1B2B] transition-colors">
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wide text-[#4A4A4A] mb-2">{label}</label>
      <input id={id} type={type} placeholder={placeholder}
        className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors" />
    </div>
  );
}

function StepCard({ title, children, onNext, onBack }: {
  title: string; children: React.ReactNode; onNext: () => void; onBack?: () => void;
}) {
  return (
    <div className="border border-[#A8A39A]/30 bg-white p-8 md:p-10">
      <h2 className="font-display text-[#0B1B2B] text-2xl font-medium mb-8">{title}</h2>
      <div className="flex flex-col gap-5 mb-10">{children}</div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onNext} className="inline-flex items-center justify-center bg-[#0B1B2B] text-white text-sm font-bold px-7 py-3.5 hover:bg-[#C9A24A] hover:text-[#0B1B2B] transition-colors">
          Save & continue →
        </button>
        {onBack && (
          <button onClick={onBack} className="inline-flex items-center justify-center border border-[#A8A39A] text-[#4A4A4A] text-sm px-7 py-3.5 hover:border-[#0B1B2B] hover:text-[#0B1B2B] transition-colors">
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
