import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Clarity from "@/components/Clarity";
import ScrollDepth from "@/components/ScrollDepth";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const description =
  "Desarrollador Full Stack con TypeScript, Next.js, Node.js, PostgreSQL y Prisma en Medellín. Proyectos con el código abierto en GitHub y la autoría explicada: qué hice yo y qué hizo el agente de IA.";

export const metadata: Metadata = {
  title: "Nicolás Castañeda | Desarrollador Full Stack (TypeScript, Next.js, PostgreSQL)",
  description,
  keywords: [
    "Nicolás Castañeda",
    "Desarrollador Full Stack",
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Medellín",
    "Colombia",
  ],
  authors: [{ name: "Nicolás Castañeda Betancur" }],
  openGraph: {
    title: "Nicolás Castañeda | Desarrollador Full Stack",
    description,
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${urbanist.variable} font-sans antialiased`}
      >
        {children}
        <ScrollDepth />
        <Analytics />
        <Clarity />
      </body>
    </html>
  );
}
