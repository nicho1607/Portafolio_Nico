import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon } from "@/components/icons";
import { FEATURED_REPO, GITHUB_PROFILE } from "@/data/links";
import { eventSlug } from "@/lib/analytics";

const stack = ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma"];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-sm text-fg-soft">
            <span className="font-semibold text-fg">Nicolás Castañeda</span> · Medellín, Colombia
          </p>
          <h1 className="mt-4 max-w-3xl font-extrabold tracking-[-0.035em] leading-[1.02] text-[clamp(2.25rem,5.6vw,4.25rem)]">
            Desarrollador Full Stack con TypeScript, Next.js y PostgreSQL
          </h1>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-fg-soft">
            Construyo aplicaciones web con Next.js, Prisma y PostgreSQL. Trabajo con agentes de
            IA, y cada proyecto dice qué hice yo y qué hizo el agente. El código está abierto en
            GitHub.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TrackedLink
              href={FEATURED_REPO.url}
              event={`click_repo_${eventSlug(FEATURED_REPO.slug)}`}
              eventProps={{ from: "hero" }}
              className="inline-flex items-center gap-2 rounded-full bg-violet hover:bg-violet-dark px-6 py-3 font-semibold text-white transition-colors"
            >
              Ver el código
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </TrackedLink>
            <a
              href="#proyectos"
              className="rounded-full border border-line-strong px-6 py-3 font-semibold text-fg hover:border-lilac transition-colors"
            >
              Ver proyectos
            </a>
            <TrackedLink
              href={GITHUB_PROFILE}
              event="click_github_hero"
              className="inline-flex items-center gap-2 px-3 py-3 font-semibold text-fg-soft hover:text-fg transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
            </TrackedLink>
          </div>
          <p className="mt-3 text-sm text-fg-soft">
            Empieza por Mesa Viva: pedidos en tiempo real, 201 tests y 5 pruebas E2E.
          </p>

          <p className="mt-10 text-sm text-fg-soft">
            <span className="font-semibold text-fg">Stack:</span> {stack.join(" · ")}
          </p>
        </div>

        <div className="relative mx-auto w-[200px] sm:w-[260px]">
          <div
            className="arch-disc absolute left-1/2 top-[30%] -translate-x-1/2 w-[300px] sm:w-[380px] aspect-square rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative aspect-[3/4] rounded-t-full overflow-hidden bg-white ring-4 ring-night">
            <Image
              src="/profile.jpg"
              alt="Retrato de Nicolás Castañeda Betancur"
              fill
              sizes="260px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
