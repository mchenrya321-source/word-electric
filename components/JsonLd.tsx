import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const { owners } = siteConfig.contacts;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    telephone: owners.map((owner) => owner.phone),
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
    founder: owners.map((owner) => ({
      "@type": "Person",
      name: owner.name,
      jobTitle: owner.role,
      telephone: owner.phone,
    })),
    contactPoint: owners.map((owner) => ({
      "@type": "ContactPoint",
      telephone: owner.phone,
      contactType: "customer service",
      name: owner.name,
      areaServed: "US",
      availableLanguage: "English",
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
