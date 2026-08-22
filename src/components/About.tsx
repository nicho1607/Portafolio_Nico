import { FileText, Users, FolderKanban, Star } from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: "40+",
    label: "Formularios y procesos automatizados",
  },
  {
    icon: Users,
    value: "30+",
    label: "Estudiantes tutorados en Python",
  },
  {
    icon: FolderKanban,
    value: "15+",
    label: "Proyectos prácticos realizados",
  },
  {
    icon: Star,
    value: "95%",
    label: "Satisfacción en mentorías",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary-light tracking-wide uppercase">
            Sobre mí
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Conoce un poco más sobre{" "}
            <span className="gradient-text">quién soy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted text-lg leading-relaxed">
              Soy un <span className="text-foreground font-medium">Ingeniero Informático</span> apasionado
              por la resolución de problemas y la optimización de procesos corporativos.
              Mi enfoque está en crear soluciones tecnológicas que generen impacto real en las organizaciones.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Con experiencia en <span className="text-foreground font-medium">desarrollo Full Stack</span>,{" "}
              <span className="text-foreground font-medium">automatización con Power Platform</span> y{" "}
              <span className="text-foreground font-medium">enseñanza de programación</span>, combino
              habilidades técnicas con una visión estratégica para entregar software eficiente,
              escalable y centrado en el usuario.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Desde Medellín, Colombia, trabajo con equipos multidisciplinarios para transformar
              ideas en productos digitales funcionales, siempre buscando la excelencia en cada línea de código.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center hover:bg-surface-hover hover:border-border-hover transition-all duration-300 hover:-translate-y-1 glow-purple-hover"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted leading-snug">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
