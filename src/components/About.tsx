const stats = [
  { value: "40", label: "procesos operativos digitalizados" },
  { value: "30+", label: "estudiantes tutorados en Python" },
  { value: "15+", label: "proyectos prácticos realizados" },
  { value: "95%", label: "de satisfacción en mentorías" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[14rem_1fr] gap-8 lg:gap-16">
        <h2 className="text-3xl font-bold tracking-tight">Sobre mí</h2>

        <div>
          <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed text-fg-soft">
            <p>
              Soy Ingeniero Informático y me gusta resolver problemas
              concretos de las organizaciones: el formulario que se pierde, el
              reporte que se arma a mano cada semana, el dato que nadie puede
              consultar a tiempo.
            </p>
            <p>
              Trabajo como desarrollador Full Stack con Next.js y TypeScript, y
              automatizo procesos con Power Platform. También he enseñado
              programación, así que sé explicar lo técnico a quien no lo es.
            </p>
            <p>
              Estoy en Medellín, Colombia, y trabajo con equipos de
              operaciones, administración y tecnología.
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-line">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="pt-5 pb-2 pr-4 border-b md:border-b-0 border-line"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-extrabold tracking-tight text-lilac">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-fg-soft leading-snug">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
