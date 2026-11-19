/**
 * Genera imágenes PROVISIONALES para la galería de cada proyecto.
 * Uso: node scripts/generate-placeholders.mjs
 * Reemplázalas por capturas reales en /public/projects/<id>/
 */
import { mkdirSync, writeFileSync } from "node:fs";

const projects = {
  inventario: "Sistema de control de inventario",
  "socio-negocio": "Socio Negocio",
  "cutside-barber": "Cutside Barber",
  "acabados-marbella": "Acabados Marbella",
};
const labels = ["Vista principal", "Panel / módulo", "Detalle de funcionalidad", "Vista móvil / reporte"];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const [id, name] of Object.entries(projects)) {
  mkdirSync(`public/projects/${id}`, { recursive: true });
  labels.forEach((label, i) => {
    const n = i + 1;
    const shade = ["#f5f5f5", "#efefef", "#f2f2f2", "#ececec"][i];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <pattern id="g" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="#000" stroke-opacity=".05"/></pattern>
  </defs>
  <rect width="1600" height="1000" fill="${shade}"/>
  <rect width="1600" height="1000" fill="url(#g)"/>
  <rect x="200" y="170" width="1200" height="660" rx="28" fill="#fff" stroke="#e5e5e5" stroke-width="2"/>
  <rect x="200" y="170" width="1200" height="64" rx="28" fill="#fafafa"/>
  <rect x="200" y="206" width="1200" height="28" fill="#fafafa"/>
  <circle cx="246" cy="202" r="8" fill="#d4d4d4"/><circle cx="274" cy="202" r="8" fill="#d4d4d4"/><circle cx="302" cy="202" r="8" fill="#d4d4d4"/>
  <g transform="translate(752 360)"><rect width="96" height="96" rx="18" fill="#0a0a0a"/><g fill="#fff" transform="scale(1.5)"><rect x="21" y="16" width="7" height="32"/><rect x="21" y="16" width="23" height="7"/><rect x="21" y="28.5" width="18" height="7"/><rect x="21" y="41" width="23" height="7"/></g></g>
  <text x="800" y="540" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="40" font-weight="600" fill="#0a0a0a" letter-spacing="-1">${esc(name)}</text>
  <text x="800" y="590" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="24" fill="#737373">${esc(label)}</text>
  <rect x="640" y="640" width="320" height="44" rx="22" fill="none" stroke="#a3a3a3" stroke-dasharray="6 6"/>
  <text x="800" y="669" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="18" fill="#737373">IMAGEN PENDIENTE · 0${n}/04</text>
</svg>
`;
    writeFileSync(`public/projects/${id}/evidencia-0${n}.svg`, svg);
  });
}
console.log("Imágenes provisionales generadas.");
