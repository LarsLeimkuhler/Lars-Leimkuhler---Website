import type { Metadata } from "next";
import { ArrowUpRight, FilePdf, Code, Article } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { papers, papersByYear, type Paper } from "@/lib/papers";

export const metadata: Metadata = { title: "Research" };

const statusLabel: Record<Paper["status"], string> = {
  published: "Published",
  forthcoming: "Forthcoming",
  working: "Working paper",
  "revise-resubmit": "Revise & resubmit",
};

export default function ResearchPage() {
  const groups = papersByYear();

  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10">
      <header className="pt-24 sm:pt-36 pb-20 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <p className="mono-label">§ Research</p>
        </div>
        <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          <Reveal as="h1" className="font-display text-h1 text-ink max-w-3xl">
            Working papers, drafts, and published work.
          </Reveal>
          <p className="mt-8 text-[1.125rem] leading-[1.65] text-ink-muted max-w-2xl">
            All papers below have a PDF link. Code and replication archives are
            provided where the project relied on data I assembled myself.
            {" "}
            <span className="text-ink-faint">
              Showing {papers.length} {papers.length === 1 ? "paper" : "papers"}.
            </span>
          </p>
        </div>
      </header>

      <section>
        {groups.map(([year, group], gi) => (
          <div
            key={year}
            className="grid grid-cols-12 gap-x-6 border-t border-border-faint"
          >
            <div className="col-span-12 lg:col-span-3 pt-10 pb-2 lg:pb-10">
              <h2 className="sticky top-24 font-display text-h2 text-ink-faint tabular-nums">
                {year}
              </h2>
            </div>
            <ol className="col-span-12 lg:col-span-9 py-2 lg:py-10">
              {group.map((paper, pi) => (
                <Reveal as="li" key={paper.slug} index={pi}>
                  <article className="group py-8 border-b border-border-faint last:border-b-0">
                    <p className="mono-label mb-3">
                      {String(paper.month).padStart(2, "0")} ·{" "}
                      {statusLabel[paper.status]}
                    </p>
                    <h3 className="font-display text-h3 text-ink leading-[1.18] max-w-2xl">
                      {paper.title}
                    </h3>
                    <p className="mt-4 text-[0.9375rem] text-ink-muted">
                      {paper.coauthors && paper.coauthors.length > 0 ? (
                        <>
                          With {paper.coauthors.join(", ")} ·{" "}
                        </>
                      ) : (
                        <>Sole author · </>
                      )}
                      <span className="italic">{paper.venue}</span>
                    </p>
                    <p className="mt-5 text-[1.0625rem] leading-[1.65] text-ink max-w-2xl">
                      {paper.abstract}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem]">
                      {paper.links.pdf && (
                        <PaperLink
                          href={paper.links.pdf}
                          icon={<FilePdf weight="regular" className="w-4 h-4" />}
                          label="PDF"
                        />
                      )}
                      {paper.links.arxiv && (
                        <PaperLink
                          href={paper.links.arxiv}
                          icon={<Article weight="regular" className="w-4 h-4" />}
                          label="arXiv"
                        />
                      )}
                      {paper.links.code && (
                        <PaperLink
                          href={paper.links.code}
                          icon={<Code weight="regular" className="w-4 h-4" />}
                          label="Code"
                        />
                      )}
                      {paper.links.journal && (
                        <PaperLink
                          href={paper.links.journal}
                          icon={
                            <ArrowUpRight weight="regular" className="w-4 h-4" />
                          }
                          label="Journal"
                        />
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ol>
            {gi === groups.length - 1 && (
              <div className="col-span-12 border-t border-border-faint" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

function PaperLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
