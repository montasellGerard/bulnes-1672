"use client";

import { useEffect, useState } from "react";
import { BOOKSY_URL } from "@/lib/constants";

const LINKS = [
  { href: "#barberia", label: "La barbería" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#reserva", label: "Reserva" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy-950/95 backdrop-blur border-b border-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-5 md:px-6">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl font-semibold tracking-wide text-cream">
            Bulnes<span className="text-gold">1672</span>
          </span>
          <span className="mt-1 font-body text-[9px] uppercase tracking-[0.4em] text-cream/50">
            Barbería clásica
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-xs uppercase tracking-[0.2em] text-cream/70 hover:text-gold-light transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-gold/70 px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold-light hover:bg-gold hover:text-navy-950 transition-colors"
          >
            Pedir cita
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden -mr-2 p-2 text-cream"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Principal móvil"
          className="md:hidden border-t border-gold/15 bg-navy-950 px-5 pb-6"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream/10 py-4 font-display text-xl text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
