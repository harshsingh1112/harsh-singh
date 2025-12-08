// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://harsh-singh.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "projects", "about", "experience"].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));

  return routes;
}
