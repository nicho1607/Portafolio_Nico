import Image from "next/image";
import { ExternalLink } from "lucide-react";

const techIcons = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Git", color: "#F05032" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-light tracking-wide">
                INGENIERO INFORMÁTICO
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hola, soy{" "}
                <span className="gradient-text">Nicolás.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted font-light leading-relaxed">
                Construyo soluciones digitales y automatización de procesos.
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-muted text-base sm:text-lg max-w-lg leading-relaxed">
              Especializado en{" "}
              <span className="text-foreground font-medium">Next.js</span>,{" "}
              <span className="text-foreground font-medium">TypeScript</span>,{" "}
              <span className="text-foreground font-medium">Power Platform</span> y
              bases de datos. Transformo ideas en software eficiente y escalable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                Ver Mi Trabajo
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Visual Composition */}
          <div className="relative flex flex-col items-center lg:items-end gap-8">
            {/* Profile Photo */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full profile-glow opacity-70 blur-sm" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src="/profile.jpg"
                  alt="Nicolás Castañeda Betancur"
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Code Snippet Card */}
            <div className="w-full max-w-sm glass rounded-xl p-4 glow-purple-hover transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-muted font-mono">
                  developer.ts
                </span>
              </div>
              <pre className="text-xs sm:text-sm font-mono text-muted leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-primary-light">const</span>{" "}
                  <span className="text-accent">developer</span> = {`{`}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-green-400">&quot;Nicolás&quot;</span>,{"\n"}
                  {"  "}role:{" "}
                  <span className="text-green-400">
                    &quot;Ingeniero Informático&quot;
                  </span>
                  ,{"\n"}
                  {"  "}skills: [
                  <span className="text-green-400">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-green-400">&quot;TypeScript&quot;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">&quot;Python&quot;</span>,{" "}
                  <span className="text-green-400">
                    &quot;Power Platform&quot;
                  </span>
                  ],{"\n"}
                  {"  "}passion:{" "}
                  <span className="text-green-400">
                    &quot;Optimizar procesos&quot;
                  </span>
                  {"\n"}
                  {`}`};
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Tech Icons Row */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted mb-6 tracking-wide uppercase">
            Tecnologías con las que trabajo
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface border border-border group-hover:border-border-hover group-hover:bg-surface-hover transition-all duration-300 group-hover:-translate-y-1">
                  <span
                    className="text-lg font-bold font-mono"
                    style={{ color: tech.color }}
                  >
                    {tech.name.slice(0, 2)}
                  </span>
                </div>
                <span className="text-xs text-muted group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
