import { siteConfig } from "@/lib/site-config";

export function CallToAction() {
  const { primary, secondary } = siteConfig.contacts;

  return (
    <section className="relative hidden overflow-hidden bg-charcoal py-12 md:block md:py-20">
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #F4B400 0%, transparent 50%), radial-gradient(circle at 75% 75%, #F4B400 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Need electrical work done?
        </h2>

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={`tel:${primary.tel}`}
            className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 text-base font-semibold text-charcoal transition-colors hover:bg-gold-dark"
          >
            Call Word Electric
          </a>
          <p className="text-sm text-gray-300">
            Or call{" "}
            <a
              href={`tel:${secondary.tel}`}
              className="font-medium text-white transition-colors hover:text-gold"
            >
              {secondary.name} at {secondary.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
