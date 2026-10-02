import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  MAPS_EMBED,
  MAPS_LINK,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-navy-950 py-24 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-5">
            <SectionTitle eyebrow="Dónde estamos">Visítanos en Granollers</SectionTitle>

            <dl className="space-y-7 font-body">
              <div className="flex gap-4">
                <PinIcon className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-cream/45">Dirección</dt>
                  <dd className="mt-1 text-cream">
                    {ADDRESS_LINE}
                    <br />
                    {ADDRESS_CITY}
                  </dd>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-gold-light underline underline-offset-4 hover:text-gold"
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <PhoneIcon className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-cream/45">Teléfono</dt>
                  <dd className="mt-1">
                    <a href={PHONE_TEL} className="text-cream hover:text-gold-light">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <ClockIcon className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-cream/45">Horario</dt>
                  <dd className="mt-1 text-cream">
                    {OPENING_HOURS.days}
                    <br />
                    Mañanas {OPENING_HOURS.morning}
                    <br />
                    Tardes {OPENING_HOURS.afternoon}
                  </dd>
                  <dd className="mt-1 text-sm text-cream/55">
                    {OPENING_HOURS.closed} · {OPENING_HOURS.note}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <GoldButton href={WHATSAPP_LINK} external>
                <WhatsAppIcon size={16} />
                WhatsApp
              </GoldButton>
              <GoldButton href={PHONE_TEL} variant="outline">
                <PhoneIcon size={16} />
                Llamar
              </GoldButton>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7" delay={0.1}>
            <div className="gilt-frame h-full min-h-[360px]">
              <iframe
                title="Mapa: Bulnes1672, Carrer del Camp de les Moreres 2, Granollers"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full border-0 grayscale-[0.6] contrast-[1.05]"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
