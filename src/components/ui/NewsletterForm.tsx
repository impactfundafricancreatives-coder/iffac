"use client";

import { useState } from "react";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex items-center gap-3 px-5 py-4 border border-[#B8902A]/40 bg-[#B8902A]/10 max-w-md">
        <span className="text-[#B8902A] text-lg">✓</span>
        <p className={`text-sm font-semibold ${dark ? "text-white" : "text-[#0D1B2A]"}`}>
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
        className={`flex-1 px-4 py-3 text-sm placeholder-[#8A9BB0] focus:outline-none transition-colors ${
          dark
            ? "bg-white/8 border border-white/15 text-white focus:border-[#B8902A]"
            : "bg-white border border-[#0D1B2A]/20 text-[#0D1B2A] focus:border-[#0D1B2A]"
        }`}
      />
      <button
        type="submit"
        className="bg-[#B8902A] text-[#0D1B2A] text-sm font-bold px-6 py-3 hover:bg-[#D4A843] transition-colors whitespace-nowrap"
      >
        Subscribe →
      </button>
    </form>
  );
}
