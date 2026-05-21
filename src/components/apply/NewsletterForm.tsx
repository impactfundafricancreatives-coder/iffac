"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function DataRoomForm() {
  return (
    <form
      className="flex flex-col gap-4 bg-white/5 border border-white/10 p-8"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Data room request"
    >
      <p className="heading-4 text-white mb-2">Request data room access</p>

      {[
        { id: "name", label: "Full name", type: "text" },
        { id: "org", label: "Organisation", type: "text" },
        { id: "email", label: "Work email", type: "email" },
        { id: "aum", label: "AUM / Allocation size (optional)", type: "text" },
      ].map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="caption text-[#888888] block mb-1">
            {field.label}
          </label>
          <input
            id={field.id}
            type={field.type}
            className="w-full bg-white/5 border border-white/15 text-white placeholder-[#444444] px-4 py-3 text-sm font-ui focus:outline-none focus:border-[#EA6B0E] transition-colors"
          />
        </div>
      ))}

      <Button variant="gold" size="md" type="submit" className="mt-2">
        Submit request <ArrowRight size={14} />
      </Button>

      <p className="caption text-[#444444]">
        We respond to all qualified inquiries within 2 business days.
      </p>
    </form>
  );
}
