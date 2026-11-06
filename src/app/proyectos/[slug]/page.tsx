import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { EMAIL } from "@/data/links";
import { eventSlug } from "@/lib/analytics";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: `${study.title} | Nicolás Castañeda`, description: study.oneLiner };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-14 border-t border-line grid lg:grid-cols-[14rem_1fr] gap-6 lg:gap-16">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function CaseStudyPage(props: PageProps<"/proyectos/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const repoEvent = `click_repo_${eventSlug(study.slug)}` as const;
  const desktopShots = study.gallery.filter((s) => !s.mobile);
  const mobileShots = study.gallery.filter((s) => s.mobile);

  return (
    <main className="min-h-screen pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-fg-soft hover:text-fg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a proyectos
        </Link>

        <header className="mt-10 pb-14">
          <p className="inline-flex text-sm font-semibold text-lilac bg-violet/15 px-3 py-1 rounded-full">
            Hecho con Claude Code
          </p>
          <h1 className="mt-6 max-w-4xl font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(2.4rem,6vw,4.5rem)]">
            {study.title}
          </h1>
          <p className="mt-6 text-xl text-fg-soft max-w-[60ch] leading-relaxed">
            {study.oneLiner}
          </p>
          <p className="mt-4 text-fg-soft">{study.tags.join(", ")}</p>
          <TrackedLink
            href={study.repo}
            event={repoEvent}
            eventProps={{ from: "caso_arriba" }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet hover:bg-violet-dark px-6 py-3 font-semibold text-white transition-colors"
          >
            Ver el código en GitHub
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </TrackedLink>
        </header>

        {/* Main flow, recorded from the real app */}
        {study.videos.length > 0 && (
          <div className="flex flex-col md:flex-row gap-6 items-start pb-16">
            {study.videos.map((v) => (
              <figure key={v.src} className={v.mobile ? "w-full max-w-[260px]" : "flex-1 min-w-0"}>
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full rounded-2xl border border-line bg-plum"
                />
                <figcaption className="mt-3 text-sm text-fg-soft">{v.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <Block title="Cómo lo construí">
          <div className="space-y-4 max-w-[65ch] text-lg leading-relaxed">
            {study.role.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>

        <Block title="El problema">
          <div className="space-y-4 max-w-[65ch] text-lg leading-relaxed text-fg-soft">
            {study.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Block>

        <Block title="Arquitectura">
          <ul className="space-y-3 max-w-[65ch] leading-relaxed text-fg-soft">
            {study.architecture.notes.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                {n}
              </li>
            ))}
          </ul>
          <a
            href={study.architecture.src}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-2xl border border-line bg-white p-4"
          >
            <Image
              src={study.architecture.src}
              alt={`Diagrama de arquitectura de ${study.title}`}
              width={study.architecture.width}
              height={study.architecture.height}
              sizes="(max-width: 1024px) 100vw, 760px"
              className="w-full h-auto"
            />
          </a>
          <p className="mt-2 text-sm text-fg-soft">Toca el diagrama para verlo en tamaño completo.</p>
        </Block>

        <Block title="Decisiones técnicas">
          <div className="space-y-10">
            {study.decisions.map((d) => (
              <article key={d.title} className="max-w-[70ch]">
                <h3 className="text-xl font-bold tracking-tight">{d.title}</h3>
                <p className="mt-3 leading-relaxed">{d.what}</p>
                <dl className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-line p-4">
                    <dt className="text-sm font-semibold text-fg-soft">Alternativa descartada</dt>
                    <dd className="mt-1 leading-relaxed">{d.alternative}</dd>
                  </div>
                  <div className="rounded-2xl border border-line p-4">
                    <dt className="text-sm font-semibold text-fg-soft">Lo que cuesta</dt>
                    <dd className="mt-1 leading-relaxed">{d.tradeoff}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Block>

        <Block title="Resultados medidos">
          <dl className="grid sm:grid-cols-2 gap-4">
            {study.results.map((r) => (
              <div key={r.label} className="rounded-2xl bg-green-wash border border-green/25 p-5">
                <dt className="text-sm text-fg-soft">{r.label}</dt>
                <dd className="mt-1 text-lg font-bold text-green">{r.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-fg-soft">
            Medido en local con el build de producción, el 1 de noviembre de 2026.
          </p>
        </Block>

        <Block title="Qué haría distinto">
          <ul className="space-y-3 max-w-[65ch] leading-relaxed">
            {study.improve.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                {i}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Capturas">
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
            {desktopShots.map((shot) => (
              <figure key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width ?? 1440}
                  height={shot.height ?? 900}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="w-full h-auto rounded-2xl border border-line"
                />
                <figcaption className="mt-3 text-sm text-fg-soft">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            {mobileShots.map((shot) => (
              <figure key={shot.src} className="w-[200px]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={390}
                  height={844}
                  sizes="200px"
                  className="w-full h-auto rounded-2xl border border-line"
                />
                <figcaption className="mt-3 text-sm text-fg-soft">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Block>

        <div className="mt-6 bg-plum border border-line-strong rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight max-w-lg leading-tight">
            El código, los tests y el historial están en GitHub.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href={study.repo}
              event={repoEvent}
              eventProps={{ from: "caso_abajo" }}
              className="inline-flex items-center gap-2 font-semibold text-white bg-violet hover:bg-violet-dark px-6 py-3 rounded-full transition-colors"
            >
              Ver el código
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </TrackedLink>
            <TrackedLink
              href={`mailto:${EMAIL}`}
              event="click_email"
              eventProps={{ from: `caso_${eventSlug(study.slug)}` }}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full border border-line-strong hover:border-lilac transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Escríbeme
            </TrackedLink>
          </div>
        </div>
      </div>
    </main>
  );
}
