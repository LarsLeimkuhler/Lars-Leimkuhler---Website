import Link from "next/link";
import {
  ArrowUpRight,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { HeroFull, FeatureSection } from "@/components/scene-stage";

export default function Home() {
  return (
    <>
      <HeroFull />

      <FeatureSection
        id="research"
        index="01"
        eyebrow="Research"
        title="Research Papers"
        body="I am interested in Labour, Personnel Economics and Taxation."
        href="/research"
        cta="See papers"
        imageSrc="/media/research.jpg"
        imageAlt="Lars working at his desk"
      />

      <FeatureSection
        id="teaching"
        index="02"
        eyebrow="Teaching"
        title="Courses Taught and Teaching Philosophy"
        body="Currently TAing Statistics for Economics (Econ 5) at UCSB, and I have been nominated for a UCSB-wide teaching award. Last year I also mentored a first-year PhD student through the program. I focus on building intuition first, then formalising the concepts."
        href="/teaching"
        cta="See courses & philosophy"
        imageSrc="/media/teaching.jpg"
        imageAlt="Lars teaching at the chalkboard"
        reverse
      />

      <section id="contact" className="relative pt-24 pb-32 sm:pt-32 sm:pb-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-4">
              <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-ink-muted tabular-nums">
                03 · Contact me
              </span>
              <h2 className="mt-5 font-display text-h1 text-ink leading-[1.04] tracking-[-0.028em]">
                Say hello.
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <p className="text-[1.0625rem] leading-[1.7] text-ink-muted max-w-2xl">
                Email is the fastest way to reach me.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <a
                  href="mailto:lleimkuhler@ucsb.edu"
                  className="group block bezel transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-ambient-lg)]"
                >
                  <div className="bezel-inner flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-ink-muted">
                        Email
                      </span>
                      <p className="mt-3 font-display text-[1.5rem] sm:text-[1.75rem] leading-[1.15] text-ink transition-colors group-hover:text-accent">
                        lleimkuhler@ucsb.edu
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated border border-border-faint transition-all duration-500 group-hover:bg-accent group-hover:border-accent">
                      <Envelope
                        weight="regular"
                        className="w-4 h-4 text-ink transition-colors duration-500 group-hover:text-bg-elevated"
                      />
                    </span>
                  </div>
                </a>

                <div className="bezel">
                  <div className="bezel-inner flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-ink-muted">
                        Office
                      </span>
                      <p className="mt-3 font-display text-[1.5rem] sm:text-[1.75rem] leading-[1.15] text-ink">
                        North Hall 2015
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated border border-border-faint">
                      <MapPin weight="regular" className="w-4 h-4 text-ink" />
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/larsleimkuhler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bezel transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-ambient-lg)]"
                >
                  <div className="bezel-inner flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-ink-muted">
                        LinkedIn
                      </span>
                      <p className="mt-3 font-display text-[1.5rem] sm:text-[1.75rem] leading-[1.15] text-ink transition-colors group-hover:text-accent">
                        larsleimkuhler
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated border border-border-faint transition-all duration-500 group-hover:bg-accent group-hover:border-accent">
                      <LinkedinLogo
                        weight="regular"
                        className="w-4 h-4 text-ink transition-colors duration-500 group-hover:text-bg-elevated"
                      />
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/LarsLeimkuhler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bezel transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[var(--shadow-ambient-lg)]"
                >
                  <div className="bezel-inner flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-ink-muted">
                        GitHub
                      </span>
                      <p className="mt-3 font-display text-[1.5rem] sm:text-[1.75rem] leading-[1.15] text-ink transition-colors group-hover:text-accent">
                        LarsLeimkuhler
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated border border-border-faint transition-all duration-500 group-hover:bg-accent group-hover:border-accent">
                      <GithubLogo
                        weight="regular"
                        className="w-4 h-4 text-ink transition-colors duration-500 group-hover:text-bg-elevated"
                      />
                    </span>
                  </div>
                </a>
              </div>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 text-ink text-[0.9375rem] font-medium"
              >
                <span>Or use the contact form</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated border border-border-faint transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:rotate-45">
                  <ArrowUpRight
                    weight="regular"
                    className="w-4 h-4 text-ink transition-colors duration-500 group-hover:text-bg-elevated"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
