import Link from "next/link";
import { ExternalLink, BarChart3, PawPrint, Server, ArrowRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  link?: string;
  github?: string;
  detailPage?: string;
}

const projects: Project[] = [
  {
    title: "Sistema Digital de Gestión Operativa para Cocina",
    description:
      "Transformación digital completa de los procesos operativos de cocina del Country Club Ejecutivo. Sistema web full-stack para la recolección, auditoría y trazabilidad de registros sanitarios y operativos.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "API Routes"],
    icon: BarChart3,
    detailPage: "/proyectos/cocina",
  },
  {
    title: "Sistema Web de Gestión para Guardería Canina",
    description:
      "Aplicación web completa para la automatización de reservas, control de servicios y flujo de pagos integrados. Sistema de gestión integral para operaciones diarias.",
    tags: ["Node.js", "JavaScript", "SQL", "HTML/CSS", "Git"],
    icon: PawPrint,
  },
  {
    title: "Arquitectura de Servidores Web Seguros",
    description:
      "Diseño de red distribuida con VLANs, comunicación entre 3 servidores (Web, App, DB), Router-on-a-stick y Active Directory en Windows Server con políticas de seguridad.",
    tags: ["Redes TCP/IP", "VLANs", "Windows Server", "Node.js", "Firewall"],
    icon: Server,
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary-light tracking-wide uppercase">
            Proyectos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Proyectos{" "}
            <span className="gradient-text">destacados</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Una selección de proyectos donde aplico mis conocimientos en desarrollo,
            automatización y arquitectura de sistemas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group glass rounded-xl p-6 flex flex-col hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-2 glow-purple-hover"
              >
                {/* Icon & Links */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-foreground transition-colors"
                        aria-label={`Ver código de ${project.title}`}
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-foreground transition-colors"
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed flex-grow mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-primary-light bg-primary/10 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Detail Link */}
                {project.detailPage && (
                  <Link
                    href={project.detailPage}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary-light hover:text-primary transition-colors group/link"
                  >
                    Ver caso completo
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
