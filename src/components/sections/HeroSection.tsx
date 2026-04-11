"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/GoldButton";
import { WHATSAPP_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] overflow-hidden grain"
    >
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
        alt="Barbería Bulnes 1672"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg-base" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-[2] px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-text-cream uppercase"
        >
          Bulnes 1672
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "center", width: "60px" }}
          className="h-px bg-gold my-6"
          aria-hidden="true"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base md:text-lg text-text-cream/70 tracking-widest uppercase mb-10 max-w-md"
        >
          Barbería de autor · Palermo, CABA
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <GoldButton href={WHATSAPP_LINK} external large>
            Reservar ahora
          </GoldButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-text-cream/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-text-cream/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
