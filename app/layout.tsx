import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Word Electric LLC | Electrical Contractor in Rayville, LA",
  description: siteConfig.description,
  keywords: [
    "electrician",
    "electrical contractor",
    "Rayville LA",
    "Northeast Louisiana",
    "residential electrical",
    "commercial electrical",
    "Word Electric",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Word Electric LLC | Electrical Contractor in Rayville, LA",
    description: siteConfig.description,
    images: [
      {
        url: "/gallery/1.jpg",
        width: 1200,
        height: 630,
        alt: "Word Electric professional electrical services in Northeast Louisiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Electric LLC | Electrical Contractor in Rayville, LA",
    description: siteConfig.description,
    images: ["/gallery/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-charcoal antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
