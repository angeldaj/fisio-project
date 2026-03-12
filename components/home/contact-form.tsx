"use client";

import { useState } from "react";

import { serviceOptions, whatsappNumber } from "@/data/home";
import { FaWhatsapp } from "react-icons/fa";

export function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !service || !message.trim()) {
      return;
    }

    const selectedService =
      serviceOptions.find((option) => option.value === service)?.label ?? service;

    const whatsappMessage = `Hola, mi nombre es *${name.trim()}*. Estoy interesada(a) en ${selectedService}. Mensaje: ${message.trim()}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="lg:col-span-3" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-[13px] font-medium">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            required
            className="w-full rounded-xl border border-border bg-white px-5 py-3 text-sm outline-none transition-all placeholder:text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/5"
          />
        </div>

        <div>
          <label htmlFor="servicio" className="mb-1.5 block text-[13px] font-medium">
            Servicio de interes
          </label>
          <select
            id="servicio"
            value={service}
            onChange={(event) => setService(event.target.value)}
            required
            className="w-full appearance-none rounded-xl border border-border bg-white px-5 py-3 text-sm text-muted outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
          >
            <option value="">Selecciona un servicio</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="mb-1.5 block text-[13px] font-medium">
            Tu mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Cuentame sobre tu lesion o lo que necesitas..."
            required
            className="w-full resize-none rounded-xl border border-border bg-white px-5 py-3 text-sm outline-none transition-all placeholder:text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/5"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] sm:w-auto sm:px-12 flex justify-center items-center gap-2"
        >
          Enviar por WhatsApp <FaWhatsapp className="size-5 text-green-500" />
        </button>
      </div>
    </form>
  );
}
