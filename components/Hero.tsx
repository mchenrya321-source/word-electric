"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/lib/site-config";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { primary } = siteConfig.contacts;
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion ? {} : fadeUp;
  const t = (delay: number) =>
    prefersReducedMotion
      ? undefined
      : { duration: 0.35, ease: "easeOut" as const, delay };

  return (
    <section
      id="home"
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden md:min-h-screen"
    >
      <Image
        src="/gallery/1.jpg"
        alt="Word Electric professional electrical services"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-charcoal/70" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-24 text-center md:px-6 md:pb-32 md:pt-32 lg:px-8">
        <motion.p
          {...motionProps}
          transition={t(0)}
          className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold md:mb-4 md:text-base"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          {...motionProps}
          transition={t(0.05)}
          className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Reliable Electrical Services You Can Count On
        </motion.h1>

        <motion.p
          {...motionProps}
          transition={t(0.1)}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200 md:mt-6 md:text-xl"
        >
          Serving homeowners and businesses throughout Northeast Louisiana with
          dependable, professional electrical solutions.
        </motion.p>

        <motion.div
          {...motionProps}
          transition={t(0.15)}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-md sm:flex-row sm:items-center md:mt-10 md:max-w-none"
        >
          <CallButton
            href={`tel:${primary.tel}`}
            label="Call Now"
            sublabel={`${primary.name} · ${primary.phone}`}
            variant="primary"
            className="w-full justify-center sm:w-auto"
          />
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-gold hover:bg-gold/10 md:text-base sm:w-auto"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.p
          {...motionProps}
          transition={t(0.2)}
          className="mt-6 text-xs text-gray-300 md:mt-8 md:text-sm"
        >
          {siteConfig.location} · Serving {siteConfig.serviceArea}
        </motion.p>
      </div>
    </section>
  );
}
