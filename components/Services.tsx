"use client";

import {
  Home,
  Building2,
  Wrench,
  LayoutGrid,
  Lightbulb,
  HardHat,
  type LucideIcon,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  mainServices,
  additionalServicesText,
  sectionPadding,
} from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Wrench,
  LayoutGrid,
  Lightbulb,
  HardHat,
};

export function Services() {
  return (
    <AnimatedSection
      id="services"
      className={`bg-light-gray ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Our Electrical Services"
          subtitle="Professional electrical solutions for homes and businesses across Northeast Louisiana."
        />

        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {mainServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md md:rounded-xl md:p-5"
              >
                <div className="mb-2 inline-flex rounded-md bg-gold/10 p-2 text-gold md:mb-3 md:rounded-lg md:p-2.5">
                  {Icon && (
                    <Icon
                      className="h-4 w-4 md:h-5 md:w-5"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mb-1 text-sm font-semibold leading-snug text-charcoal md:mb-2 md:text-base">
                  {service.title}
                </h3>
                <p className="hidden text-sm leading-relaxed text-muted sm:block">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted md:mt-8 md:text-base">
          {additionalServicesText}
        </p>
      </div>
    </AnimatedSection>
  );
}
