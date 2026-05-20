import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationPortal } from "@/components/ui/ApplicationPortal";

export const metadata: Metadata = {
  title: "Application Portal",
  description: "Start your IFFAC Cohort 2026 application.",
};

export default function PortalPage() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen">
      <section className="pt-32 pb-12 bg-[#0B1B2B] px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <Link href="/apply" className="text-[#A8A39A] text-sm hover:text-white transition-colors block mb-10">
            ← Back to Apply
          </Link>
          <p className="text-[#C9A24A] text-xs font-bold tracking-[0.2em] uppercase mb-5">Application Portal · Cohort 2026</p>
          <h1 className="font-display text-white text-4xl font-medium mb-3">Start your application.</h1>
          <p className="text-[#A8A39A] text-base">Your progress is saved automatically. Return any time before 30 June 2026.</p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <ApplicationPortal />
        </div>
      </section>
    </div>
  );
}
