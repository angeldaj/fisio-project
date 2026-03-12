import { navItems } from "@/data/home";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-white/90 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">MH</span>
          </div>
          <div className="leading-tight">
            <span className="text-sm font-bold tracking-tight text-foreground">Maria Hernandez</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
              Fisioterapia
            </span>
          </div>
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-primary px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/25"
          >
            Reservar cita
          </a>
        </div>
      </div>
    </nav>
  );
}
