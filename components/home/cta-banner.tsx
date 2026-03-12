export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium text-white md:text-4xl">
          Listo para empezar tu recuperacion?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-white/60">
          Da el primer paso hacia tu bienestar. Consulta sin compromiso.
        </p>
        <a
          href="#contacto"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-2xl transition-all hover:bg-primary-50 hover:shadow-black/20"
        >
          Contactar ahora
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
