// app/blog/utils.ts
import fs from "fs";
import path from "path";

export type Metadata = {
  title?: string;
  publishedAt?: string;
  summary?: string;
  draft?: boolean;
  [key: string]: any;
};

export type BlogPost = {
  slug: string;
  metadata: Metadata;
  content: string;
};

/**
 * Very safe frontmatter parser.
 * Works even if there's no frontmatter block.
 */
function parseFrontmatter(fileContent: string): { metadata: Metadata; content: string } {
  // If file doesn't start with '---', just return raw content
  if (!fileContent.trim().startsWith("---")) {
    return {
      metadata: {
        title: "Untitled",
        summary: "",
        publishedAt: new Date().toISOString(),
        draft: false,
      },
      content: fileContent.trim(),
    };
  }

  // Split on the first two --- markers: ['', frontmatter, rest...]
  const parts = fileContent.split("---");
  const frontmatterBlock = parts[1] ?? "";
  const body = parts.slice(2).join("---").trim();

  const metadata: Metadata = {};

  frontmatterBlock
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex === -1) return;

      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Remove surrounding quotes if present
      value = value.replace(/^['"](.*)['"]$/, "$1");

      if (key === "draft") {
        metadata.draft = value === "true";
      } else {
        metadata[key] = value;
      }
    });

  if (!metadata.publishedAt) metadata.publishedAt = new Date().toISOString();
  if (!metadata.title) metadata.title = "Untitled";
  if (!metadata.summary) metadata.summary = "";
  if (typeof metadata.draft !== "boolean") metadata.draft = false;

  return { metadata, content: body };
}

/**
 * This is what your About page imports.
 * For now it just reads a file and parses optional frontmatter.
 */
export function readMDXFile(filePath: string): { metadata: Metadata; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(raw);
}

/**
 * Dummy blog helpers so blog is effectively "off".
 * getBlogPosts() returns an empty list, so /blog shows nothing.
 */
export function getBlogPosts(): BlogPost[] {
  return [];
}

// Optional helper kept simple; you can remove if not used anywhere.
export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
