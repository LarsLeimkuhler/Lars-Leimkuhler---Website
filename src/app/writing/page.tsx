import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing" };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default async function WritingPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10">
      <header className="pt-24 sm:pt-36 pb-20 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <p className="mono-label">§ Writing</p>
        </div>
        <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          <Reveal as="h1" className="font-display text-h1 text-ink max-w-3xl">
            Essays in long form. No newsletter, no schedule.
          </Reveal>
          <p className="mt-8 text-[1.125rem] leading-[1.65] text-ink-muted max-w-2xl">
            Notes on housing markets, methodology, and the craft of working
            with messy administrative data. Posted whenever I have something
            worth saying.
          </p>
        </div>
      </header>

      {posts.length === 0 ? (
        <section className="border-t border-border-faint py-24 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-start-4 lg:col-span-9">
            <p className="font-display text-h3 text-ink-muted">
              Nothing published yet.
            </p>
            <p className="mt-3 text-[1.0625rem] text-ink-muted max-w-lg">
              The first essay is in the editor. Check back soon, or
              {" "}
              <Link href="/contact" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
                drop me a line
              </Link>
              {" "}
              if you&rsquo;d like to be told when it goes up.
            </p>
          </div>
        </section>
      ) : (
        <section>
          <ol className="border-t border-border-faint">
            {posts.map((post, i) => (
              <Reveal as="li" index={i} key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group grid grid-cols-12 gap-x-6 items-baseline py-10 border-b border-border-faint transition-colors hover:bg-bg-tint/40"
                >
                  <div className="col-span-12 lg:col-span-3 mono-label">
                    {dateFormatter.format(new Date(post.date))}
                  </div>
                  <div className="col-span-12 lg:col-span-7 mt-2 lg:mt-0">
                    <h2 className="font-display text-h2 text-ink leading-[1.1] transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mt-3 text-[1.0625rem] text-ink-muted max-w-2xl">
                        {post.description}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 lg:col-span-2 mono-label lg:text-right mt-3 lg:mt-0">
                    {post.readingTime} min read
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
