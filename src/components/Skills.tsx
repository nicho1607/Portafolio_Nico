import { Database, LayoutGrid, Workflow, BarChart3, type LucideIcon } from "lucide-react";
import {
  siTypescript,
  siJavascript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siPython,
  siNodedotjs,
  siGithub,
  siAmazonwebservices,
  siPostgresql,
  siPrisma,
  type SimpleIcon,
} from "simple-icons";

type SkillLevel = "Básico" | "Intermedio" | "Avanzado";

interface Skill {
  name: string;
  level: SkillLevel;
  /** Brand mark from simple-icons, or a generic Lucide icon when the brand isn't available. */
  icon: SimpleIcon | LucideIcon;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const levelSteps: Record<SkillLevel, number> = {
  Básico: 1,
  Intermedio: 2,
  Avanzado: 3,
};

const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes y frameworks",
    skills: [
      { name: "TypeScript", level: "Avanzado", icon: siTypescript },
      { name: "JavaScript", level: "Avanzado", icon: siJavascript },
      { name: "React", level: "Avanzado", icon: siReact },
      { name: "Next.js", level: "Avanzado", icon: siNextdotjs },
      { name: "Tailwind CSS", level: "Avanzado", icon: siTailwindcss },
      { name: "Python", level: "Intermedio", icon: siPython },
      { name: "Node.js", level: "Intermedio", icon: siNodedotjs },
    ],
  },
  {
    title: "Automatización y herramientas",
    skills: [
      { name: "Power Apps", level: "Avanzado", icon: LayoutGrid },
      { name: "Power Automate", level: "Avanzado", icon: Workflow },
      { name: "Git y GitHub", level: "Avanzado", icon: siGithub },
      { name: "Power BI", level: "Intermedio", icon: BarChart3 },
      { name: "AWS", level: "Básico", icon: siAmazonwebservices },
    ],
  },
  {
    title: "Bases de datos",
    skills: [
      { name: "PostgreSQL", level: "Intermedio", icon: siPostgresql },
      { name: "SQL Server", level: "Intermedio", icon: Database },
      { name: "Prisma ORM", level: "Intermedio", icon: siPrisma },
    ],
  },
];

// Brand colors too dark to read on the night background fall back to the text color.
function iconColor(hex: string) {
  const n = parseInt(hex, 16);
  const luminance = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return luminance < 0.35 ? "var(--color-fg)" : `#${hex}`;
}

function SkillIcon({ icon }: { icon: Skill["icon"] }) {
  if ("path" in icon) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill={iconColor(icon.hex)} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="w-4 h-4 text-lilac" aria-hidden="true" />;
}

function LevelMeter({ level }: { level: SkillLevel }) {
  const filled = levelSteps[level];
  return (
    <span className="flex items-center gap-3">
      <span className="text-sm text-fg-soft w-20 text-right">{level}</span>
      <span className="flex gap-1" aria-hidden="true">
        {[1, 2, 3].map((step) => (
          <span
            key={step}
            className={`h-2.5 w-5 rounded-[2px] ${
              step <= filled ? "bg-green" : "bg-line"
            }`}
          />
        ))}
      </span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[14rem_1fr] gap-8 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Habilidades</h2>
          <p className="mt-4 text-fg-soft leading-relaxed max-w-xs">
            Lo que uso a diario y qué tan a fondo lo domino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-bold text-lg pb-3 border-b-2 border-line-strong">
                {category.title}
              </h3>
              <ul>
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between py-3 border-b border-line"
                  >
                    <span className="flex items-center gap-3 font-medium">
                      <span className="grid place-items-center w-8 h-8 rounded-lg bg-plum border border-line">
                        <SkillIcon icon={skill.icon} />
                      </span>
                      {skill.name}
                    </span>
                    <LevelMeter level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
