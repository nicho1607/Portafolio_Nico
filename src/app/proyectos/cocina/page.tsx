import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { EMAIL, FEATURED_REPO } from "@/data/links";

export const metadata: Metadata = {
  title: "Controles de cocina sin papel (prototipo) | Nicolás Castañeda",
  description:
    "Prototipo de práctica en el Country Club Ejecutivo: formularios de control de cocina definidos por datos, historial y verificación, con Next.js, Prisma y PostgreSQL.",
};

const screenshots = [
  {
    src: "/projects/cocina/home.png",
    alt: "Portal de inicio con los módulos de Formularios, Historial y Reportes",
    caption: "Inicio con los tres módulos.",
  },
  {
    src: "/projects/cocina/formularios.png",
    alt: "Catálogo de formularios organizados por área de cocina",
    caption: "Catálogo de formularios por área.",
  },
  {
    src: "/projects/cocina/historial.png",
    alt: "Historial de registros con el botón Verificar",
    caption: "Historial con registros de prueba sin verificar.",
  },
  {
    src: "/projects/cocina/reportes.png",
    alt: "Pantalla de reportes con filtros por estado y fechas",
    caption: "Reportes filtrables por estado y fechas.",
  },
];

const decisions = [
  {
    title: "Formularios definidos por datos",
    what: "Cada formulario guarda sus campos como JSON (texto, número, sí/no) y un solo componente los dibuja. Digitalizar un formato en papel nuevo es agregar un registro, no escribir una pantalla.",
    alternative: "Una pantalla por formulario: más control sobre cada uno, pero decenas de componentes casi iguales.",
    tradeoff: "La validación es genérica por tipo de campo; no hay reglas específicas por formulario.",
  },
  {
    title: "Todas las respuestas en una tabla, en jsonb",
    what: "Cada registro guarda formulario, persona, fecha, estado y las respuestas en una columna jsonb, así formularios con campos distintos comparten la misma tabla.",
    alternative: "Una tabla por formulario: tipado fuerte por columna, pero una migración por cada formato nuevo.",
    tradeoff: "Un reporte sobre un campo concreto necesita consultas sobre JSON en vez de columnas normales.",
  },
  {
    title: "Partir de la plantilla del club",
    what: "Usé la plantilla interna, que ya resolvía el inicio de sesión con las cuentas Microsoft del club (Entra ID), los timeouts de sesión y la política de seguridad de contenido.",
    alternative: "Hacer mi propio login: más trabajo y otro sistema de cuentas para el personal.",
    tradeoff: "Fuera del club no se puede iniciar sesión sin un registro de aplicación en Entra ID.",
  },
];

const improve = [
  "Hacer commit de cada avance. La versión final, con verificación y reportes, se desarrolló sin commits y se perdió al borrar la carpeta; en el repositorio solo quedó la versión de julio.",
  "Tomar el usuario de la sesión. En el prototipo todos los registros quedaban como “Usuario registrado”, como se ve en el historial.",
  "Escribir tests del formulario dinámico y del flujo de verificación.",
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-14 border-t border-line grid lg:grid-cols-[14rem_1fr] gap-6 lg:gap-16">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function ProyectoCocinaPage() {
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
          <p className="inline-flex text-sm font-semibold text-green bg-green-wash px-3 py-1 rounded-full">
            Prototipo de práctica · Country Club Ejecutivo, 2026
          </p>
          <h1 className="mt-6 max-w-4xl font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(2.4rem,6vw,4.5rem)]">
            Controles de cocina sin papel
          </h1>
          <p className="mt-6 text-xl text-fg-soft max-w-[60ch] leading-relaxed">
            Un prototipo web para que el personal de cocina diligencie sus controles en el sistema
            en vez de en papel, y un supervisor los verifique.
          </p>
          <div className="mt-8 max-w-[65ch] rounded-2xl border border-line-strong bg-plum p-5 leading-relaxed">
            <p className="font-semibold">Qué es y qué no es</p>
            <p className="mt-2 text-fg-soft">
              Es un prototipo que construí en mi práctica y probé con datos simulados; no llegó a
              usarse en el día a día. El código es del club y no es público, así que aquí muestro
              las pantallas, las decisiones y lo que aprendí.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-10 pb-16">
          {screenshots.map((shot) => (
            <figure key={shot.src}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-plum">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-left-top"
                />
              </div>
              <figcaption className="mt-3 text-sm text-fg-soft">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>

        <Block title="El problema">
          <p className="text-lg leading-relaxed max-w-[65ch]">
            Las listas de chequeo, la recepción de mercancía, los controles de temperatura y de
            limpieza se llenaban a mano en papel. Consultar un registro anterior o saber qué faltaba
            por revisar dependía de encontrar la hoja.
          </p>
        </Block>

        <Block title="Cómo lo construí">
          <div className="space-y-4 max-w-[65ch] text-lg leading-relaxed">
            <p>
              Entrevisté al Chef, al Sub-Chef y al Analista de Operaciones para entender cómo se
              diligenciaba cada formato en los turnos, y revisé con Desarrollo Organizacional los
              lineamientos que la versión digital debía cumplir.
            </p>
            <p>
              Partí de la plantilla interna del club, que ya traía el inicio de sesión con Microsoft,
              los timeouts de sesión y la política de seguridad de contenido; esa parte no la
              escribí yo. Sobre ella construí el catálogo de formularios, el modelo de datos, el
              formulario dinámico, el historial y el flujo de verificación. Parte del código lo
              escribí yo y parte lo generé con DeepSeek y con Kiro, un editor con agente de IA.
            </p>
          </div>
          <p className="mt-8 text-fg-soft">
            <span className="text-fg font-semibold">Stack:</span> Next.js, TypeScript, Prisma,
            PostgreSQL, Auth.js con Microsoft Entra ID, Tailwind CSS.
          </p>
        </Block>

        <Block title="Decisiones técnicas">
          <div className="space-y-10">
            {decisions.map((d) => (
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

        <Block title="Qué haría distinto">
          <ul className="space-y-3 max-w-[65ch] leading-relaxed">
            {improve.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-soft" />
                {i}
              </li>
            ))}
          </ul>
        </Block>

        <div className="mt-6 bg-plum border border-line-strong rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight max-w-lg leading-tight">
            Este código es privado. El de Mesa Viva está abierto, con sus tests.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrackedLink
              href={FEATURED_REPO.url}
              event="click_repo_mesa_viva"
              eventProps={{ from: "caso_cocina" }}
              className="inline-flex items-center gap-2 font-semibold text-white bg-violet hover:bg-violet-dark px-6 py-3 rounded-full transition-colors"
            >
              Ver Mesa Viva
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </TrackedLink>
            <TrackedLink
              href={`mailto:${EMAIL}`}
              event="click_email"
              eventProps={{ from: "caso_cocina" }}
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
