import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { WHATSAPP_LINK } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-bg-base py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Text column — 60% */}
            <div className="md:col-span-3 md:border-l md:border-gold/30 md:pl-10">
              <SectionTitle subtitle="Conocé al barbero">
                El oficio
              </SectionTitle>

              <div className="space-y-5 font-body text-text-cream/80 leading-relaxed mb-8">
                <p>
                  Me llamo Martín, y llevo más de diez años detrás de la silla.
                  Empecé de chico en el barrio, mirando cómo mi viejo le daba
                  forma a la barba de los vecinos. Hoy esa misma dedicación vive
                  en cada corte que hago en Bulnes 1672.
                </p>
                <p>
                  Trabajo con tijera, máquina y navaja porque creo que las
                  herramientas importan tanto como las manos que las usan. Cada
                  cliente trae su propio estilo y mi trabajo es entenderlo,
                  potenciarlo y que salga sintiéndose él mismo, pero mejor.
                </p>
                <p className="text-text-cream/50 text-sm tracking-widest uppercase">
                  +10 años de experiencia · Palermo, CABA
                </p>
              </div>

              <GoldButton href={WHATSAPP_LINK} external>
                Reservá tu turno
              </GoldButton>
            </div>

            {/* Image column — 40% */}
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                  alt="Martín — barbero de Bulnes 1672"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Subtle gold corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/60" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/60" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
