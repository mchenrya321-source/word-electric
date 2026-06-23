import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { owners } = siteConfig.contacts;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-md space-y-4 text-center md:max-w-lg">
          <div>
            <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm font-medium text-gold">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="space-y-2 text-sm">
            {owners.map((owner) => (
              <p key={owner.tel}>
                {owner.name}:{" "}
                <a
                  href={`tel:${owner.tel}`}
                  className="text-gray-200 transition-colors hover:text-gold"
                >
                  {owner.phone}
                </a>
              </p>
            ))}
          </div>

          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm text-gray-300 transition-colors hover:text-gold"
            aria-label="Word Electric on Facebook"
          >
            <FacebookIcon className="h-4 w-4" />
            Facebook
          </a>

          <p className="text-sm text-gray-400">
            Serving {siteConfig.serviceArea}
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
