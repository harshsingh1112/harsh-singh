// app/blog/page.tsx
import type { Metadata } from "next";
import { getBlogPosts } from "./utils";

export const metadata: Metadata = {
  title: "Blog | Harsh Singh",
  description: "Blog section coming soon.",
};

export default function BlogPage() {
  const posts = getBlogPosts(); // currently returns []

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          Blog section is under construction. Check back soon!
        </p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              {post.metadata.title ?? "Untitled post"}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
