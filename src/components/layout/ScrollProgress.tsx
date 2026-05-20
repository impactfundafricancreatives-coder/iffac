"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      bar.style.width = `${Math.min(pct, 100)}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9996] h-[2px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-[#B8902A] w-0"
        style={{ transition: "width 0.1s linear" }}
      />
    </div>
  );
}
