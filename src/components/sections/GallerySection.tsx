"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Lightbox } from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, FILTER_TABS } from "@/lib/constants";
import type { GalleryItem } from "@/lib/types";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="bg-bg-base py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle align="center" subtitle="El trabajo habla por sí solo">
          Galería
        </SectionTitle>

        {/* Filter tabs */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`whitespace-nowrap pb-2 font-body text-sm tracking-widest uppercase transition-all duration-200 border-b shrink-0 ${
                activeFilter === tab
                  ? "text-gold border-gold"
                  : "text-text-cream/40 hover:text-text-cream/70 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxItem(item)}
                className="relative aspect-square overflow-hidden rounded cursor-pointer group"
              >
                <Image
                  fill
                  src={item.src}
                  alt={item.label}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="font-body text-sm text-text-cream leading-tight">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </section>
  );
}
