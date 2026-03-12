import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-warm">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-white">MH</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Maria Hernandez</p>
              <p className="text-[11px] text-muted">Fisioterapia Deportiva y Rehabilitacion</p>
            </div>
          </div>
          <div className="flex items-center gap-6 justify-center">
            <Link href={"https://www.tiktok.com/@ft.mariahernandez"}className="flex flex-col justify-center gap-1 items-center">
              <FaTiktok className="size-8 ease-in transition-all duration-200" />
              <span className="text-xs text-center">TikTok</span>
            </Link>
            <Link href={"https://www.instagram.com/ft.mariahernandez/"} className="flex flex-col justify-center gap-1 items-center">
              <FaInstagram className="size-8 hover:text-pink-500 ease-in transition-all duration-200" />
              <span className="text-xs text-center">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-[12px] text-muted">
          Copyright 2026 Maria Hernandez Fisioterapia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
