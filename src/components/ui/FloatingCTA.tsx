"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BOOKSY_URL, WHATSAPP_LINK } from "@/lib/constants";
import { WhatsAppIcon } from "./Icons";

/** Mobile-only sticky booking bar. */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-gold/25 bg-navy-950/95 p-3 backdrop-blur md:hidden"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="flex items-center justify-center rounded border border-gold/60 px-4 text-gold-light"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded bg-gold py-3.5 text-center font-body text-xs font-semibold uppercase tracking-[0.2em] text-navy-950"
          >
            Reservar cita
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
