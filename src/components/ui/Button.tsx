"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-ui font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ashanti-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary, Sahel Ink fill
            "bg-[#1C1C1C] text-white hover:bg-[#252525] hover:translate-x-0.5 border-b-2 border-transparent hover:border-[#EA6B0E]":
              variant === "primary",
            // Secondary, bordered
            "border border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-white":
              variant === "secondary",
            // Ghost, text only
            "text-[#1C1C1C] underline underline-offset-4 hover:text-[#1F3A8A]":
              variant === "ghost",
            // Gold accent
            "bg-[#EA6B0E] text-[#1C1C1C] hover:bg-[#D45C00]":
              variant === "gold",
          },
          {
            "text-xs px-4 py-2": size === "sm",
            "text-sm px-6 py-3": size === "md",
            "text-base px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
