import Link from "next/link";
export default function PrivacyPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-40 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[#888888] text-sm hover:text-[#1C1C1C] transition-colors mb-10 block">← Back home</Link>
        <p className="text-[#FFC200] text-xs font-bold tracking-[0.2em] uppercase mb-4">Legal</p>
        <h1 className="font-display text-[#1C1C1C] text-4xl font-medium mb-6">Privacy Policy</h1>
        <p className="text-[#444444] text-base leading-relaxed">This document is being finalised. Email <a href="mailto:info@iffa-c.com" className="underline hover:text-[#1F3A8A]">info@iffa-c.com</a> with any questions.</p>
      </div>
    </div>
  );
}
