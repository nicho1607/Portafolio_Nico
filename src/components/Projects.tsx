import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface Featured {
  href: string;
  badge: string;
  practice: boolean;
  title: string;
  summary: string;
  tags: string[];
  cover: { src: string; alt: string };
}

const featured: Featured[] = [
  {
    href: "/proyectos/cocina",
    badge: "Caso de estudio, Country Club Ejecutivo",
    practice: false,
    title: "Sistema digital de gestión operativa para cocina",
    summary:
      "Reemplacé las planillas en papel de la cocina por una aplicación web: el personal diligencia los controles, los supervisores los verifican y cada registro queda trazable en historial y reportes.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    cover: {
      src: "/projects/cocina/historial.png",
      alt: "Historial de registros del sistema de cocina con estados de verificación",
    },
  },
  ...caseStudies.map((c) => ({
    href: `/proyectos/${c.slug}`,
    badge: "Práctica con Claude Code",
    practice: true,
    title: c.title,
    summary: c.summary,
    tags: c.tags,
    cover: c.cover,
  })),
];

const otherProjects: Project[] = [
  {
    title: "Gestión para guardería canina",
    description:
      "Aplicación web para reservas, control de servicios y pagos de una guardería canina, pensada para la operación del día a día.",
    tags: ["Node.js", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Arquitectura de servidores web seguros",
    description:
      "Red distribuida con VLANs y tres servidores (web, aplicación y base de datos), router-on-a-stick y Active Directory en Windows Server con políticas de seguridad.",
    tags: ["Redes TCP/IP", "VLANs", "Windows Server", "Firewall"],
  },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <p className="text-sm text-fg-soft">
      {tags.join(", ")}
    </p>
  );
}

function FeaturedCard({ project, flip }: { project: Featured; flip: boolean }) {
  return (
    <Link
      href={project.href}
      className="group grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center bg-plum border border-line rounded-3xl p-5 sm:p-8 hover:border-violet transition-colors"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-night ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover object-left-top"
        />
      </div>
      <div>
        <p
          className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full ${
            project.practice ? "text-lilac bg-violet/15" : "text-green bg-green-wash"
          }`}
        >
          {project.badge}
        </p>
        <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
          {project.title}
        </h3>
        <p className="mt-4 text-fg-soft leading-relaxed">{project.summary}</p>
        <div className="mt-5">
          <Tags tags={project.tags} />
        </div>
        <p className="mt-6 font-semibold text-lilac underline decoration-2 underline-offset-[6px] decoration-transparent group-hover:decoration-lilac transition-colors">
          Leer el caso completo
        </p>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>

        <div className="mt-10 space-y-6">
          {featured.map((project, i) => (
            <FeaturedCard key={project.href} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="border-t-2 border-line-strong pt-5"
            >
              <h3 className="text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-fg-soft leading-relaxed max-w-[60ch]">
                {project.description}
              </p>
              <div className="mt-4">
                <Tags tags={project.tags} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
