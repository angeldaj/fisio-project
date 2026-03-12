export function ContactForm() {
  return (
    <form className="lg:col-span-3">
      <div className="grid gap-5">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-[13px] font-medium">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-border bg-white px-5 py-3 text-sm outline-none transition-all placeholder:text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/5"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              className="w-full rounded-xl border border-border bg-white px-5 py-3 text-sm outline-none transition-all placeholder:text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/5"
            />
          </div>
          <div>
            <label htmlFor="telefono" className="mb-1.5 block text-[13px] font-medium">
              Telefono
            </label>
            <input
              type="tel"
              id="telefono"
              placeholder="+34 600 000 000"
              className="w-full rounded-xl border border-border bg-white px-5 py-3 text-sm outline-none transition-all placeholder:text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/5"
            />
          </div>
        </div>
        <div>
          <label htmlFor="servicio" className="mb-1.5 block text-[13px] font-medium">
            Servicio de interes
          </label>
          <select
            id="servicio"
            className="w-full appearance-none rounded-xl border border-border bg-white px-5 py-3 text-sm text-muted outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
          >
            <option value="">Selecciona un servicio</option>
            <option value="deportiva">Fisioterapia Deportiva</option>
            <option value="rehabilitacion">Rehabilitacion</option>
            <option value="dolor-cronico">Dolor Cronico</option>
            <option value="terapia-manual">Terapia Manual</option>
            <option value="ejercicio">Ejercicio Terapeutico</option>
            <option value="valoracion">Valoracion Funcional</option>
          </select>
        </div>
        <div>
          <label htmlFor="mensaje" className="mb-1.5 block text-[13px] font-medium">
            Tu mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="Cuentame sobre tu lesion o lo que necesitas..."
            className="w-full resize-none rounded-xl border border-border bg-white px-5 py-3 text-sm outline-none transition-all placeholder:text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/5"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] sm:w-auto sm:px-12"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}
