export type NavItem = {
  href: string;
  label: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "bolt" | "heart" | "briefcase" | "hand" | "chart" | "clipboard";
  featured?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type Credential = {
  label: string;
  place: string;
};

export type ContactItem = {
  label: string;
  value: string;
  icon: "phone" | "email" | "location";
};

export type ScheduleItem = {
  day: string;
  hours: string;
  open: boolean;
};

export const navItems: NavItem[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mi" },
  { href: "#contacto", label: "Contacto" },
];

export const heroStats: HeroStat[] = [
  { value: "+2", label: "Anos de experiencia" },
  { value: "100+", label: "Pacientes tratados" },
  { value: "98%", label: "Satisfaccion" },
];

export const services: Service[] = [
  {
    title: "Fisioterapia Deportiva",
    description:
      "Prevencion, tratamiento y recuperacion de lesiones deportivas. Trabajo con atletas de todos los niveles para optimizar rendimiento.",
    icon: "bolt",
    featured: true,
  },
  {
    title: "Rehabilitacion",
    description:
      "Programas de rehabilitacion post-quirurgica y post-lesion con un plan adaptado a tu evolucion y objetivos personales.",
    icon: "heart",
    featured: true,
  },
  {
    title: "Dolor Cronico",
    description:
      "Abordaje integral mediante terapia manual, ejercicio terapeutico y educacion en neurociencia del dolor.",
    icon: "briefcase",
  },
  {
    title: "Terapia Manual",
    description:
      "Tecnicas especializadas para aliviar tensiones, mejorar movilidad articular y restaurar el equilibrio muscular.",
    icon: "hand",
  },
  {
    title: "Ejercicio Terapeutico",
    description:
      "Programas personalizados para fortalecer, prevenir recaidas y mejorar tu calidad de vida a largo plazo.",
    icon: "chart",
  },
  {
    title: "Valoracion Funcional",
    description:
      "Evaluacion completa de tu estado fisico para identificar disfunciones y disenar el plan de tratamiento optimo.",
    icon: "clipboard",
  },
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Contacta", desc: "Escribeme o llamame para contarme tu caso" },
  { step: "02", title: "Valoracion", desc: "Evaluacion completa de tu estado y necesidades" },
  { step: "03", title: "Plan", desc: "Diseno de un tratamiento personalizado" },
  { step: "04", title: "Recuperacion", desc: "Seguimiento continuo hasta tu alta" },
];

export const credentials: Credential[] = [
  { label: "Grado en Fisioterapia", place: "Universidad Complutense" },
  { label: "Master Terapia Manual", place: "Formacion continua" },
  { label: "Fisioterapia Deportiva", place: "Especializacion avanzada" },
  { label: "Colegiada n. XXXX", place: "CPFCM Madrid" },
];

export const contactItems: ContactItem[] = [
  { label: "Telefono", value: "+1234 567 890", icon: "phone" },
  { label: "Email", value: "maria@fisiohernandez.com", icon: "email" },
  {
    label: "Direccion",
    value: "Urb. Sierra Parima - Ciudad Guayana, Bolivar",
    icon: "location",
  },
];

export const schedule: ScheduleItem[] = [
  { day: "Lunes - Viernes", hours: "09:00 - 20:00", open: true },
  { day: "Sabados", hours: "09:00 - 14:00", open: true },
  { day: "Domingos", hours: "Cerrado", open: false },
];
