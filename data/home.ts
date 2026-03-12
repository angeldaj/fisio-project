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

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ServiceOption = {
  value: string;
  label: string;
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
  { label: "Técnico Superior en Fisioterapia", place: "UTD Francisco Tamayo" },
  { label: "Licenciada en Fisioterapia", place: "UTD Francisco Tamayo" },
  { label: "Fisioterapia Deportiva", place: "Especializacion avanzada" },
];

export const contactItems: ContactItem[] = [
  { label: "Telefono", value: "+58 414 886 6547", icon: "phone" },
  { label: "Email", value: "mariaahv23@gmail.com", icon: "email" },
  {
    label: "Direccion",
    value: "C.C Alta Vista 1, Piso 3, Local 6 - Gimnasio Fitness Evolution",
    icon: "location",
  },
];

export const schedule: ScheduleItem[] = [
  { day: "Lunes - Viernes", hours: "08:00 AM - 06:00 PM", open: true },
  { day: "Sabados", hours: "08:00 AM - 01:00 PM", open: true },
  { day: "Domingos", hours: "Cerrado", open: false },
];

export const aboutGallery: GalleryImage[] = [
  { src: "/gallery/g1.jpeg", alt: "Maria Hernandez en consulta" },
  { src: "/gallery/g2.jpeg", alt: "Sesion de fisioterapia personalizada" },
  { src: "/gallery/g3.jpeg", alt: "Trabajo clinico en rehabilitacion" },
  { src: "/gallery/g4.jpeg", alt: "Atencion fisioterapeutica en camilla" },
  { src: "/gallery/g5.jpeg", alt: "Tratamiento y evaluacion funcional" },
];

export const whatsappNumber = "584148866547";

export const serviceOptions: ServiceOption[] = [
  { value: "deportiva", label: "Fisioterapia Deportiva" },
  { value: "rehabilitacion", label: "Rehabilitacion" },
  { value: "dolor-cronico", label: "Dolor Cronico" },
  { value: "terapia-manual", label: "Terapia Manual" },
  { value: "ejercicio", label: "Ejercicio Terapeutico" },
  { value: "valoracion", label: "Valoracion Funcional" },
];
