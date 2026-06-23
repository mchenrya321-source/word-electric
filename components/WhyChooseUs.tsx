"use client";

import {
  BadgeCheck,
  MessageCircle,
  Award,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs, sectionPadding } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  MessageCircle,
  Award,
  HeartHandshake,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection id="why-us" className={`bg-white ${sectionPadding}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Word Electric"
          subtitle="Professional expertise and a commitment to doing right by every customer."
        />

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-3 inline-flex rounded-full bg-charcoal p-3 text-gold md:mb-4 md:p-3.5">
                  {Icon && (
                    <Icon
                      className="h-5 w-5 md:h-6 md:w-6"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-charcoal md:mb-2 md:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted md:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
