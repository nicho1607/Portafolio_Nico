"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nicolascastaneda2004@hotmail.com",
    href: "mailto:nicolascastaneda2004@hotmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+57 301 650 2900",
    href: "https://wa.me/573016502900",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "nicho1607",
    href: "https://github.com/nicho1607",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Nicolás Castañeda Betancur",
    href: "https://www.linkedin.com/in/nicol%C3%A1s-casta%C3%B1eda-betancur-11243b390/",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link with form data
    const subject = encodeURIComponent(
      `Contacto desde portafolio - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.open(
      `mailto:nicolascastaneda2004@hotmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section id="contacto" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary-light tracking-wide uppercase">
              Contacto
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              ¿Tienes un proyecto{" "}
              <span className="gradient-text">en mente?</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Estoy disponible para proyectos freelance, colaboraciones y
              oportunidades laborales. ¡Hablemos!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Ubicación</p>
                    <p className="text-sm text-muted">Medellín, Colombia</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface-hover transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary-light" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{item.label}</p>
                          <p className="text-foreground font-medium text-sm group-hover:text-primary-light transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Envíame un mensaje
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <p className="text-foreground font-medium text-lg">
                    ¡Mensaje preparado!
                  </p>
                  <p className="text-muted text-sm mt-2">
                    Se abrió tu cliente de correo. Gracias por contactarme.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-muted">
                <span className="text-primary">&lt;/&gt;</span> Nicolás
                Castañeda
              </span>
            </div>

            <p className="text-sm text-muted text-center">
              &copy; {new Date().getFullYear()} Nicolás Castañeda Betancur.
              Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nicho1607"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nicol%C3%A1s-casta%C3%B1eda-betancur-11243b390/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:nicolascastaneda2004@hotmail.com"
                className="p-2 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
