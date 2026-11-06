import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { caseStudies } from "@/data/case-studies";
import { eventSlug } from "@/lib/analytics";

interface Card {
  slug: string;
  href: string;
  repo?: string;
  badge: string;
  title: string;
  summary: string;
  tags: string[];
  cover: { src: string; alt: string };
}

// Strongest evidence first: Mesa Viva has unit, integration and E2E tests.
const ORDER = ["mesa-viva", "caudal", "ventas-inventario"];

const cards: Card[] = [
  ...[...caseStudies]
    .sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug))
    .map((c) => ({
      slug: c.slug,
      href: `/proyectos/${c.slug}`,
      repo: c.repo,
      badge: "Hecho con Claude Code",
      title: c.title,
      summary: c.summary,
      tags: c.tags,
      cover: c.cover,
    })),
  {
    slug: "cocina",
    href: "/proyectos/cocina",
    badge: "Prototipo de práctica · Country Club Ejecutivo",
    title: "Controles de cocina sin papel",
    summary:
      "Levanté con el chef y el personal cómo se llenaban los formatos en papel y construí un prototipo web de formularios, historial y verificación, probado con datos simulados.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Entra ID"],
    cover: {
      src: "/projects/cocina/historial.png",
      alt: "Historial de registros del prototipo con estados de verificación",
    },
  },
];

const AI_STEPS = [
  { title: "Yo decido", text: "Qué construir, las restricciones y cuándo algo está terminado." },
  { title: "El agente escribe", text: "El código y los tests, con su firma en cada commit." },
  { title: "Yo verifico", text: "Reviso el código, pruebo cada flujo y documento lo que falla." },
];

function ProjectCard({ card, flip }: { card: Card; flip: boolean }) {
  const caseEvent = `open_case_${eventSlug(card.slug)}` as const;
  return (
    <article className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center bg-plum border border-line rounded-3xl p-5 sm:p-8">
      <TrackedLink
        href={card.href}
        event={caseEvent}
        eventProps={{ from: "imagen" }}
        className={`group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-night hover:border-violet transition-colors ${
          flip ? "lg:order-2" : ""
        }`}
        aria-label={`Leer el caso: ${card.title}`}
      >
        <Image
          src={card.cover.src}
          alt={card.cover.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover object-left-top"
        />
      </TrackedLink>
      <div>
        <p
          className={`inline-flex text-sm font-semibold px-3 py-1 rounded-full ${
            card.repo ? "text-lilac bg-violet/15" : "text-green bg-green-wash"
          }`}
        >
          {card.badge}
        </p>
        <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
          {card.title}
        </h3>
        <p className="mt-4 text-fg-soft leading-relaxed">{card.summary}</p>
        <p className="mt-5 text-sm text-fg-soft">{card.tags.join(", ")}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <TrackedLink
            href={card.href}
            event={caseEvent}
            eventProps={{ from: "boton" }}
            className="rounded-full border border-line-strong px-5 py-2.5 font-semibold hover:border-lilac transition-colors"
          >
            Leer el caso
          </TrackedLink>
          {card.repo ? (
            <TrackedLink
              href={card.repo}
              event={`click_repo_${eventSlug(card.slug)}`}
              eventProps={{ from: "proyectos" }}
              className="inline-flex items-center gap-2 rounded-full bg-violet hover:bg-violet-dark px-5 py-2.5 font-semibold text-white transition-colors"
            >
              Ver el código
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </TrackedLink>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-fg-soft">
              <Lock className="w-4 h-4" aria-hidden="true" />
              Código privado del club
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>

        <div className="mt-8 rounded-3xl border border-line-strong p-6 sm:p-8">
          <h3 className="text-xl font-bold tracking-tight">Cómo trabajo con IA</h3>
          <p className="mt-2 max-w-[65ch] text-fg-soft leading-relaxed">
            Tres de estos proyectos los construí con Claude Code, un agente de programación. No lo
            escondo: cada caso y cada README dicen qué hice yo y qué hizo el agente.
          </p>
          <ol className="mt-6 grid sm:grid-cols-3 gap-4">
            {AI_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-plum border border-line p-4">
                <p className="text-sm font-semibold text-lilac">
                  {i + 1}. {step.title}
                </p>
                <p className="mt-1 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 space-y-6">
          {cards.map((card, i) => (
            <ProjectCard key={card.slug} card={card} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
