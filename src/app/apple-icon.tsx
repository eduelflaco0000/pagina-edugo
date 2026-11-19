import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icono para iOS (pantalla de inicio): símbolo E. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0a0a0a" }}>
        <svg viewBox="0 0 64 64" width="180" height="180">
          <g fill="#fff">
            <rect x="21" y="16" width="7" height="32" />
            <rect x="21" y="16" width="23" height="7" />
            <rect x="21" y="28.5" width="18" height="7" />
            <rect x="21" y="41" width="23" height="7" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
