import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "lib/og-card";

export const alt = "Portfolio — Chidi Orji";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({ eyebrow: "Selected Work", title: "Chidi Orji" });
}
