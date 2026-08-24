import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Practicante de Transformación e Innovación",
    company: "Country Club Ejecutivo",
    location: "Medellín, Colombia",
    period: "Feb 2026 - Ago 2026",
    description: [
      "Diseñé y desarrollé una plataforma web para la digitalización de 40 procesos operativos de cocina e inventarios, utilizando Next.js, TypeScript, Prisma y PostgreSQL, lo que permitió automatizar la gestión de controles relacionados con inventarios, temperaturas y recambio de aceite, eliminando el uso de formularios físicos y reduciendo procesos manuales.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Power BI"],
  },
  {
    role: "Tutor de Programación Python",
    company: "Kodland",
    location: "Remoto",
    period: "Jun 2025 - Feb 2026",
    description: [
      "Tutoría personalizada a 30+ estudiantes en fundamentos de programación con Python.",
      "Diseño de planes de estudio adaptativos según el nivel y ritmo de cada alumno.",
      "Evaluaciones de progreso con 95% de satisfacción en encuestas de estudiantes.",
      "Mentoría en lógica de programación, estructuras de datos y proyectos prácticos.",
    ],
    tags: ["Python", "Educación", "Mentoría", "Lógica de Programación"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary-light tracking-wide uppercase">
            Experiencia
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Mi trayectoria{" "}
            <span className="gradient-text">profesional</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Experiencia aplicando tecnología para resolver problemas reales en
            entornos corporativos y educativos.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 mt-6 glow-purple" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-8 md:ml-0 md:w-1/2 glass rounded-xl p-6 hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-1 glow-purple-hover">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                    <Briefcase className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-primary-light font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-primary-light bg-primary/10 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
