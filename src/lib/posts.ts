import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  readingTime: number;
  tags?: string[];
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

function estimateReadingTime(markdown: string): number {
  const words = markdown.replace(/[^\w\s]/g, "").split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await fs.readdir(POSTS_DIR).catch(() => [] as string[]);
  const files = entries.filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = await fs.readFile(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description,
        date: data.date ?? "1970-01-01",
        tags: data.tags ?? [],
        readingTime: estimateReadingTime(content),
      } satisfies PostMeta;
    }),
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
