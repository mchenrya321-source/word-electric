export const siteConfig = {
  name: "Word Electric, LLC",
  tagline: "Lighting the Future",
  location: "Rayville, Louisiana",
  serviceArea: "Northeast Louisiana",
  // Update this URL before deployment, or set NEXT_PUBLIC_SITE_URL
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wordelectricla.com",
  description:
    "Word Electric provides dependable residential and commercial electrical services throughout Rayville and Northeast Louisiana. Call today for professional electrical work.",
  facebook:
    "https://www.facebook.com/people/Word-ElectricLLC/100054304791040/",
  contacts: {
    primary: {
      name: "George Word III",
      role: "Primary Contact",
      phone: "318-237-9740",
      tel: "+13182379740",
    },
    secondary: {
      name: "George Word Jr.",
      role: "Service & Scheduling",
      phone: "318-341-1112",
      tel: "+13183411112",
    },
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const mainServices = [
  {
    title: "Residential Electrical",
    description:
      "Outlets, switches, upgrades, and complete home electrical solutions.",
    icon: "Home",
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical systems for offices, retail, and commercial properties.",
    icon: "Building2",
  },
  {
    title: "Repairs & Troubleshooting",
    description:
      "Fast diagnosis and dependable repairs to restore power and safety.",
    icon: "Wrench",
  },
  {
    title: "Panels & Breakers",
    description:
      "Panel upgrades, replacements, and breaker service for safe power distribution.",
    icon: "LayoutGrid",
  },
  {
    title: "Lighting & Ceiling Fans",
    description:
      "Indoor and outdoor lighting plus professional ceiling fan installation.",
    icon: "Lightbulb",
  },
  {
    title: "New Construction & Remodels",
    description:
      "Full rough-in and finish wiring for new builds, additions, and renovations.",
    icon: "HardHat",
  },
] as const;

export const additionalServicesText =
  "We also handle generator connections, electrical maintenance, and custom project work.";

export const whyChooseUs = [
  {
    title: "Licensed & Professional",
    description:
      "Professional standards and licensed expertise on every job, large or small.",
    icon: "BadgeCheck",
  },
  {
    title: "Reliable Communication",
    description:
      "Clear updates from the first call through project completion.",
    icon: "MessageCircle",
  },
  {
    title: "Quality Workmanship",
    description:
      "Every installation and repair done with care, precision, and attention to detail.",
    icon: "Award",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We stand behind our work and treat your property with respect.",
    icon: "HeartHandshake",
  },
] as const;

export const galleryImages = [
  {
    src: "/gallery/1.jpg",
    alt: "Word Electric electrical work on a commercial job site",
  },
  {
    src: "/gallery/2.jpg",
    alt: "Professional electrical installation by Word Electric",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Electrical panel and wiring work in Northeast Louisiana",
  },
] as const;

export const serviceOptions = [
  "Residential Electrical",
  "Commercial Electrical",
  "Repairs & Troubleshooting",
  "Panels & Breakers",
  "Lighting & Ceiling Fans",
  "New Construction & Remodels",
  "Generator Connections",
  "Electrical Maintenance",
  "Other",
] as const;

/** Shared section vertical padding — tighter on mobile */
export const sectionPadding = "py-12 md:py-20 lg:py-24";
