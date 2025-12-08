// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { getBlogPosts } from 'app/blog/utils';

export const baseUrl = 'https://harsh-singh.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => {
    const published = post.metadata.publishedAt
      ? new Date(post.metadata.publishedAt) // handle "YYYY-MM-DD" or full ISO
      : new Date();

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: published,
    };
  });

  const routes = ['', 'blog', 'projects', 'about', 'experience'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(), // full Date object, not a sliced string
  }));

  return [...routes, ...blogs];
}
