import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolás Castañeda | Ingeniero Informático - Full Stack & Automation Developer",
  description:
    "Portafolio profesional de Nicolás Castañeda Betancur. Ingeniero Informático especializado en desarrollo Full Stack, automatización de procesos y soluciones digitales con Next.js, TypeScript, Python y Power Platform.",
  keywords: [
    "Nicolás Castañeda",
    "Ingeniero Informático",
    "Full Stack Developer",
    "Automatización",
    "Next.js",
    "TypeScript",
    "Power Platform",
    "Medellín",
    "Colombia",
  ],
  authors: [{ name: "Nicolás Castañeda Betancur" }],
  openGraph: {
    title: "Nicolás Castañeda | Ingeniero Informático",
    description:
      "Desarrollo Full Stack & Automatización de procesos. Soluciones digitales eficientes.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
