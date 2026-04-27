import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { getAllPosts } from "@/lib/posts";
import "katex/dist/katex.min.css";

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const { data } = matter(raw);
    return { title: data.title ?? slug, description: data.description };
  } catch {
    return { title: "Not found" };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const file = path.join(POSTS_DIR, `${slug}.mdx`);

  let frontmatter: Record<string, unknown>;
  try {
    const raw = await fs.readFile(file, "utf8");
    frontmatter = matter(raw).data;
  } catch {
    notFound();
  }

  const { default: Post } = await import(`@/content/posts/${slug}.mdx`);

  const date = frontmatter.date as string | undefined;
  const title = frontmatter.title as string | undefined;

  return (
    <article className="mx-auto max-w-6xl px-6 sm:px-10">
      <div className="grid grid-cols-12 gap-x-6 pt-20 sm:pt-28 pb-16">
        <div className="col-span-12 lg:col-span-3">
          <Link
            href="/writing"
            className="mono-label inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <ArrowLeft weight="regular" className="w-3 h-3" />
            All writing
          </Link>
        </div>

        <div className="col-span-12 lg:col-span-9 mt-12 lg:mt-0">
          {date && (
            <p className="mono-label mb-6">
              {dateFormatter.format(new Date(date))}
            </p>
          )}
          {title && (
            <h1 className="font-display text-h1 text-ink leading-[1.05] max-w-3xl">
              {title}
            </h1>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-6 pb-32">
        <div className="hidden lg:col-span-3 lg:block" />
        <div className="col-span-12 lg:col-span-9">
          <div className="max-w-2xl">
            <Post />
          </div>
        </div>
      </div>
    </article>
  );
}
