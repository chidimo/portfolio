import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chidi Orji",
    short_name: "Chidi Orji",
    description:
      "Full-stack ML engineer building production machine learning systems and the applications around them.",
    start_url: "/",
    display: "browser",
    background_color: "#fbf9f4",
    theme_color: "#9b1b2a",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
