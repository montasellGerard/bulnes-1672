"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { GalleryItem } from "@/lib/types";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 md:p-10"
        >
          <motion.figure
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md"
          >
            <div className="gilt-frame">
              <Image
                src={item.src}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="h-auto max-h-[78vh] w-full object-contain"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <figcaption className="mt-5 text-center">
              <p className="font-display text-lg text-cream">{item.label}</p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-gold">
                {item.category}
              </p>
            </figcaption>
          </motion.figure>

          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 p-2 text-cream/60 transition-colors hover:text-cream"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
