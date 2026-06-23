"use client";

import { CallButton } from "@/components/ui/CallButton";
import { siteConfig } from "@/lib/site-config";

export function CallToAction() {
  const { primary, secondary } = siteConfig.contacts;

  return (
    <section className="relative overflow-hidden bg-charcoal py-12 md:py-20">
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #F4B400 0%, transparent 50%), radial-gradient(circle at 75% 75%, #F4B400 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
          Need an Electrician?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-base text-gray-300 md:mt-4 md:text-lg">
          Call today for dependable electrical service in Rayville and
          throughout Northeast Louisiana.
        </p>

        <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-lg md:mt-8 md:max-w-none md:flex-row md:items-center md:justify-center">
          <CallButton
            href={`tel:${primary.tel}`}
            label={`Call ${primary.name}`}
            sublabel={primary.phone}
            variant="primary"
            className="w-full justify-center md:w-auto"
          />
          <CallButton
            href={`tel:${secondary.tel}`}
            label={`Call ${secondary.name}`}
            sublabel={secondary.phone}
            variant="outline"
            className="w-full justify-center md:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
