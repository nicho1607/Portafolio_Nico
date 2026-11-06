import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// WCAG 2.1 AA with axe-core: the test fails on any violation, in both viewports.
const PAGES = ["/", "/proyectos/mesa-viva", "/proyectos/caudal", "/proyectos/ventas-inventario", "/proyectos/cocina"];

for (const path of PAGES) {
  test(`axe: 0 WCAG 2.1 AA violations on ${path}`, async ({ page }) => {
    await page.goto(path);
    // Lazy images and the mobile layout settle after load.
    await page.waitForLoadState("networkidle");

    const { violations } = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const summary = violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.slice(0, 3).map((n) => n.target.join(" ")),
    }));
    expect(summary, JSON.stringify(summary, null, 2)).toEqual([]);
  });
}
