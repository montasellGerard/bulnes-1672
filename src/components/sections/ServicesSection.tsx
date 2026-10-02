import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { BONOS, BOOKSY_URL, SERVICE_GROUPS } from "@/lib/constants";

const fmtPrice = (n: number) => `${n} €`;
const fmtDuration = (m: number) => (m >= 60 ? `${m / 60} h` : `${m} min`);

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative bg-navy-900 grain py-24 md:py-32 px-5 md:px-6"
    >
      <div className="relative z-[2] mx-auto max-w-6xl">
        <SectionTitle
          align="center"
          eyebrow="Carta de servicios"
          subtitle="Servicio exclusivo para caballeros. Todos los servicios se reservan con cita previa."
        >
          Corte, barba y afeitado
        </SectionTitle>

        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-3">
          {SERVICE_GROUPS.map((group, gi) => (
            <AnimatedSection key={group.title} delay={gi * 0.08}>
              <h3 className="font-display text-3xl text-gold-light">{group.title}</h3>
              <p className="mt-2 font-body text-sm text-cream/55">{group.intro}</p>

              <ul className="mt-8 space-y-6">
                {group.services.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-lg text-cream leading-snug">
                        {s.name}
                      </span>
                      <span className="leader" aria-hidden="true" />
                      <span className="font-display text-lg text-gold-light tabular-nums whitespace-nowrap">
                        {fmtPrice(s.price)}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs text-cream/50">
                      <span>{fmtDuration(s.duration)}</span>
                      {s.popular && (
                        <span className="rounded-sm bg-oxblood/80 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-cream">
                          Más pedido
                        </span>
                      )}
                    </div>
                    {s.description && (
                      <p className="mt-1.5 font-body text-sm leading-relaxed text-cream/60">
                        {s.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>

        {/* Bonos */}
        <AnimatedSection>
          <div className="mt-20 border border-gold/30 bg-navy-950/60 p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-sm">
                <p className="eyebrow">Para clientes de la casa</p>
                <h3 className="mt-3 font-display text-3xl text-cream">Bonos</h3>
                <p className="mt-2 font-body text-sm text-cream/60">
                  Paga por adelantado y ahorra en cada visita. Se adquieren en
                  la barbería.
                </p>
              </div>
              <ul className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 md:max-w-xl">
                {BONOS.map((b) => (
                  <li
                    key={b.name}
                    className="border border-cream/10 p-5"
                  >
                    <p className="font-display text-xl text-cream">{b.name}</p>
                    <p className="mt-1 font-body text-sm text-cream/55">{b.description}</p>
                    <p className="mt-4 font-display text-3xl text-gold-light tabular-nums">
                      {fmtPrice(b.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 flex justify-center">
          <GoldButton href={BOOKSY_URL} external large>
            Reservar en Booksy
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
