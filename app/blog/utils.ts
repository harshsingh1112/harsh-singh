// app/blog/utils.ts

export type Metadata = {
  title: string;
  publishedAt?: string;
  summary?: string;
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  metadata: Metadata;
  content?: string;
};

/**
 * Blog is disabled for now, so this just returns an empty list.
 */
export function getBlogPosts(): BlogPost[] {
  return [];
}

/**
 * Kept only so any existing imports don't break.
 * It doesn't actually read anything right now.
 */
export function readMDXFile(
  _filePath: string,
): { metadata: Metadata; content: string } {
  return {
    metadata: {
      title: 'Untitled',
      publishedAt: new Date().toISOString(),
      summary: '',
      draft: false,
    },
    content: '',
  };
}

/**
 * Safe date formatter if anything still calls it.
 */
export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
