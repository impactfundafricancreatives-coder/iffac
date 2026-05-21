"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const [label, setLabel]   = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const onEnterLink = (e: Event) => {
      const t = e.target as HTMLElement;
      const closest = t.closest("a, button, [data-cursor]");
      if (!closest) return;
      const cursorLabel = closest.getAttribute("data-cursor") || "";
      setLabel(cursorLabel);
      ringRef.current?.classList.add("cursor-hover");
    };

    const onLeaveLink = () => {
      setLabel("");
      ringRef.current?.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    // Re-observe dynamically added elements via MutationObserver
    const mo = new MutationObserver(() => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      mo.disconnect();
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 8, height: 8,
          background: "#EA6B0E",
          borderRadius: "50%",
          marginLeft: -4, marginTop: -4,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
          willChange: "transform",
        }}
      />
      {/* Ring follower */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none flex items-center justify-center"
        style={{
          width: 36, height: 36,
          border: "1.5px solid rgba(234,107,14,0.5)",
          borderRadius: "50%",
          marginLeft: -18, marginTop: -18,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
          willChange: "transform",
        }}
      >
        {label && (
          <span className="text-[#EA6B0E] text-[9px] font-bold tracking-wider uppercase whitespace-nowrap">
            {label}
          </span>
        )}
      </div>

      <style>{`
        .cursor-hover {
          width: 64px !important;
          height: 64px !important;
          margin-left: -32px !important;
          margin-top: -32px !important;
          border-color: rgba(234,107,14,0.8) !important;
          background: rgba(234,107,14,0.06);
        }
      `}</style>
    </>
  );
}
