import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { siteConfig, navLinks } from "@/lib/site-config";

export function Footer() {
  const { primary, secondary } = siteConfig.contacts;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Word Electric, LLC"
              width={160}
              height={53}
              className="mb-4 h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm font-medium text-gold">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm">
              Serving {siteConfig.serviceArea}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-sm font-medium text-white">
                  {primary.name}
                </p>
                <a
                  href={`tel:${primary.tel}`}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {primary.phone}
                </a>
              </li>
              <li>
                <p className="text-sm font-medium text-white">
                  {secondary.name}
                </p>
                <a
                  href={`tel:${secondary.tel}`}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {secondary.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm transition-colors hover:bg-gold hover:text-charcoal"
              aria-label="Word Electric on Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
