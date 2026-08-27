import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "lib/og-card";

export const alt = "Chidi Orji — Full-Stack AI Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({ eyebrow: "Full-Stack AI Engineer", title: "Chidi Orji" });
}
