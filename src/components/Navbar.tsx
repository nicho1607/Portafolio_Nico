"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import { GithubIcon } from "@/components/icons";
import { GITHUB_PROFILE } from "@/data/links";

const navLinks = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || isOpen
          ? "bg-night/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-fg tracking-tight">
            Nicolás Castañeda
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-fg-soft hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <TrackedLink
              href={GITHUB_PROFILE}
              event="click_github_nav"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-violet hover:bg-violet-dark px-5 py-2 rounded-full transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </TrackedLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-fg"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-line px-5 pb-5 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-lg text-fg border-b border-line last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <TrackedLink
            href={GITHUB_PROFILE}
            event="click_github_nav_movil"
            className="mt-4 flex items-center justify-center gap-2 font-semibold text-white bg-violet px-5 py-3 rounded-full"
          >
            <GithubIcon className="w-5 h-5" />
            Ver mi GitHub
          </TrackedLink>
        </div>
      )}
    </nav>
  );
}
