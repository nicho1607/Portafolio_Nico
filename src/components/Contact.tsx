import { Mail, Phone } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { EMAIL, GITHUB_PROFILE, LINKEDIN, WHATSAPP } from "@/data/links";
import type { EventName } from "@/lib/analytics";

const contactInfo: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  event?: EventName;
}[] = [
  { icon: GithubIcon, label: "GitHub", value: "nicho1607", href: GITHUB_PROFILE, event: "click_github_contacto" },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, event: "click_email" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "Nicolás Castañeda Betancur", href: LINKEDIN },
  { icon: Phone, label: "WhatsApp", value: "+57 301 650 2900", href: WHATSAPP },
];

export default function Contact() {
  return (
    <>
      <section id="contacto" className="relative py-20 sm:py-28 bg-plum border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] leading-[1.02]">
              ¿Buscas un desarrollador full stack?
            </h2>
            <p className="mt-6 text-lg text-fg-soft leading-relaxed max-w-md">
              Busco empleo, presencial en Medellín o remoto. La forma más rápida de evaluarme es
              abrir el código; para hablar, escríbeme al correo.
            </p>
          </div>

          <ul className="border-t border-line self-start">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="w-5 h-5 shrink-0 text-fg-soft" />
                  <span className="w-24 shrink-0 text-sm text-fg-soft">{item.label}</span>
                  <span className="min-w-0 break-words font-medium group-hover:underline underline-offset-4">
                    {item.value}
                  </span>
                </>
              );
              const className = "group flex items-center gap-4 py-4";
              return (
                <li key={item.label} className="border-b border-line">
                  {item.event ? (
                    <TrackedLink
                      href={item.href}
                      event={item.event}
                      eventProps={{ from: "contacto" }}
                      className={className}
                    >
                      {content}
                    </TrackedLink>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="bg-plum text-fg-soft border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-3 justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} Nicolás Castañeda Betancur</p>
          <p>Medellín, Colombia</p>
        </div>
      </footer>
    </>
  );
}
