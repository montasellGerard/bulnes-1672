import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BottleIcon, ChairIcon, RazorIcon } from "@/components/ui/Icons";
import { PRODUCT_BRANDS } from "@/lib/constants";

const PILLARS = [
  {
    Icon: RazorIcon,
    title: "Navaja y toalla caliente",
    text: "Afeitado y arreglo de barba a la manera tradicional, con masaje y cuidado de la piel.",
  },
  {
    Icon: ChairIcon,
    title: "Sin prisas, con cita",
    text: "Se trabaja solo con cita previa. Cada cliente tiene su sillón y su tiempo.",
  },
  {
    Icon: BottleIcon,
    title: "Producto de toda la vida",
    text: "Lociones, jabones y bálsamos clásicos de barbería, elegidos uno a uno.",
  },
];

export function AboutSection() {
  return (
    <section id="barberia" className="bg-navy-950 py-24 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-center">
          <AnimatedSection className="lg:col-span-5 order-2 lg:order-1" direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="gilt-frame relative aspect-[3/4] overflow-hidden mt-10">
                <Image
                  fill
                  src="/images/trabajo-maquina.jpg"
                  alt="El barbero trabajando un degradado clásico en el sillón"
                  sizes="(max-width: 1024px) 45vw, 220px"
                  className="object-cover"
                />
              </div>
              <div className="gilt-frame relative aspect-[3/4] overflow-hidden">
                <Image
                  fill
                  src="/images/producto-vitrina.jpg"
                  alt="Vitrina con brochas y jabones de afeitado"
                  sizes="(max-width: 1024px) 45vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-7 order-1 lg:order-2">
            <SectionTitle eyebrow="La barbería">
              Un concepto de barbería distinto
            </SectionTitle>
            <div className="space-y-5 font-body text-base md:text-lg leading-relaxed text-cream/75 max-w-2xl">
              <p>
                Bulnes1672 es una barbería tradicional: un lugar de culto y
                reunión para hombres. Sillones de porcelana, espejos dorados,
                madera oscura y el olor de las lociones de siempre.
              </p>
              <p>
                Aquí no se viene solo a cortarse el pelo. Se viene a sentarse,
                a charlar y a salir arreglado como se hacía en las barberías
                del siglo XIX y la primera mitad del XX.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Pillars */}
        <AnimatedSection>
          <ul className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
            {PILLARS.map(({ Icon, title, text }) => (
              <li key={title} className="bg-navy-950 p-8">
                <Icon size={28} className="text-gold" />
                <h3 className="mt-5 font-display text-2xl text-cream">{title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/65">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Brands */}
        <AnimatedSection>
          <div className="mt-14 flex flex-col items-center gap-5 text-center">
            <p className="eyebrow text-cream/45">En el tocador</p>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {PRODUCT_BRANDS.map((b) => (
                <li key={b} className="font-display text-xl italic text-cream/70">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
