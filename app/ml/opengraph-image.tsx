import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "lib/og-card";

export const alt = "ML & AI Projects — Chidi Orji";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({ eyebrow: "ML & AI Projects", title: "Chidi Orji" });
}
