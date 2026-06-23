"use client";

import { motion, useReducedMotion } from "framer-motion";

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
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <>
      <div
        className={`mb-3 h-1 w-10 rounded-full bg-gold md:mb-4 md:w-12 ${centered ? "mx-auto" : ""}`}
      />
      <h2
        className={`text-2xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 max-w-2xl text-base leading-relaxed md:mt-4 md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </>
  );

  if (prefersReducedMotion) {
    return (
      <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
        {content}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}
    >
      {content}
    </motion.div>
  );
}
