import { renderOgCard, OG_SIZE, OG_CONTENT_TYPE } from "lib/og-card";

export const alt = "Chidi Orji — Software Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgCard({ eyebrow: "Software Engineer", title: "Chidi Orji" });
}
