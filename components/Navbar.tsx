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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="relative z-50 flex shrink-0 items-center"
          onClick={handleNavClick}
        >
          <Image
            src="/logo.png"
            alt="Word Electric, LLC"
            width={180}
            height={60}
            className="h-12 w-auto md:h-14 lg:h-16"
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
          className={`relative z-50 rounded-lg p-2 md:hidden ${
            isScrolled || isMobileOpen ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-white transition-colors hover:text-gold"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                href={`tel:${siteConfig.contacts.primary.tel}`}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-charcoal"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.contacts.primary.phone}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
