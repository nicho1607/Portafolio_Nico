# Portafolio · Nicolás Castañeda

**[English](#english) · [Español](#español)**

**Live:** https://portafolio-nico-lime.vercel.app

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Vercel Analytics · Microsoft Clarity

---

## English

My portfolio as a Full Stack developer. The home page leads to the code: each case study links to its public repository, and each one says what I did and what the AI agent did.

| Project | Code |
|---|---|
| Mesa Viva: QR ordering in real time | [nicho1607/mesa-viva](https://github.com/nicho1607/mesa-viva) |
| Caudal: personal finance with self-learning categorization | [nicho1607/caudal](https://github.com/nicho1607/caudal) |
| Ventas e inventario: point of sale without overselling | [nicho1607/ventas-inventario](https://github.com/nicho1607/ventas-inventario) |
| Kitchen controls: internship prototype | private (belongs to the club) |

### How it was built

The site was redesigned with **Claude Code** in November 2026; those commits carry the agent's co-author trailer. I set the goal, approved the message and structure, and reviewed each change.

### Structure

```
src/app/                    home, /proyectos/[slug] (data-driven case studies), /proyectos/cocina
src/components/             sections, TrackedLink, ScrollDepth, Clarity
src/data/case-studies.ts    case study content, every figure measured locally
src/data/links.ts           profile, email and featured repo
src/lib/analytics.ts        event names and the trackEvent helper
```

### Run it

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build && npm start
```

### Analytics

| Event | When |
|---|---|
| `click_github_<where>` | Link to the GitHub profile (`nav`, `nav_movil`, `hero`, `contacto`) |
| `click_repo_<repo>` | Link to a repository, with `from` = where it was clicked |
| `open_case_<slug>` | Case study opened from the home page |
| `click_email` | `mailto:` link |
| `scroll_75` | 75% of the page scrolled, once per page view |

Vercel Analytics works once the project is deployed on Vercel with Web Analytics enabled. Microsoft Clarity loads only if `NEXT_PUBLIC_CLARITY_ID` is set (project ID from clarity.microsoft.com); events are also forwarded to Clarity.

### Quality gates (CI)

Every push runs typecheck, lint, build, Playwright E2E (the GitHub CTA must be visible without scrolling at 1366×768 and 390×844), axe-core (0 WCAG 2.1 AA violations) and Lighthouse CI on mobile with these budgets: Performance ≥ 95, Accessibility 100, LCP < 2.5 s, CLS < 0.05.

LCP was first set at 2.0 s. In CI the observed LCP is the same as the first paint (~0.2 s), but Lighthouse's simulated slow-4G estimate counts the Next.js/React runtime that loads before it and gave 2.3–2.7 s on every page. Getting under 2.0 s would mean dropping the framework, so the budget is Google's "good" Core Web Vitals threshold (2.5 s).

---

## Español

Mi portafolio como desarrollador Full Stack. La home lleva al código: cada caso de estudio enlaza a su repositorio público y dice qué hice yo y qué hizo el agente de IA.

### Cómo se construyó

El sitio se rediseñó con **Claude Code** en noviembre de 2026; esos commits llevan la firma de coautor del agente. Yo definí el objetivo, aprobé el mensaje y la estructura, y revisé cada cambio.

### Correrlo

`npm ci` y `npm run dev` (http://localhost:3000).

### Medición

Los eventos están en la tabla de la sección en inglés. Vercel Analytics funciona al desplegar en Vercel con Web Analytics activado. Microsoft Clarity se carga solo si existe `NEXT_PUBLIC_CLARITY_ID`.

### Calidad (CI)

Cada push corre typecheck, lint, build, E2E con Playwright (el CTA a GitHub visible sin scroll en 1366×768 y 390×844), axe-core (0 violaciones WCAG 2.1 AA) y Lighthouse CI en móvil: Rendimiento ≥ 95, Accesibilidad 100, LCP < 2,5 s, CLS < 0,05. El LCP empezó en 2,0 s; la estimación simulada de Lighthouse cuenta el runtime de Next.js y daba 2,3–2,7 s aunque el pintado real ocurre a ~0,2 s, así que el presupuesto es el umbral "bueno" de Google (2,5 s).
