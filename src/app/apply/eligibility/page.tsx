import type { Metadata } from "next";
import Link from "next/link";
import { EligibilityQuiz } from "@/components/ui/EligibilityQuiz";

export const metadata: Metadata = {
  title: "Check Eligibility",
  description: "3-minute eligibility quiz to find the right IFFAC program for your creative business.",
};

export default function EligibilityPage() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      <section className="pt-32 pb-16 bg-[#0B1B2B] px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <Link href="/apply" className="text-[#A8A39A] text-sm hover:text-white transition-colors block mb-10">
            ← Back to Apply
          </Link>
          <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-5">Eligibility Check</p>
          <h1 className="font-display text-white text-4xl md:text-5xl font-medium leading-snug mb-4">
            Find the right program for you.
          </h1>
          <p className="text-[#A8A39A] text-lg">Answer 4 quick questions, takes about 2 minutes.</p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <EligibilityQuiz />
        </div>
      </section>
    </div>
  );
}
