import type { MetadataRoute } from "next";
import { siteUrl } from "lib/constants";

const routes = [
  "/",
  "/portfolio",
  "/ml",
  "/certifications",
  "/publications",
  "/applications",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
