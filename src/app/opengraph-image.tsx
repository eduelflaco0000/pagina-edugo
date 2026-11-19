import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} · ${siteConfig.descriptor} — ${siteConfig.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen para compartir en redes (Open Graph / Twitter). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ffffff",
          color: "#0a0a0a",
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg viewBox="0 0 64 64" width="96" height="96">
            <rect width="64" height="64" rx="12" fill="#0a0a0a" />
            <g fill="#fff">
              <rect x="21" y="16" width="7" height="32" />
              <rect x="21" y="16" width="23" height="7" />
              <rect x="21" y="28.5" width="18" height="7" />
              <rect x="21" y="41" width="23" height="7" />
            </g>
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 700, letterSpacing: -2 }}>
              EDUGO<span style={{ color: "#a3a3a3" }}>.</span>
            </div>
            <div style={{ fontSize: 18, letterSpacing: 6, color: "#737373", textTransform: "uppercase" }}>
              Soluciones digitales
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
          <span>Tecnología que</span>
          <span style={{ color: "#a3a3a3" }}>impulsa negocios.</span>
        </div>
      </div>
    ),
    size,
  );
}
