"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MobileCallBar() {
  const { primary } = siteConfig.contacts;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href={`tel:${primary.tel}`}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-base font-semibold text-charcoal"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {primary.phone}
      </a>
    </div>
  );
}
