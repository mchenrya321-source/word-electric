"use client";

import { motion } from "framer-motion";
import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/lib/site-config";

export function CallToAction() {
  const { primary, secondary } = siteConfig.contacts;

  return (
    <section className="relative overflow-hidden bg-charcoal py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #F4B400 0%, transparent 50%), radial-gradient(circle at 75% 75%, #F4B400 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          Need an Electrician?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
        >
          Call today for dependable electrical service in Rayville and
          throughout Northeast Louisiana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CallButton
            href={`tel:${primary.tel}`}
            label={`Call ${primary.name}`}
            sublabel={primary.phone}
            variant="primary"
          />
          <CallButton
            href={`tel:${secondary.tel}`}
            label={`Call ${secondary.name}`}
            sublabel={secondary.phone}
            variant="outline"
          />
        </motion.div>
      </div>
    </section>
  );
}
