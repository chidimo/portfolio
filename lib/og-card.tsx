import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * A branded 1200×630 social card matching the site's editorial look —
 * warm paper, oxblood accent, strong type hierarchy. Rendered at build time
 * via next/og (no external fonts, no network).
 */
export function renderOgCard({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FBF9F4",
          color: "#181715",
        }}
      >
        <div style={{ width: 22, background: "#9B1B2A" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "84px 90px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: 9,
                textTransform: "uppercase",
                color: "#8E867A",
                fontWeight: 600,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                marginTop: 30,
                fontSize: 96,
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: -2,
              }}
            >
              {title}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #D6CEC0",
              paddingTop: 30,
              fontSize: 27,
            }}
          >
            <span style={{ color: "#9B1B2A", fontWeight: 600 }}>
              chidiorji.com
            </span>
            <span style={{ color: "#8E867A" }}>
              MSc Artificial Intelligence · University of Salford
            </span>
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
