"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 border border-[#C9A24A]/30 bg-[#C9A24A]/5 text-center px-8">
        <p className="text-[#C9A24A] text-3xl mb-4">✓</p>
        <p className="font-display text-[#0B1B2B] text-2xl font-medium mb-2">Message sent.</p>
        <p className="text-[#4A4A4A] text-sm">We'll respond within 3 business days.</p>
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
          <label htmlFor="cf-name" className="block text-xs font-bold tracking-wide uppercase text-[#4A4A4A] mb-2">Name</label>
          <input id="cf-name" type="text" required placeholder="Your name"
            className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors" />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-bold tracking-wide uppercase text-[#4A4A4A] mb-2">Email</label>
          <input id="cf-email" type="email" required placeholder="your@email.com"
            className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="cf-type" className="block text-xs font-bold tracking-wide uppercase text-[#4A4A4A] mb-2">I am a…</label>
        <select id="cf-type"
          className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] focus:outline-none focus:border-[#0B1B2B] transition-colors appearance-none">
          <option value="">Select one</option>
          <option>Creative entrepreneur</option>
          <option>Investor / family office</option>
          <option>Strategic partner</option>
          <option>Journalist / researcher</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-xs font-bold tracking-wide uppercase text-[#4A4A4A] mb-2">Subject</label>
        <input id="cf-subject" type="text" required placeholder="What's this about?"
          className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors" />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-bold tracking-wide uppercase text-[#4A4A4A] mb-2">Message</label>
        <textarea id="cf-message" required rows={5} placeholder="Tell us what you're working on…"
          className="w-full border border-[#A8A39A] bg-white px-4 py-3 text-sm text-[#0B1B2B] placeholder-[#A8A39A] focus:outline-none focus:border-[#0B1B2B] transition-colors resize-none" />
      </div>

      <button type="submit"
        className="self-start bg-[#0B1B2B] text-white text-sm font-bold px-8 py-4 hover:bg-[#C9A24A] hover:text-[#0B1B2B] transition-colors">
        Send message →
      </button>
    </form>
  );
}
