"use client";

import {
  Home,
  Building2,
  Wrench,
  Search,
  LayoutGrid,
  Lightbulb,
  Fan,
  Zap,
  HardHat,
  Hammer,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Wrench,
  Search,
  LayoutGrid,
  Lightbulb,
  Fan,
  Zap,
  HardHat,
  Hammer,
  ShieldCheck,
};

export function Services() {
  return (
    <AnimatedSection
      id="services"
      className="bg-light-gray py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Our Electrical Services"
          subtitle="Comprehensive electrical solutions for homes and businesses across Northeast Louisiana."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
