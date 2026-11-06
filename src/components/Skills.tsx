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

interface Skill {
  name: string;
  /** Brand mark from simple-icons, or a generic Lucide icon when the brand isn't available. */
  icon: SimpleIcon | LucideIcon;
}

interface SkillGroup {
  title: string;
  note: string;
  skills: Skill[];
}

// No self-rated levels: the repos linked above are the evidence.
const groups: SkillGroup[] = [
  {
    title: "Stack principal",
    note: "Lo que usan los proyectos de este sitio.",
    skills: [
      { name: "TypeScript", icon: siTypescript },
      { name: "Next.js", icon: siNextdotjs },
      { name: "React", icon: siReact },
      { name: "Node.js", icon: siNodedotjs },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Prisma ORM", icon: siPrisma },
      { name: "Tailwind CSS", icon: siTailwindcss },
    ],
  },
  {
    title: "También he trabajado con",
    note: "En la práctica, en la universidad o como tutor.",
    skills: [
      { name: "JavaScript", icon: siJavascript },
      { name: "Python", icon: siPython },
      { name: "SQL Server", icon: Database },
      { name: "Git y GitHub", icon: siGithub },
      { name: "Power Apps", icon: LayoutGrid },
      { name: "Power Automate", icon: Workflow },
      { name: "Power BI", icon: BarChart3 },
      { name: "AWS", icon: siAmazonwebservices },
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

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[14rem_1fr] gap-8 lg:gap-16">
        <h2 className="text-3xl font-bold tracking-tight">Tecnologías</h2>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-lg">{group.title}</h3>
              <p className="mt-1 pb-3 border-b-2 border-line-strong text-sm text-fg-soft">
                {group.note}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg bg-plum border border-line px-3 py-2 text-sm font-medium"
                  >
                    <SkillIcon icon={skill.icon} />
                    {skill.name}
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
