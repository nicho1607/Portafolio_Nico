export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[14rem_1fr] gap-8 lg:gap-16">
        <h2 className="text-3xl font-bold tracking-tight">Sobre mí</h2>

        <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed text-fg-soft">
          <p>
            Soy Ingeniero Informático y desarrollo aplicaciones web full stack con TypeScript,
            Next.js, Node.js, PostgreSQL y Prisma.
          </p>
          <p>
            En mi práctica en el Country Club Ejecutivo levanté con el chef y el personal de cocina
            cómo se llenaban los controles en papel, y construí un prototipo web para
            reemplazarlos. Antes fui tutor de programación en Python, así que estoy acostumbrado a
            explicar lo técnico con claridad.
          </p>
          <p>
            Estoy en Medellín, Colombia, y busco trabajo como desarrollador full stack, presencial o
            remoto.
          </p>
        </div>
      </div>
    </section>
  );
}
