"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/lib/site-config";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex, close, goNext, goPrev]);

  return (
    <AnimatedSection
      id="gallery"
      className="bg-light-gray py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="A look at the quality electrical work we deliver for customers across Northeast Louisiana."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              aria-label={`View image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                width={1200}
                height={900}
                className="mx-auto max-h-[85vh] w-auto rounded-lg object-contain"
                priority
              />
              <p className="mt-4 text-center text-sm text-gray-300">
                {galleryImages[selectedIndex].alt}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
