import { heroStats } from "@/data/home";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/50" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-12 py-32 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-white/80">Aceptando nuevos pacientes</span>
            </div>
            <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.08] tracking-tight text-white">
              Recupera tu
              <br />
              <span className="italic text-primary-50">movimiento</span>
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 max-w-md text-base leading-relaxed text-white/60">
              Fisioterapia deportiva y rehabilitacion con un enfoque moderno, personalizado y basado en la ultima evidencia cientifica.
            </p>
            <div className="animate-fade-in-up delay-300 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-2xl shadow-black/20 transition-all hover:bg-primary-50 hover:shadow-black/30"
              >
                Pide tu cita
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Conoce mis servicios
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="animate-fade-in-up delay-400 mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="animate-float relative">
              <div className="h-80 w-80 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
              <div className="absolute left-10 top-10 h-60 w-60 rounded-full border border-white/5 bg-white/[0.03]" />
              <div className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                <svg className="h-10 w-10 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-1.5 w-1 animate-[bounce_2s_ease-in-out_infinite] rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
