"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  className = "",
  id,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
