// app/blog/utils.ts

export type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    summary?: string;
    publishedAt?: string;
  };
  content?: string;
};

// For now, just return an empty list so nothing can crash.
export function getBlogPosts(): BlogPost[] {
  return [];
}
