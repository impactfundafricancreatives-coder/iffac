import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function OpenCallBanner() {
  return (
    <section
      className="bg-[#1F3A8A] py-5"
      aria-label="Open call announcement"
      role="banner"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className="w-2 h-2 rounded-full bg-[#C9A24A] animate-pulse shrink-0"
            aria-hidden
          />
          <p className="body-md text-white font-semibold">
            Cohort 2026 applications are open —{" "}
            <span className="text-[#C9A24A]">deadline: 30 June 2026</span>
          </p>
        </div>
        <Link href="/apply" className="shrink-0">
          <Button variant="gold" size="sm" className="gap-2">
            Apply now <ArrowRight size={14} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
