import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
  return (
    <section id="contacto" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Contacto"
          description="Cuentame tu caso y buscaremos juntos la mejor solucion."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
