import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#9B1B2A",
          color: "#FBF9F4",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        C
      </div>
    ),
    size
  );
}
