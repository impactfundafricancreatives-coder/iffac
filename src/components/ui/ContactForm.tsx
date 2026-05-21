"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 border border-[#EA6B0E]/30 bg-[#EA6B0E]/5 text-center px-8">
        <p className="text-[#EA6B0E] text-3xl mb-4">✓</p>
        <p className="font-display text-[#1C1C1C] text-2xl font-medium mb-2">Message sent.</p>
        <p className="text-[#444444] text-sm">We'll respond within 3 business days.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold tracking-wide uppercase text-[#444444] mb-2">Name</label>
          <input id="cf-name" type="text" required placeholder="Your name"
            className="w-full border border-[#888888] bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#888888] focus:outline-none focus:border-[#1C1C1C] transition-colors" />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-bold tracking-wide uppercase text-[#444444] mb-2">Email</label>
          <input id="cf-email" type="email" required placeholder="your@email.com"
            className="w-full border border-[#888888] bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#888888] focus:outline-none focus:border-[#1C1C1C] transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-type" className="block text-xs font-bold tracking-wide uppercase text-[#444444] mb-2">I am a…</label>
        <select id="cf-type"
          className="w-full border border-[#888888] bg-white px-4 py-3 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors appearance-none">
          <option value="">Select one</option>
          <option>Creative entrepreneur</option>
          <option>Investor / family office</option>
          <option>Strategic partner</option>
          <option>Journalist / researcher</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-xs font-bold tracking-wide uppercase text-[#444444] mb-2">Subject</label>
        <input id="cf-subject" type="text" required placeholder="What's this about?"
          className="w-full border border-[#888888] bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#888888] focus:outline-none focus:border-[#1C1C1C] transition-colors" />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-bold tracking-wide uppercase text-[#444444] mb-2">Message</label>
        <textarea id="cf-message" required rows={5} placeholder="Tell us what you're working on…"
          className="w-full border border-[#888888] bg-white px-4 py-3 text-sm text-[#1C1C1C] placeholder-[#888888] focus:outline-none focus:border-[#1C1C1C] transition-colors resize-none" />
      </div>

      <button type="submit"
        className="self-start bg-[#1C1C1C] text-white text-sm font-bold px-8 py-4 hover:bg-[#EA6B0E] hover:text-[#1C1C1C] transition-colors">
        Send message →
      </button>
    </form>
  );
}
