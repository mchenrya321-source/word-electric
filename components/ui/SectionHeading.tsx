"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <div
        className={`mb-4 h-1 w-12 rounded-full bg-gold ${centered ? "mx-auto" : ""}`}
      />
      <h2
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
