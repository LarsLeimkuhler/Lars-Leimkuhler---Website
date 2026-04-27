import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { courses, studentQuotes, teachingPhilosophyUrl } from "@/lib/teaching";

export const metadata: Metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10">
      <header className="pt-32 sm:pt-44 pb-20 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <Reveal as="span" className="eyebrow">
            <span className="eyebrow-dot" />
            Teaching
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          <Reveal as="h1" className="font-display text-h1 text-ink max-w-3xl">
            Courses I&rsquo;ve TA&rsquo;d at UCSB.
          </Reveal>
          <Reveal index={1}>
            <p className="mt-8 text-[1.125rem] leading-[1.65] text-ink-muted max-w-2xl">
              So far, I have TA&rsquo;ed four courses across the major in two
              years (some of them multiple times!). The range of subjects
              includes introductory macroeconomics, financial economics and
              labour classes. You can find the teaching philosophy behind how I
              run sections below.
            </p>
          </Reveal>
        </div>
      </header>

      {/* COURSES */}
      <section className="border-t border-border-faint pt-12 pb-24 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <p className="mono-label">Courses</p>
        </div>
        <ol className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          {courses.map((c, i) => (
            <Reveal as="li" index={i} key={c.code}>
              <article className="grid grid-cols-12 gap-x-6 items-baseline py-7 border-b border-border-faint last:border-b-0">
                <div className="col-span-12 sm:col-span-3 lg:col-span-3 mono-label tabular-nums">
                  {c.code}
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-6 mt-2 sm:mt-0">
                  <h3 className="font-display text-[1.625rem] sm:text-[1.875rem] leading-[1.18] text-ink">
                    {c.title}
                  </h3>
                  {c.current && (
                    <span className="mt-2 inline-flex items-center gap-1.5 mono-label">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                      Currently teaching
                    </span>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-3 lg:col-span-3 mt-2 sm:mt-0 sm:text-right text-[0.9375rem] text-ink-muted">
                  {c.quarters.join(" · ")}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* TEACHING PHILOSOPHY */}
      <section className="border-t border-border-faint py-24 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <p className="mono-label">Philosophy</p>
        </div>
        <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          <Reveal>
            <a
              href={teachingPhilosophyUrl}
              className="group block bezel transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-ambient-lg)]"
            >
              <div className="bezel-inner">
                <div className="flex items-start justify-between gap-6">
                  <span className="mono-label inline-flex items-center gap-2">
                    <BookOpen weight="regular" className="w-3.5 h-3.5" />
                    Document
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg-elevated border border-border-faint transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:rotate-45">
                    <ArrowUpRight
                      weight="regular"
                      className="w-4 h-4 text-ink transition-colors duration-500 group-hover:text-bg-elevated"
                    />
                  </span>
                </div>
                <h2 className="mt-6 font-display text-h2 text-ink leading-[1.08] max-w-xl">
                  Teaching philosophy.
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.65] text-ink-muted max-w-xl">
                  How I think about section, problem sets, office hours, and
                  what students should walk away with — written up in a short
                  document.
                </p>
                <p className="mt-6 text-[0.9375rem] text-accent">Read the document</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* STUDENT QUOTES */}
      <section className="border-t border-border-faint py-24 pb-32 grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-3">
          <p className="mono-label">In their words</p>
        </div>
        <div className="col-span-12 lg:col-span-9 mt-6 lg:mt-0">
          <Reveal>
            <h2 className="font-display text-h2 text-ink max-w-2xl leading-[1.1]">
              What students said in their evaluations.
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="mt-6 text-[1.0625rem] text-ink-muted max-w-xl">
              A small selection from anonymous end-of-quarter evaluations.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {studentQuotes.map((q, i) => (
              <Reveal as="li" index={i} key={i} className="h-full">
                <figure className="h-full bezel transition-transform duration-500 hover:-translate-y-0.5">
                  <blockquote className="bezel-inner h-full flex flex-col">
                    <Quotes
                      weight="fill"
                      className="w-5 h-5 text-accent shrink-0"
                      aria-hidden
                    />
                    <p className="mt-5 font-display text-[1.375rem] leading-[1.3] text-ink flex-1">
                      &ldquo;{q.body}&rdquo;
                    </p>
                    <figcaption className="mt-6 pt-5 border-t border-border-faint mono-label flex items-center justify-between">
                      <span>{q.course}</span>
                      <span className="text-ink-faint">{q.quarter}</span>
                    </figcaption>
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
