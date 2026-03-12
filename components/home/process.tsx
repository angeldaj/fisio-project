import { processSteps } from "@/data/home";

import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-surface py-28 lg:py-36">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Como funciona?"
          description="Un proceso claro y transparente, pensado para tu comodidad."
          centered
        />

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent md:block" />

          {processSteps.map((item) => (
            <div key={item.step} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-white shadow-sm">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-primary">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">{item.title}</h3>
              <p className="text-[13px] leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
