"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GoldButton } from "@/components/ui/GoldButton";
import { Ornament } from "@/components/ui/SectionTitle";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import {
  ADDRESS_SHORT,
  BOOKSY_URL,
  MAPS_LINK,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 grain pt-28 md:pt-36 pb-16 md:pb-24"
    >
      {/* Wainscot-style vertical panels, a nod to the shop walls */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(90deg,transparent_0,transparent_119px,#C29A55_119px,#C29A55_120px)]"
      />

      <div className="relative z-[2] mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-6"
          >
            Barbería clásica · Granollers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[5.5rem] font-medium text-cream"
          >
            Bulnes<span className="text-gold">1672</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-6 max-w-xl font-display text-xl md:text-2xl italic leading-snug text-cream/85 text-balance"
          >
            Un revival de las barberías del siglo XIX y la primera mitad del
            siglo XX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Ornament className="my-8" />
            <p className="max-w-lg font-body text-base leading-relaxed text-cream/70">
              Corte a tijera, afeitado con navaja y toalla caliente, en un
              local pensado como lugar de culto y reunión. Servicio exclusivo
              para caballeros, solo con cita previa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <GoldButton href={BOOKSY_URL} external large>
              Reservar cita
            </GoldButton>
            <GoldButton href={WHATSAPP_LINK} external large variant="outline">
              <WhatsAppIcon size={16} />
              WhatsApp
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="lg:col-span-5"
        >
          <div className="gilt-frame mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/local-sillones.jpg"
                alt="Interior de Bulnes1672: sillones de barbero clásicos, paredes azul marino y espejos dorados"
                fill
                priority
                sizes="(max-width: 1024px) 384px, 440px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info strip */}
      <div className="relative z-[2] mx-auto mt-16 max-w-6xl px-5 md:px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-3 border-y border-gold/20 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
          <li>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-5 sm:px-6 sm:first:pl-0 text-cream/80 hover:text-gold-light transition-colors"
            >
              <PinIcon className="shrink-0 text-gold" />
              <span className="font-body text-sm">{ADDRESS_SHORT}</span>
            </a>
          </li>
          <li>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-3 py-5 sm:px-6 text-cream/80 hover:text-gold-light transition-colors"
            >
              <PhoneIcon className="shrink-0 text-gold" />
              <span className="font-body text-sm">{PHONE_DISPLAY}</span>
            </a>
          </li>
          <li className="flex items-center gap-3 py-5 sm:px-6 text-cream/80">
            <ClockIcon className="shrink-0 text-gold" />
            <span className="font-body text-sm">
              Mar – Sáb · {OPENING_HOURS.morning} · {OPENING_HOURS.afternoon}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
