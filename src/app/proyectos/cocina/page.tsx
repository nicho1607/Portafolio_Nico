import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ClipboardList,
  History,
  FileBarChart,
  Users,
  Layers,
  Shield,
} from "lucide-react";

const screenshots = [
  {
    src: "/projects/cocina/home.png",
    alt: "Portal principal - Módulos de Formularios, Historial y Reportes",
    caption: "Portal de inicio con acceso a los tres módulos principales",
  },
  {
    src: "/projects/cocina/formularios.png",
    alt: "Catálogo de formularios organizados por área operativa",
    caption: "Catálogo de formularios por área: Cocina Principal, Panadería, Steward, Cafeterías",
  },
  {
    src: "/projects/cocina/historial.png",
    alt: "Historial de registros con estados de verificación",
    caption: "Historial con trazabilidad, fechas, estados y acciones de verificación",
  },
  {
    src: "/projects/cocina/reportes.png",
    alt: "Módulo de reportes con filtros avanzados",
    caption: "Reportes con filtros por estado, fecha y categoría con control de acceso",
  },
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Prisma ORM",
  "PostgreSQL",
  "Tailwind CSS",
  "Next.js API Routes",
  "Autenticación por Roles",
];

const results = [
  {
    icon: CheckCircle,
    title: "100% Digitalización",
    description: "Eliminación total del uso de papel en los controles operativos de cocina.",
  },
  {
    icon: Shield,
    title: "Trazabilidad y Auditoría",
    description:
      'Visibilidad inmediata de registros con estados de validación ("Sin verificar", "Verificado").',
  },
  {
    icon: History,
    title: "Optimización de Tiempos",
    description:
      "Disminución significativa en el tiempo dedicado a llenar formularios manuales y consolidar reportes.",
  },
];

export default function ProyectoCocinaPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-muted hover:text-primary-light transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Proyectos
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <ClipboardList className="w-4 h-4 text-primary-light" />
            <span className="text-sm font-medium text-primary-light">
              Country Club Ejecutivo
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Sistema Digital de Gestión y Control{" "}
            <span className="gradient-text">Operativo para Cocina</span>
          </h1>

          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            Transformación digital completa de los procesos operativos de cocina,
            eliminando el uso de papel mediante un sistema web full-stack diseñado
            para la recolección, auditoría y trazabilidad de registros sanitarios y
            operativos.
          </p>
        </div>

        {/* Screenshots Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            <span className="gradient-text">Capturas</span> del Sistema
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className="glass rounded-xl overflow-hidden hover:border-border-hover transition-all duration-300 hover:-translate-y-1 glow-purple-hover"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover object-top"
                />
                <p className="px-4 py-3 text-sm text-muted">{shot.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* El Desafío */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            El <span className="gradient-text">Desafío</span>
          </h2>
          <div className="glass rounded-xl p-6 sm:p-8">
            <p className="text-muted leading-relaxed text-lg">
              Toda la gestión operativa —listas de chequeo, recepción de mercancía,
              controles de temperatura, procesos de limpieza y seguridad en el
              trabajo— se realizaba manualmente en papel. Esto generaba pérdida de
              información, baja visibilidad en tiempo real para la toma de decisiones
              y una carga administrativa alta para el personal operario y de
              supervisión.
            </p>
          </div>
        </section>

        {/* Mi Rol */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Mi Rol y{" "}
            <span className="gradient-text">Levantamiento de Requerimientos</span>
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Para llevar a cabo la digitalización, lideré la fase de investigación e
            ingeniería de requisitos trabajando directamente con las partes
            interesadas:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-6 hover:bg-surface-hover transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="text-foreground font-semibold mt-1.5">
                  Personal Operativo
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Entrevisté al Chef, Sub-Chef y Analista de Operaciones para
                comprender la dinámica diaria, el flujo real de trabajo en los turnos
                y la manera en que diligenciaban cada formulario en el entorno de
                cocina.
              </p>
            </div>
            <div className="glass rounded-xl p-6 hover:bg-surface-hover transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="w-5 h-5 text-primary-light" />
                </div>
                <h3 className="text-foreground font-semibold mt-1.5">
                  Desarrollo Organizacional
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Levanté los lineamientos normativos y la estructura formal requerida
                para garantizar que la versión digital cumpliera estrictamente con los
                estándares y políticas de la organización.
              </p>
            </div>
          </div>
        </section>

        {/* Solución Técnica */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            La Solución{" "}
            <span className="gradient-text">Técnica</span>
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Diseñé y desarrollé una aplicación web escalable, responsiva y con
            control de acceso por roles:
          </p>

          <div className="space-y-4 mb-8">
            <div className="glass rounded-xl p-6">
              <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Frontend
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Desarrollado con Next.js y TypeScript, ofreciendo una interfaz
                intuitiva adaptada al flujo de trabajo rápido de la cocina (módulos
                para la selección de plantillas por área como Cocina Principal,
                Panadería, Steward, Cafeterías, etc.).
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Backend y Base de Datos
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Implementado con Next.js API Routes y Prisma ORM, garantizando tipado
                estricto de datos, validación en el lado del servidor y relaciones
                eficientes en la base de datos.
              </p>
            </div>
          </div>

          {/* Módulos */}
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Módulos Principales
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-5 text-center hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-primary/10 mb-3">
                <ClipboardList className="w-6 h-6 text-primary-light" />
              </div>
              <h4 className="text-foreground font-medium text-sm mb-1">
                Catálogo de Formularios
              </h4>
              <p className="text-xs text-muted">
                Organización por áreas operativas y tipos de control
              </p>
            </div>
            <div className="glass rounded-xl p-5 text-center hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-primary/10 mb-3">
                <History className="w-6 h-6 text-primary-light" />
              </div>
              <h4 className="text-foreground font-medium text-sm mb-1">
                Historial de Registros
              </h4>
              <p className="text-xs text-muted">
                Trazabilidad en tiempo real con estados de verificación
              </p>
            </div>
            <div className="glass rounded-xl p-5 text-center hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-primary/10 mb-3">
                <FileBarChart className="w-6 h-6 text-primary-light" />
              </div>
              <h4 className="text-foreground font-medium text-sm mb-1">
                Módulo de Reportes
              </h4>
              <p className="text-xs text-muted">
                Filtros avanzados con control de acceso autenticado
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Stack <span className="gradient-text">Tecnológico</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium text-primary-light bg-primary/10 rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Resultados */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Resultados e{" "}
            <span className="gradient-text">Impacto</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {results.map((result) => {
              const Icon = result.icon;
              return (
                <div
                  key={result.title}
                  className="glass rounded-xl p-6 hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-1 glow-purple-hover"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {result.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center glass rounded-xl p-8">
          <p className="text-muted mb-4">
            ¿Interesado en un proyecto similar para tu organización?
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </div>
    </main>
  );
}
