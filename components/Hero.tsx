"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { primary } = siteConfig.contacts;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center md:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold md:text-base"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Reliable Electrical Services You Can Count On
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl"
        >
          Serving homeowners and businesses throughout Northeast Louisiana with
          dependable, professional electrical solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CallButton
            href={`tel:${primary.tel}`}
            label="Call Now"
            sublabel={`${primary.name} · ${primary.phone}`}
            variant="primary"
            className="w-full sm:w-auto"
          />
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 md:text-base sm:w-auto"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-sm text-gray-300"
        >
          {siteConfig.location} · Serving {siteConfig.serviceArea}
        </motion.p>
      </div>
    </section>
  );
}
