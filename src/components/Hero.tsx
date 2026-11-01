import Image from "next/image";
import { Check } from "lucide-react";

const PROCESSES = 40;

const stack = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "PostgreSQL",
  "Prisma",
  "Power Apps",
  "Power Automate",
  "Power BI",
];

const chipClass =
  "rounded-2xl bg-plum/85 backdrop-blur border border-line-strong px-4 py-3 shadow-[0_12px_40px_-12px_rgba(124,77,255,0.45)]";

function ProcessesChip() {
  return (
    <div className={`flex items-center gap-3 text-left ${chipClass}`}>
      <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-green text-night">
        <Check className="w-5 h-5" strokeWidth={3} />
      </span>
      <span>
        <span className="block font-bold leading-tight">40 procesos sin papel</span>
        <span className="block text-sm text-fg-soft">Country Club Ejecutivo</span>
      </span>
    </div>
  );
}

function StudentsChip() {
  return (
    <div className={`flex items-center gap-3 text-left ${chipClass}`}>
      <span className="text-3xl font-extrabold tracking-tight text-lilac">30+</span>
      <span className="text-sm text-fg-soft leading-snug">
        estudiantes tutorados
        <br />
        en Python
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-block rounded-full border border-line-strong px-4 py-1.5 text-sm text-fg-soft">
            Ingeniero Informático en Medellín
          </p>
          <h1 className="mt-6 font-extrabold tracking-[-0.035em] leading-[0.92] text-[clamp(3rem,9vw,6.75rem)]">
            Nicolás Castañeda
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl sm:text-2xl leading-snug text-fg-soft">
            Convierto procesos que viven en papel y hojas de cálculo en
            software que los equipos usan todos los días.
          </p>
        </div>

        {/* Portrait stage */}
        <div className="relative mt-14 flex flex-col items-center">
          <div
            className="arch-glow absolute left-1/2 top-0 -translate-x-1/2 w-[640px] max-w-[150vw] aspect-square pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative w-[270px] sm:w-[330px]">
            <div
              className="arch-disc absolute left-1/2 top-[30%] -translate-x-1/2 w-[400px] sm:w-[500px] aspect-square rounded-full pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] rounded-t-full overflow-hidden bg-white ring-4 ring-night">
              <Image
                src="/profile.jpg"
                alt="Retrato de Nicolás Castañeda Betancur"
                fill
                sizes="330px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* CTA pill sitting on the arch base */}
            <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 flex items-center gap-1 rounded-full bg-plum/90 backdrop-blur border border-line-strong p-1.5 whitespace-nowrap">
              <a
                href="#proyectos"
                className="rounded-full bg-violet hover:bg-violet-dark px-5 py-2.5 font-semibold text-white transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-full px-5 py-2.5 font-semibold text-fg hover:text-lilac transition-colors"
              >
                Contactarme
              </a>
            </div>

            {/* Chips beside the arch on large screens */}
            <div className="hidden lg:block absolute top-[42%] right-[calc(100%+2.5rem)] whitespace-nowrap">
              <ProcessesChip />
            </div>
            <div className="hidden lg:block absolute top-[16%] left-[calc(100%+2.5rem)] whitespace-nowrap">
              <StudentsChip />
            </div>
          </div>

          {/* Same chips under the arch on small screens */}
          <div className="lg:hidden mt-14 flex flex-wrap justify-center gap-3">
            <ProcessesChip />
            <StudentsChip />
          </div>
        </div>

        {/* Tally: one box per digitized kitchen process */}
        <div className="mt-20 sm:mt-28 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] gap-8 lg:gap-16 items-center rounded-3xl bg-plum/60 border border-line p-6 sm:p-10">
          <div
            className="grid grid-cols-10 gap-1.5 sm:gap-2 max-w-[520px]"
            role="img"
            aria-label={`${PROCESSES} casillas marcadas, una por cada proceso digitalizado`}
          >
            {Array.from({ length: PROCESSES }, (_, i) => (
              <span
                key={i}
                className="tally-box"
                style={{ "--i": i } as React.CSSProperties}
              >
                <svg viewBox="0 0 20 20">
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
              </span>
            ))}
          </div>
          <div>
            <p className="text-2xl font-bold tracking-tight leading-tight">
              40 procesos de cocina que ya no se llenan en papel.
            </p>
            <p className="mt-3 text-fg-soft leading-relaxed">
              Inventarios, temperaturas y recambio de aceite en el Country
              Club Ejecutivo, ahora con historial, estados de verificación y
              reportes.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-fg-soft leading-relaxed">
          <span className="text-fg font-semibold">Trabajo con</span>{" "}
          {stack.join(", ")}.
        </p>
      </div>
    </section>
  );
}
