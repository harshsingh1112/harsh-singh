// app/sitemap.ts
import type { MetadataRoute } from 'next';

const baseUrl = 'https://harsh-singh.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog', '/projects', '/about', '/experience'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
