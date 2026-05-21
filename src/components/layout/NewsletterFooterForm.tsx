"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterFooterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-[#EA6B0E]/10 border border-[#EA6B0E]/30">
        <span className="text-[#EA6B0E]">✓</span>
        <p className="caption text-white">You're in. Welcome to the IFFAC Journal.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 flex-1 max-w-md"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 bg-white/10 border border-white/40 text-white placeholder-[#888888] px-4 py-3 text-sm font-ui focus:outline-none focus:border-[#EA6B0E] transition-colors"
      />
      <Button variant="gold" size="md" type="submit">Subscribe</Button>
    </form>
  );
}
