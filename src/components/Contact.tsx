"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const EMAIL = "nicolascastaneda2004@hotmail.com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+57 301 650 2900",
    href: "https://wa.me/573016502900",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Nicolás Castañeda Betancur",
    href: "https://www.linkedin.com/in/nicol%C3%A1s-casta%C3%B1eda-betancur-11243b390/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "nicho1607",
    href: "https://github.com/nicho1607",
  },
];

const fieldClass =
  "w-full bg-plum border border-line-strong rounded-xl px-4 py-3 text-fg placeholder:text-fg-soft/60 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-colors";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contacto desde portafolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section
        id="contacto"
        className="relative py-20 sm:py-28 bg-plum border-t border-line overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02]">
              ¿Tu equipo todavía llena planillas a mano?
            </h2>
            <p className="mt-6 text-lg text-fg-soft leading-relaxed max-w-md">
              Estoy disponible para proyectos freelance, colaboraciones y
              ofertas de empleo. Cuéntame qué proceso quieres mejorar.
            </p>

            <ul className="mt-10 border-t border-line">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="border-b border-line">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 py-4"
                    >
                      <Icon className="w-5 h-5 shrink-0 text-fg-soft" />
                      <span className="w-24 shrink-0 text-sm text-fg-soft">
                        {item.label}
                      </span>
                      <span className="min-w-0 break-words font-medium group-hover:underline underline-offset-4">
                        {item.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-night text-fg rounded-2xl border border-line-strong p-6 sm:p-8 self-start">
            {submitted ? (
              <div className="py-10" role="status">
                <p className="text-2xl font-bold tracking-tight">
                  Mensaje listo en tu correo
                </p>
                <p className="mt-3 text-fg-soft leading-relaxed">
                  Se abrió tu aplicación de correo con el mensaje escrito.
                  Envíalo desde ahí y te respondo pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-semibold text-lilac underline underline-offset-4"
                >
                  Escribir otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold tracking-tight">
                  Escríbeme un mensaje
                </h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={fieldClass}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`${fieldClass} resize-none`}
                    placeholder="Qué proceso quieres mejorar y en qué plazo"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-semibold text-white bg-violet hover:bg-violet-dark px-6 py-3 rounded-full transition-colors"
                >
                  Preparar correo
                </button>
                <p className="text-sm text-fg-soft">
                  Se abrirá tu aplicación de correo con el mensaje listo.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-plum text-fg-soft border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-3 justify-between text-sm">
          <p>
            &copy; {new Date().getFullYear()} Nicolás Castañeda Betancur
          </p>
          <p>Medellín, Colombia</p>
        </div>
      </footer>
    </>
  );
}
