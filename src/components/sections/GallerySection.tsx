"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Lightbox } from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, FILTER_TABS } from "@/lib/constants";
import type { GalleryItem } from "@/lib/types";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTER_TABS)[number]>("Todos");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="bg-navy-950 py-24 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          align="center"
          eyebrow="Galería"
          subtitle="Trabajos, rincones del local y el producto que se usa cada día."
        >
          El oficio, de cerca
        </SectionTitle>

        <div
          role="tablist"
          aria-label="Filtrar galería"
          className="mb-10 flex justify-start md:justify-center gap-6 overflow-x-auto scrollbar-hide pb-2"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeFilter === tab}
              onClick={() => setActiveFilter(tab)}
              className={`shrink-0 whitespace-nowrap border-b pb-2 font-body text-xs uppercase tracking-[0.22em] transition-colors duration-200 ${
                activeFilter === tab
                  ? "border-gold text-gold-light"
                  : "border-transparent text-cream/45 hover:text-cream/75"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.button
                type="button"
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxItem(item)}
                aria-label={`Ampliar: ${item.label}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm text-left"
              >
                <Image
                  fill
                  src={item.src}
                  alt={item.label}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 280px"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent p-3 opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
                  <span className="font-body text-xs md:text-sm leading-tight text-cream">
                    {item.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </section>
  );
}
