"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import {
  ALL_SERVICES,
  BOOKSY_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from "@/lib/constants";

/**
 * DEMO booking widget.
 * Visual mock of an integrated booking flow, to show the client how it could
 * look. Availability is fake; the final step hands off to Booksy, which stays
 * the single source of truth for the agenda.
 */

const WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function buildSlots(from: string, to: string) {
  const [fh, fm] = from.split(":").map(Number);
  const [th, tm] = to.split(":").map(Number);
  const out: string[] = [];
  for (let m = fh * 60 + fm; m < th * 60 + tm; m += 30) {
    out.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return out;
}

const SLOTS = [...buildSlots("09:00", "13:30"), ...buildSlots("15:30", "20:00")];

// Deterministic "taken" slots so the demo looks realistic but stable.
function isTaken(dayIndex: number, slotIndex: number) {
  return (dayIndex * 7 + slotIndex * 3) % 5 === 0 || (dayIndex + slotIndex) % 7 === 0;
}

export function BookingSection() {
  const [days, setDays] = useState<Date[]>([]);
  const [serviceName, setServiceName] = useState(ALL_SERVICES[0].name);
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  // Dates are computed on the client to avoid SSR/CSR mismatch.
  useEffect(() => {
    const list: Date[] = [];
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    while (list.length < 6) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0) list.push(new Date(d)); // assumption: closed on Sundays
    }
    setDays(list);
  }, []);

  const service = useMemo(
    () => ALL_SERVICES.find((s) => s.name === serviceName)!,
    [serviceName]
  );

  const selectedDay = dayIdx !== null ? days[dayIdx] : null;
  const ready = selectedDay && slot;

  return (
    <section
      id="reserva"
      className="relative bg-navy-900 grain py-24 md:py-32 px-5 md:px-6"
    >
      <div className="relative z-[2] mx-auto max-w-6xl">
        <SectionTitle
          align="center"
          eyebrow="Reserva"
          subtitle="Elige servicio, día y hora. La cita se confirma en Booksy, donde se gestiona toda la agenda."
        >
          Pide tu cita
        </SectionTitle>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Widget */}
          <div className="lg:col-span-8">
            <div className="relative border border-gold/30 bg-navy-950/70 p-6 md:p-8">
              <span className="absolute -top-3 left-6 bg-oxblood px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-cream">
                Vista previa · demo
              </span>

              {/* Step 1 */}
              <fieldset>
                <legend className="eyebrow mb-4">1 · Servicio</legend>
                <label htmlFor="booking-service" className="sr-only">
                  Servicio
                </label>
                <select
                  id="booking-service"
                  value={serviceName}
                  onChange={(e) => {
                    setServiceName(e.target.value);
                    setSlot(null);
                  }}
                  className="w-full appearance-none rounded-sm border border-cream/15 bg-navy-900 px-4 py-3.5 font-body text-sm text-cream focus:border-gold focus:outline-none"
                >
                  {ALL_SERVICES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — {s.price} € · {s.duration} min
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Step 2 */}
              <fieldset className="mt-8">
                <legend className="eyebrow mb-4">2 · Día</legend>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {days.map((d, i) => {
                    const active = dayIdx === i;
                    return (
                      <button
                        key={d.toISOString()}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setDayIdx(i);
                          setSlot(null);
                        }}
                        className={`flex flex-col items-center rounded-sm border py-3 transition-colors ${
                          active
                            ? "border-gold bg-gold text-navy-950"
                            : "border-cream/15 text-cream hover:border-gold/60"
                        }`}
                      >
                        <span className="font-body text-[10px] uppercase tracking-[0.18em] opacity-75">
                          {WEEKDAYS[d.getDay()]}
                        </span>
                        <span className="font-display text-2xl leading-tight">{d.getDate()}</span>
                        <span className="font-body text-[10px] uppercase opacity-60">
                          {MONTHS[d.getMonth()]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Step 3 */}
              <fieldset className="mt-8">
                <legend className="eyebrow mb-4">3 · Hora</legend>
                {dayIdx === null ? (
                  <p className="font-body text-sm text-cream/45">
                    Selecciona un día para ver las horas libres.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {[
                      { label: "Mañana", items: SLOTS.filter((s) => s < "14:00") },
                      { label: "Tarde", items: SLOTS.filter((s) => s >= "14:00") },
                    ].map((block) => (
                      <div key={block.label}>
                        <p className="mb-2 font-body text-xs text-cream/45">{block.label}</p>
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2">
                          {block.items.map((s) => {
                            const taken = isTaken(dayIdx, SLOTS.indexOf(s));
                            const active = slot === s;
                            return (
                              <button
                                key={s}
                                type="button"
                                disabled={taken}
                                aria-pressed={active}
                                onClick={() => setSlot(s)}
                                className={`rounded-sm border py-2 font-body text-sm tabular-nums transition-colors ${
                                  taken
                                    ? "cursor-not-allowed border-cream/5 text-cream/20 line-through"
                                    : active
                                      ? "border-gold bg-gold text-navy-950"
                                      : "border-cream/15 text-cream hover:border-gold/60"
                                }`}
                              >
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </fieldset>

              {/* Summary */}
              <div className="mt-10 flex flex-col gap-5 border-t border-gold/20 pt-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                  <CalendarIcon className="mt-0.5 shrink-0 text-gold" />
                  <p className="font-body text-sm text-cream/75" aria-live="polite">
                    <span className="text-cream">{service.name}</span> · {service.price} €
                    <br />
                    {ready
                      ? `${WEEKDAYS[selectedDay.getDay()]} ${selectedDay.getDate()} ${MONTHS[selectedDay.getMonth()]} a las ${slot}`
                      : "Falta elegir día y hora"}
                  </p>
                </div>
                <GoldButton
                  href={ready ? BOOKSY_URL : undefined}
                  external
                  disabled={!ready}
                  large
                >
                  Confirmar en Booksy
                </GoldButton>
              </div>
            </div>
          </div>

          {/* Alternatives */}
          <aside className="lg:col-span-4 flex flex-col gap-4">
            <div className="border border-cream/10 p-6">
              <p className="eyebrow">¿Prefieres hablar?</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-cream/65">
                Escribe por WhatsApp o llama y te buscamos hueco.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <GoldButton href={WHATSAPP_LINK} external variant="outline">
                  <WhatsAppIcon size={16} />
                  Escribir por WhatsApp
                </GoldButton>
                <GoldButton href={PHONE_TEL} variant="ghost">
                  <PhoneIcon size={16} />
                  {PHONE_DISPLAY}
                </GoldButton>
              </div>
            </div>
            <div className="border border-cream/10 p-6">
              <p className="eyebrow">Ya cliente de Booksy</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-cream/65">
                Gestiona o cambia tu cita directamente desde la app.
              </p>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-body text-sm text-gold-light underline underline-offset-4 hover:text-gold"
              >
                Abrir Bulnes1672 en Booksy
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
