import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

const components: MDXComponents = {
  h1: ({ children }: ComponentProps<"h1">) => (
    <h1 className="font-display text-h1 mt-16 mb-6 text-ink">{children}</h1>
  ),
  h2: ({ children }: ComponentProps<"h2">) => (
    <h2 className="font-display text-h2 mt-14 mb-5 text-ink">{children}</h2>
  ),
  h3: ({ children }: ComponentProps<"h3">) => (
    <h3 className="font-display text-h3 mt-10 mb-4 text-ink">{children}</h3>
  ),
  p: ({ children }: ComponentProps<"p">) => (
    <p className="prose-essay mb-6">{children}</p>
  ),
  a: ({ href, children }: ComponentProps<"a">) => (
    <a
      href={href}
      className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }: ComponentProps<"blockquote">) => (
    <blockquote className="my-8 border-l-2 border-accent pl-6 italic text-ink-muted">
      {children}
    </blockquote>
  ),
  code: ({ children }: ComponentProps<"code">) => (
    <code className="font-mono text-[0.9em] bg-bg-tint px-1.5 py-0.5 rounded">
      {children}
    </code>
  ),
  pre: ({ children }: ComponentProps<"pre">) => (
    <pre className="my-6 overflow-x-auto rounded-lg border border-border-faint bg-bg-tint p-5 text-sm font-mono">
      {children}
    </pre>
  ),
  ul: ({ children }: ComponentProps<"ul">) => (
    <ul className="prose-essay mb-6 list-disc pl-6 space-y-2">{children}</ul>
  ),
  ol: ({ children }: ComponentProps<"ol">) => (
    <ol className="prose-essay mb-6 list-decimal pl-6 space-y-2">{children}</ol>
  ),
  hr: () => <hr className="my-12 border-border-faint" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
