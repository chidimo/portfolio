import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "lib/og-card";

export const alt = "Chidi Orji — Full-Stack ML Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({ eyebrow: "Full-Stack ML Engineer", title: "Chidi Orji" });
}
