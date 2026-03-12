import { services } from "@/data/home";

import { SectionHeading } from "./section-heading";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <section id="servicios" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Especialidades"
          description="Tratamientos integrales adaptados a tus necesidades, combinando las tecnicas mas actuales con un trato personalizado."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
