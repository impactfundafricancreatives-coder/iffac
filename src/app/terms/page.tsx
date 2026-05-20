import Link from "next/link";
export default function TermsPage() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen pt-40 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[#A8A39A] text-sm hover:text-[#0B1B2B] transition-colors mb-10 block">← Back home</Link>
        <p className="text-[#B5651D] text-xs font-bold tracking-[0.2em] uppercase mb-4">Legal</p>
        <h1 className="font-display text-[#0B1B2B] text-4xl font-medium mb-6">Terms of Use</h1>
        <p className="text-[#4A4A4A] text-base leading-relaxed">This document is being finalised. Email <a href="mailto:info@iffa-c.com" className="underline hover:text-[#1F3A8A]">info@iffa-c.com</a> with any questions.</p>
      </div>
    </div>
  );
}
