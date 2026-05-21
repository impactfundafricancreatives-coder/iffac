"use client";

import { useState } from "react";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex items-center gap-3 px-5 py-4 border border-[#EA6B0E]/40 bg-[#EA6B0E]/10 max-w-md">
        <span className="text-[#EA6B0E] text-lg">✓</span>
        <p className={`text-sm font-semibold ${dark ? "text-white" : "text-[#1C1C1C]"}`}>
          You&apos;re in. Welcome to the IFFAC Journal.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md"
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        className={`flex-1 px-4 py-3 text-sm placeholder-[#888888] focus:outline-none transition-colors ${
          dark
            ? "bg-white/8 border border-white/15 text-white focus:border-[#EA6B0E]"
            : "bg-white border border-[#1C1C1C]/20 text-[#1C1C1C] focus:border-[#1C1C1C]"
        }`}
      />
      <button
        type="submit"
        className="bg-[#EA6B0E] text-[#1C1C1C] text-sm font-bold px-6 py-3 hover:bg-[#FF7A1A] transition-colors whitespace-nowrap"
      >
        Subscribe →
      </button>
    </form>
  );
}
