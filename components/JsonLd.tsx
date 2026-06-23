import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const { primary, secondary } = siteConfig.contacts;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    telephone: primary.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rayville",
      addressRegion: "LA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Place",
      name: siteConfig.serviceArea,
    },
    sameAs: [siteConfig.facebook],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: primary.phone,
        contactType: "customer service",
        name: primary.name,
        areaServed: "US",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: secondary.phone,
        contactType: "customer service",
        name: secondary.name,
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
