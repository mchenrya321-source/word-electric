"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  const showSolidHeader = isScrolled || isMobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        showSolidHeader
          ? "bg-white shadow-md"
          : "bg-charcoal/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:h-auto md:px-6 md:py-3 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="relative flex min-w-0 shrink items-center"
          onClick={handleNavClick}
        >
          <Image
            src="/logo.png"
            alt="Word Electric, LLC"
            width={160}
            height={53}
            className={`h-10 w-auto md:h-14 lg:h-16 ${
              showSolidHeader ? "" : "md:brightness-100 brightness-0 invert md:invert-0"
            }`}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${siteConfig.contacts.primary.tel}`}
          className="hidden items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark md:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-charcoal shadow-md transition-colors hover:bg-gold-dark md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-charcoal/50 md:hidden"
              onClick={handleNavClick}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-50 border-t border-gray-100 bg-white shadow-lg md:hidden"
            >
              <ul className="px-4 py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="flex min-h-[52px] items-center border-b border-gray-100 text-lg font-medium text-charcoal transition-colors last:border-b-0 active:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 border-t border-gray-100 px-4 py-4">
                <a
                  href={`tel:${siteConfig.contacts.primary.tel}`}
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 py-3 text-base font-semibold text-charcoal"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {siteConfig.contacts.primary.phone}
                </a>
                <a
                  href={`tel:${siteConfig.contacts.secondary.tel}`}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border-2 border-charcoal/15 px-4 py-3 text-sm font-semibold text-charcoal"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.contacts.secondary.name} ·{" "}
                  {siteConfig.contacts.secondary.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
