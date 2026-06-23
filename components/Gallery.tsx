"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages, sectionPadding } from "@/lib/site-config";

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
      className={`bg-light-gray ${sectionPadding}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="Quality electrical work for customers across Northeast Louisiana."
        />

        {/* Compact 2-column grid on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:rounded-xl md:shadow-md"
              aria-label={`View image: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-200 group-hover:bg-charcoal/15" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
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

            <div
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
            </div>

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
