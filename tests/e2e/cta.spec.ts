import { expect, test } from "@playwright/test";

// The whole redesign exists to get a tech lead to the code. These checks fail
// if the hero's "Ver el código" call to action stops being visible without
// scrolling, stops pointing at a GitHub repo, or the page scrolls sideways.

test.describe("Hero call to action", () => {
  test("'Ver el código' is fully visible without scrolling and opens a GitHub repo", async ({ page }) => {
    await page.goto("/");

    const cta = page.locator("#inicio").getByRole("link", { name: "Ver el código" });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", /^https:\/\/github\.com\/nicho1607\/[\w.-]+$/);

    const box = await cta.boundingBox();
    const viewport = page.viewportSize();
    expect(box, "CTA has a layout box").not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(box!.y, "CTA top is on screen").toBeGreaterThanOrEqual(0);
    expect(box!.y + box!.height, "CTA bottom is above the fold").toBeLessThanOrEqual(viewport!.height);
    expect(await page.evaluate(() => window.scrollY), "page was not scrolled").toBe(0);
  });

  test("a GitHub profile link is reachable from the hero", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("#inicio").getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/nicho1607");
  });
});

for (const path of ["/", "/proyectos/mesa-viva", "/proyectos/caudal", "/proyectos/ventas-inventario", "/proyectos/cocina"]) {
  test(`no horizontal scroll on ${path}`, async ({ page }) => {
    await page.goto(path);
    const { scrollWidth, innerWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(innerWidth);
  });
}

for (const slug of ["mesa-viva", "caudal", "ventas-inventario"]) {
  test(`case study ${slug} links to its repo`, async ({ page }) => {
    await page.goto(`/proyectos/${slug}`);
    await expect(
      page.getByRole("link", { name: "Ver el código en GitHub" }),
    ).toHaveAttribute("href", `https://github.com/nicho1607/${slug}`);
  });
}
