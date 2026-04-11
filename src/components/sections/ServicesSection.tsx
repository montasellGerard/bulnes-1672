"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/constants";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="servicios" className="bg-bg-card py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionTitle align="center" subtitle="Todos los precios en pesos argentinos">
          Servicios
        </SectionTitle>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.name}
              variants={item}
              className="flex justify-between items-start py-5 border-b border-white/10 last:border-0 gap-4"
            >
              <div className="flex-1 min-w-0">
                <p className="font-display text-xl text-text-cream">
                  {service.name}
                </p>
                <p className="font-body text-sm text-text-cream/60 mt-0.5">
                  {service.description}
                </p>
              </div>
              <span className="font-display text-xl text-gold shrink-0">
                {service.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="font-body text-xs text-text-cream/30 text-center mt-8 tracking-wide">
          * Los precios pueden variar según el largo y complejidad del trabajo.
        </p>
      </div>
    </section>
  );
}
