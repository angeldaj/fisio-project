import { credentials } from "@/data/home";

import { AboutCarousel } from "./about-carousel";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="sobre-mi" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <AboutCarousel />
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border-2 border-primary/10" />
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-white p-4 shadow-xl shadow-black/5">
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary">+2</p>
              <p className="text-[11px] font-medium text-muted">Anos de experiencia</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading
              title="Sobre mi"
              description="Soy una fisioterapeuta colegiada con experiencia en fisioterapia deportiva y rehabilitacion funcional."
            />
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                Soy <strong className="font-semibold text-foreground">Maria Hernandez</strong>, fisioterapeuta colegiada con mas de 2 anos de experiencia especializada en fisioterapia deportiva y rehabilitacion funcional.
              </p>
              <p>
                Mi enfoque combina las tecnicas mas actuales basadas en evidencia cientifica con un trato cercano y personalizado. Cada paciente es unico y merece un plan de tratamiento disenado especificamente para sus necesidades.
              </p>
              <p>
                He trabajado con deportistas amateur y profesionales, ayudandoles a recuperarse y a superar sus propios limites. Mi pasion es devolverte el movimiento.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {credentials.map((credential) => (
                <div
                  key={credential.label}
                  className="rounded-xl border border-border bg-surface/50 px-4 py-3"
                >
                  <p className="text-[13px] font-semibold text-foreground">{credential.label}</p>
                  <p className="text-[11px] text-muted">{credential.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
