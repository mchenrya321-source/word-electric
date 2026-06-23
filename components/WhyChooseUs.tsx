"use client";

import {
  BadgeCheck,
  MessageCircle,
  Award,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  MessageCircle,
  Award,
  HeartHandshake,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection id="why-us" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Word Electric"
          subtitle="We combine professional expertise with a commitment to doing right by every customer."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-5 inline-flex rounded-full bg-charcoal p-4 text-gold">
                  {Icon && <Icon className="h-7 w-7" aria-hidden="true" />}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
