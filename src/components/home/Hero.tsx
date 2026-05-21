"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end bg-[#1C1C1C] overflow-hidden"
      aria-label="Homepage hero"
    >
      {/* Background image placeholder, replace with Next/Image of a creative at work */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#1C1C1C]/90 to-[#1F3A8A]/30"
        aria-hidden
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')] bg-repeat"
        aria-hidden
      />

      {/* Ashanti Gold accent rule */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#EA6B0E] to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease }}
        aria-hidden
      />

      {/* Content */}
      <div className="container relative z-10 pb-20 md:pb-28 lg:pb-32 pt-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <Eyebrow color="gold" className="mb-6">
              Cohort 2026 · Open Call Now Live
            </Eyebrow>
          </motion.div>

          <motion.h1
            className="display-xl text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
          >
            Capital that respects craft.{" "}
            <span className="text-[#EA6B0E] italic">Craft</span> that earns capital.
          </motion.h1>

          <motion.p
            className="body-lg text-[#888888] max-w-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
          >
            We back Africa&apos;s most ambitious creatives, from incubation to scale, with up to{" "}
            <strong className="text-white font-semibold">€2M in patient capital</strong> and a
            global stage to match.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease }}
          >
            <Link href="/apply">
              <Button variant="gold" size="lg" className="gap-2">
                Apply for funding <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/investors">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-[#EA6B0E] underline-offset-4"
              >
                For investors →
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-hidden
      >
        <span className="caption text-[#888888] [writing-mode:vertical-lr] tracking-widest text-[10px]">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#EA6B0E] to-transparent" />
      </motion.div>
    </section>
  );
}
