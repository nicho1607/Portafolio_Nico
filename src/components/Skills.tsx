import { Code2, Database, Cloud } from "lucide-react";

type SkillLevel = "Avanzado" | "Intermedio" | "Medio" | "Básico";

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const levelColors: Record<SkillLevel, string> = {
  Avanzado: "bg-primary text-white",
  Intermedio: "bg-accent text-white",
  Medio: "bg-primary-light/60 text-white",
  Básico: "bg-muted/40 text-foreground",
};

const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes y Frameworks",
    icon: Code2,
    skills: [
      { name: "TypeScript", level: "Avanzado" },
      { name: "JavaScript", level: "Avanzado" },
      { name: "Python", level: "Intermedio" },
      { name: "Next.js", level: "Avanzado" },
      { name: "Node.js", level: "Intermedio" },
      { name: "React", level: "Avanzado" },
      { name: "Tailwind CSS", level: "Avanzado" },
    ],
  },
  {
    title: "Bases de Datos & ORM",
    icon: Database,
    skills: [
      { name: "Prisma", level: "Intermedio" },
      { name: "PostgreSQL", level: "Intermedio" },
      { name: "SQL Server", level: "Intermedio" },
    ],
  },
  {
    title: "Herramientas & Cloud",
    icon: Cloud,
    skills: [
      { name: "Git & GitHub", level: "Avanzado" },
      { name: "Power Apps", level: "Avanzado" },
      { name: "Power Automate", level: "Avanzado" },
      { name: "Power BI", level: "Intermedio" },
      { name: "AWS", level: "Básico" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary-light tracking-wide uppercase">
            Habilidades
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Mi stack{" "}
            <span className="gradient-text">tecnológico</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Herramientas y tecnologías con las que trabajo día a día para crear
            soluciones eficientes y escalables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass rounded-xl p-6 hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-1 glow-purple-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary-light" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
