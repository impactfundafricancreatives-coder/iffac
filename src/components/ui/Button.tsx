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
            "bg-[#0B1B2B] text-white hover:bg-[#111111] hover:translate-x-0.5 border-b-2 border-transparent hover:border-[#C9A24A]":
              variant === "primary",
            // Secondary, bordered
            "border border-[#0B1B2B] text-[#0B1B2B] bg-transparent hover:bg-[#0B1B2B] hover:text-white":
              variant === "secondary",
            // Ghost, text only
            "text-[#0B1B2B] underline underline-offset-4 hover:text-[#1F3A8A]":
              variant === "ghost",
            // Gold accent
            "bg-[#C9A24A] text-[#0B1B2B] hover:bg-[#b08c38]":
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
