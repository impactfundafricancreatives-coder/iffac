"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function AnimatedSection({ children, className, stagger, delay = 0 }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (stagger) {
      // Add reveal class to direct children
      Array.from(el.children).forEach((child) => {
        (child as HTMLElement).classList.add("reveal");
      });
    } else {
      el.classList.add("reveal");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (stagger) {
          Array.from(el.children).forEach((child, i) => {
            setTimeout(
              () => (child as HTMLElement).classList.add("visible"),
              delay + i * 120
            );
          });
        } else {
          setTimeout(() => el.classList.add("visible"), delay);
        }
        observer.unobserve(el);
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, delay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
