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
    location: "Medellín",
    period: "Feb 2026 – Ago 2026",
    description: [
      "Diseñé y desarrollé una plataforma web para digitalizar 40 procesos operativos de cocina e inventarios con Next.js, TypeScript, Prisma y PostgreSQL.",
      "Automaticé los controles de inventarios, temperaturas y recambio de aceite, eliminando los formularios físicos y reduciendo el trabajo manual.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Power BI"],
  },
  {
    role: "Tutor de programación en Python",
    company: "Kodland",
    location: "Remoto",
    period: "Jun 2025 – Feb 2026",
    description: [
      "Acompañé a más de 30 estudiantes en los fundamentos de programación con Python.",
      "Diseñé planes de estudio según el nivel y el ritmo de cada estudiante.",
      "Obtuve un 95% de satisfacción en las encuestas de los estudiantes.",
      "Guié proyectos prácticos de lógica de programación y estructuras de datos.",
    ],
    tags: ["Python", "Educación", "Mentoría"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[14rem_1fr] gap-8 lg:gap-16">
        <h2 className="text-3xl font-bold tracking-tight">Experiencia</h2>

        <ol className="relative border-l-2 border-violet/70 ml-1.5">
          {experiences.map((exp) => (
            <li key={exp.company} className="relative pl-8 sm:pl-10 pb-14 last:pb-0">
              <span
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-night border-2 border-green"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-lilac">{exp.period}</p>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                {exp.role}
              </h3>
              <p className="mt-1 text-fg-soft">
                {exp.company}, {exp.location}
              </p>
              <ul className="mt-5 space-y-2.5 max-w-[65ch]">
                {exp.description.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-fg-soft">{exp.tags.join(", ")}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
