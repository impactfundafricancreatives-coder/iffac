"use client";

import { useState } from "react";

export function CommunityForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center py-16 border border-[#B8902A]/30 bg-[#B8902A]/5 text-center px-8">
        <p className="text-[#B8902A] text-4xl mb-4">◈</p>
        <p className="font-display text-white text-2xl font-medium mb-2">Welcome to the community.</p>
        <p className="text-[#C8C4BC] text-sm">Check your email for next steps and your first IFFAC Journal issue.</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cm-name" className="block text-[#C8C4BC] text-xs font-bold uppercase tracking-wide mb-2">Full name</label>
          <input id="cm-name" type="text" required placeholder="Your name"
            className="w-full bg-white/6 border border-white/15 text-white placeholder-[#8A9BB0]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#B8902A] transition-colors" />
        </div>
        <div>
          <label htmlFor="cm-email" className="block text-[#C8C4BC] text-xs font-bold uppercase tracking-wide mb-2">Email</label>
          <input id="cm-email" type="email" required placeholder="your@email.com"
            className="w-full bg-white/6 border border-white/15 text-white placeholder-[#8A9BB0]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#B8902A] transition-colors" />
        </div>
      </div>

      <div>
        <label htmlFor="cm-country" className="block text-[#C8C4BC] text-xs font-bold uppercase tracking-wide mb-2">Country</label>
        <input id="cm-country" type="text" placeholder="e.g. Nigeria, Ghana, Kenya…"
          className="w-full bg-white/6 border border-white/15 text-white placeholder-[#8A9BB0]/50 px-4 py-3 text-sm focus:outline-none focus:border-[#B8902A] transition-colors" />
      </div>

      <div>
        <label htmlFor="cm-sector" className="block text-[#C8C4BC] text-xs font-bold uppercase tracking-wide mb-2">Creative discipline</label>
        <select id="cm-sector"
          className="w-full bg-white/6 border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B8902A] transition-colors appearance-none">
          <option value="" style={{ background: "#0D1B2A" }}>Select your discipline</option>
          {["Fashion & textiles","Film & media","Music & audio","Design & visual arts","Crafts & artisan goods","Culinary arts","Other"].map((o) => (
            <option key={o} style={{ background: "#0D1B2A" }}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cm-stage" className="block text-[#C8C4BC] text-xs font-bold uppercase tracking-wide mb-2">Stage of business</label>
        <select id="cm-stage"
          className="w-full bg-white/6 border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#B8902A] transition-colors appearance-none">
          <option style={{ background: "#0D1B2A" }}>Idea / pre-launch</option>
          <option style={{ background: "#0D1B2A" }}>Early stage (0–2 years)</option>
          <option style={{ background: "#0D1B2A" }}>Growing (2–5 years)</option>
          <option style={{ background: "#0D1B2A" }}>Established (5+ years)</option>
        </select>
      </div>

      <button type="submit"
        className="bg-[#B8902A] text-[#0D1B2A] text-sm font-bold px-7 py-4 hover:bg-[#D4A843] transition-colors self-start">
        Join the community →
      </button>
      <p className="text-[#C8C4BC]/50 text-xs">Free membership. No spam. Unsubscribe any time.</p>
    </form>
  );
}
