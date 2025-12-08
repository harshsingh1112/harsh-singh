import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harsh-singh.vercel.app";

  const routes = ["", "projects", "about", "experience"].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
  }));

  return routes;
}
