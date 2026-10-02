import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  BOOKSY_URL,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-950 px-5 md:px-6 pt-16 pb-28 md:pb-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-semibold text-cream">
            Bulnes<span className="text-gold">1672</span>
          </p>
          <p className="mt-2 font-body text-[10px] uppercase tracking-[0.4em] text-cream/45">
            Barbería clásica · Granollers
          </p>
          <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-cream/55">
            Servicio exclusivo para caballeros. Solo con cita previa.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Visítanos</p>
          <p className="font-body text-sm leading-relaxed text-cream/65">
            {ADDRESS_LINE}
            <br />
            {ADDRESS_CITY}
          </p>
          <p className="mt-3 font-body text-sm text-cream/65">
            {OPENING_HOURS.days}
            <br />
            {OPENING_HOURS.morning}
            <br />
            {OPENING_HOURS.afternoon}
            <br />
            <span className="text-cream/45">{OPENING_HOURS.closed}</span>
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Reservas</p>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="text-cream/65 hover:text-gold-light">
                Booksy
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-cream/65 hover:text-gold-light">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={PHONE_TEL} className="text-cream/65 hover:text-gold-light">
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-14 max-w-6xl border-t border-cream/10 pt-6 font-body text-xs text-cream/35">
        © {new Date().getFullYear()} Bulnes1672 · Barbería Clásica
      </p>
    </footer>
  );
}
