import { contactItems, schedule, type ContactItem } from "@/data/home";

function ContactIcon({ icon }: Pick<ContactItem, "icon">) {
  switch (icon) {
    case "phone":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      );
    case "email":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      );
    case "location":
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      );
  }
}

export function ContactInfo() {
  return (
    <div className="space-y-8 lg:col-span-2">
      <div className="rounded-2xl border border-border bg-surface/50 p-6">
        <h3 className="mb-5 text-sm font-bold uppercase tracking-wide">Datos de contacto</h3>
        <div className="space-y-4">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
                <ContactIcon icon={item.icon} />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">{item.label}</p>
                <p className="mt-0.5 text-[13px] font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface/50 p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Horario</h3>
        <div className="space-y-2">
          {schedule.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px]"
            >
              <span className="text-muted">{item.day}</span>
              <span className={`font-medium ${item.open ? "text-foreground" : "text-muted"}`}>
                {item.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
