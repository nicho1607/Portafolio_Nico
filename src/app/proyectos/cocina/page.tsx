import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const screenshots = [
  {
    src: "/projects/cocina/home.png",
    alt: "Portal principal con los módulos de Formularios, Historial y Reportes",
    caption: "Portal de inicio con acceso a los tres módulos.",
  },
  {
    src: "/projects/cocina/formularios.png",
    alt: "Catálogo de formularios organizados por área operativa",
    caption:
      "Catálogo de formularios por área: Cocina Principal, Panadería, Steward y Cafeterías.",
  },
  {
    src: "/projects/cocina/historial.png",
    alt: "Historial de registros con estados de verificación",
    caption: "Historial con fechas, estados y acciones de verificación.",
  },
  {
    src: "/projects/cocina/reportes.png",
    alt: "Módulo de reportes con filtros",
    caption: "Reportes filtrables por estado, fecha y categoría, con acceso controlado.",
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Prisma ORM",
  "PostgreSQL",
  "Tailwind CSS",
  "Next.js API Routes",
  "Autenticación por roles",
];

const stakeholders = [
  {
    title: "Personal operativo",
    description:
      "Entrevisté al Chef, al Sub-Chef y al Analista de Operaciones para entender el flujo real de los turnos y cómo diligenciaban cada formulario en la cocina.",
  },
  {
    title: "Desarrollo Organizacional",
    description:
      "Levanté los lineamientos normativos y la estructura formal para que la versión digital cumpliera los estándares y políticas de la organización.",
  },
];

const modules = [
  {
    title: "Catálogo de formularios",
    description: "Plantillas organizadas por área operativa y tipo de control.",
  },
  {
    title: "Historial de registros",
    description: "Cada registro con su estado: sin verificar o verificado.",
  },
  {
    title: "Reportes",
    description: "Filtros por fecha, estado y categoría para usuarios autenticados.",
  },
];

const results = [
  {
    title: "Cero papel",
    description: "Los controles operativos de cocina se diligencian solo en el sistema.",
  },
  {
    title: "Trazabilidad",
    description:
      "Los supervisores ven cada registro al instante y lo marcan como verificado.",
  },
  {
    title: "Menos tiempo administrativo",
    description:
      "Ya no hay que llenar formularios a mano ni consolidar reportes manualmente.",
  },
];

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
            Country Club Ejecutivo, 2026
          </p>
          <h1 className="mt-6 max-w-4xl font-extrabold tracking-[-0.035em] leading-[0.98] text-[clamp(2.4rem,6vw,4.5rem)]">
            Sistema digital de gestión y control operativo para cocina
          </h1>
          <p className="mt-6 text-xl text-fg-soft max-w-[60ch] leading-relaxed">
            Un sistema web full stack que reemplazó las planillas en papel de la
            cocina para registrar, auditar y rastrear los controles sanitarios
            y operativos.
          </p>
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
              <figcaption className="mt-3 text-sm text-fg-soft">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <Block title="El problema">
          <p className="text-lg leading-relaxed max-w-[65ch]">
            Toda la gestión operativa —listas de chequeo, recepción de
            mercancía, controles de temperatura, limpieza y seguridad en el
            trabajo— se hacía a mano en papel. Se perdía información, no había
            visibilidad en tiempo real para decidir y el personal operario y de
            supervisión cargaba con mucho trabajo administrativo.
          </p>
        </Block>

        <Block title="Mi rol">
          <p className="text-lg leading-relaxed max-w-[65ch] text-fg-soft">
            Lideré la investigación y el levantamiento de requisitos, trabajando
            directamente con las personas involucradas:
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            {stakeholders.map((item) => (
              <div key={item.title} className="border-t-2 border-line-strong pt-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="mt-2 text-fg-soft leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="La solución">
          <p className="text-lg leading-relaxed max-w-[65ch] text-fg-soft">
            Diseñé y desarrollé una aplicación web responsiva con control de
            acceso por roles.
          </p>
          <dl className="mt-8 space-y-6 max-w-[65ch]">
            <div>
              <dt className="font-bold">Frontend</dt>
              <dd className="mt-1 text-fg-soft leading-relaxed">
                Next.js y TypeScript, con una interfaz pensada para el ritmo
                rápido de la cocina y plantillas por área: Cocina Principal,
                Panadería, Steward y Cafeterías.
              </dd>
            </div>
            <div>
              <dt className="font-bold">Backend y base de datos</dt>
              <dd className="mt-1 text-fg-soft leading-relaxed">
                Next.js API Routes y Prisma ORM sobre PostgreSQL, con tipado
                estricto, validación en el servidor y relaciones eficientes.
              </dd>
            </div>
          </dl>

          <h3 className="mt-12 font-bold text-lg pb-3 border-b-2 border-line-strong">
            Módulos
          </h3>
          <ul>
            {modules.map((m) => (
              <li
                key={m.title}
                className="py-4 border-b border-line grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-6"
              >
                <span className="font-semibold">{m.title}</span>
                <span className="text-fg-soft">{m.description}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-fg-soft">
            <span className="text-fg font-semibold">Stack:</span>{" "}
            {techStack.join(", ")}.
          </p>
        </Block>

        <Block title="Resultados">
          <div className="grid sm:grid-cols-3 gap-4">
            {results.map((result) => (
              <div
                key={result.title}
                className="bg-green-wash border border-green/25 rounded-2xl p-5"
              >
                <h3 className="font-bold text-green text-lg">{result.title}</h3>
                <p className="mt-2 text-fg leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <div className="mt-6 bg-plum border border-line-strong rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-2xl sm:text-3xl font-bold tracking-tight max-w-lg leading-tight">
            ¿Quieres algo así para tu organización?
          </p>
          <Link
            href="/#contacto"
            className="self-start md:self-auto font-semibold text-white bg-violet hover:bg-violet-dark px-6 py-3 rounded-full transition-colors"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </div>
    </main>
  );
}
