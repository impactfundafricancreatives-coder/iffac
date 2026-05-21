"use client";

import { useState } from "react";

export function DataRoomForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 border border-[#EA6B0E]/30 bg-[#EA6B0E]/5 text-center px-8">
        <p className="text-[#EA6B0E] text-3xl mb-4">✓</p>
        <p className="font-display text-white text-2xl font-medium mb-2">Request received.</p>
        <p className="text-[#888888] text-sm">We'll be in touch within 2 business days.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
    >
      {[
        { id: "dr-name", label: "Full name", type: "text", placeholder: "Your name" },
        { id: "dr-org", label: "Organisation", type: "text", placeholder: "Fund / family office name" },
        { id: "dr-email", label: "Work email", type: "email", placeholder: "you@organisation.com" },
        { id: "dr-aum", label: "Allocation size (optional)", type: "text", placeholder: "e.g. US$5M–15M" },
      ].map((f) => (
        <div key={f.id}>
          <label htmlFor={f.id} className="block text-[#888888] text-xs font-bold uppercase tracking-wide mb-2">
            {f.label}
          </label>
          <input
            id={f.id}
            type={f.type}
            placeholder={f.placeholder}
            className="w-full bg-white/5 border border-white/15 text-white placeholder-[#444444] px-4 py-3 text-sm focus:outline-none focus:border-[#EA6B0E] transition-colors"
          />
        </div>
      ))}

      <button
        type="submit"
        className="mt-2 bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-6 py-3.5 hover:bg-[#D45C00] transition-colors text-left"
      >
        Submit request →
      </button>
    </form>
  );
}
