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

export const services = [
  {
    title: "Residential Electrical",
    description:
      "Complete electrical solutions for your home, from outlets and switches to whole-home upgrades.",
    icon: "Home",
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical systems for offices, retail spaces, and commercial properties.",
    icon: "Building2",
  },
  {
    title: "Electrical Repairs",
    description:
      "Fast, dependable repairs to restore power and keep your property safe.",
    icon: "Wrench",
  },
  {
    title: "Troubleshooting",
    description:
      "Expert diagnosis of electrical issues to find the root cause and fix it right.",
    icon: "Search",
  },
  {
    title: "Breaker Panels",
    description:
      "Panel upgrades, replacements, and breaker service for safe, reliable power distribution.",
    icon: "LayoutGrid",
  },
  {
    title: "Lighting Installation",
    description:
      "Indoor and outdoor lighting design and installation to brighten your space.",
    icon: "Lightbulb",
  },
  {
    title: "Ceiling Fans",
    description:
      "Professional ceiling fan installation and wiring for comfort and efficiency.",
    icon: "Fan",
  },
  {
    title: "Generator Connections",
    description:
      "Safe generator hookups and transfer switch installation for backup power.",
    icon: "Zap",
  },
  {
    title: "New Construction Wiring",
    description:
      "Full electrical rough-in and finish work for new builds and additions.",
    icon: "HardHat",
  },
  {
    title: "Remodel Wiring",
    description:
      "Electrical updates and rewiring tailored to your renovation project.",
    icon: "Hammer",
  },
  {
    title: "Electrical Maintenance",
    description:
      "Preventive maintenance to keep your electrical systems running smoothly.",
    icon: "ShieldCheck",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Licensed & Professional",
    description:
      "Our team brings professional standards and licensed expertise to every job, large or small.",
    icon: "BadgeCheck",
  },
  {
    title: "Reliable Communication",
    description:
      "We keep you informed from the first call through project completion so there are no surprises.",
    icon: "MessageCircle",
  },
  {
    title: "Quality Workmanship",
    description:
      "Every installation and repair is done with care, precision, and attention to detail.",
    icon: "Award",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority. We stand behind our work and treat your property with respect.",
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
  "Electrical Repairs",
  "Troubleshooting",
  "Breaker Panels",
  "Lighting Installation",
  "Ceiling Fans",
  "Generator Connections",
  "New Construction Wiring",
  "Remodel Wiring",
  "Electrical Maintenance",
  "Other",
] as const;
