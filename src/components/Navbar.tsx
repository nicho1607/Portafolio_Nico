"use client";

import { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0d18]/90 backdrop-blur-lg border-b border-border shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="font-mono text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">&lt;/&gt;</span> Nicolás Castañeda
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/573016502900?text=Hola%20Nicolás,%20me%20interesa%20tu%20trabajo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Contrátame
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0d18]/95 backdrop-blur-lg border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-muted hover:text-foreground hover:bg-surface rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/573016502900?text=Hola%20Nicolás,%20me%20interesa%20tu%20trabajo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 px-5 py-3 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-medium rounded-lg"
          >
            <Send className="w-4 h-4" />
            Contrátame
          </a>
        </div>
      </div>
    </nav>
  );
}
