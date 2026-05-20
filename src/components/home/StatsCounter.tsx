"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

function CountUp({ from, to, prefix = "", suffix = "", label, duration = 2000 }: StatProps) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now();
        const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setValue(Math.floor(from + (to - from) * easeOutExpo(progress)));
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(to);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="font-display font-medium text-[#B8902A] leading-none mb-2" style={{ fontSize: "clamp(2.5rem,4vw,4rem)" }}>
        {prefix}{value}{suffix}
      </p>
      <p className="text-[#C8C4BC] text-sm tracking-wide">{label}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      <CountUp from={0} to={34} suffix="+"  label="Startups backed" />
      <CountUp from={0} to={16} suffix="+"  label="Creative sub-sectors" />
      <CountUp from={0} to={2}  prefix="€" suffix="M" label="Max seed per venture" />
      <CountUp from={0} to={70} suffix="+"  label="Investors in network" />
    </div>
  );
}
