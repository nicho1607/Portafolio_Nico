// Generates light WebP posters for the case-study videos.
// The <video poster> is the LCP element on case pages and doesn't go through
// next/image, so the full 1440px PNG was downloaded as is.
// Usage: node scripts/make-posters.mjs
import sharp from "sharp";
import { statSync } from "node:fs";

const posters = [
  { src: "public/projects/mesa-viva/1440-04-mesero-plano.png", width: 960 },
  { src: "public/projects/mesa-viva/390-01-cliente-menu.png", width: 390 },
  { src: "public/projects/ventas-inventario/1440-02-pos-carrito.png", width: 960 },
  { src: "public/projects/caudal/1440-05-alta-rapida.png", width: 960 },
];

for (const { src, width } of posters) {
  const out = src.replace(/\.png$/, "-poster.webp");
  await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
  const kb = (p) => (statSync(p).size / 1024).toFixed(0);
  console.log(`${src}: ${kb(src)} KB -> ${out}: ${kb(out)} KB`);
}
