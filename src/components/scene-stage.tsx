"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Envelope,
  FilePdf,
} from "@phosphor-icons/react";

/* eslint-disable @next/next/no-img-element */

/**
 * Full-bleed hero: HeroShot fills the viewport, overlay text on top.
 * Scrim gradient guarantees contrast against any photo.
 * Entrance animation handled in globals.css via .hero-rise utility (CSS-driven,
 * no motion-lib dependency to avoid hydration timing issues with the parallax
 * useScroll on the same element).
 */
export function HeroFull() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Lars Leimkühler — introduction"
      className="relative h-svh min-h-[640px] w-full overflow-hidden"
    >
      {/* Image layer */}
      <motion.div
        style={{ y: imgY, scale: imgScale, willChange: "transform" }}
        className="absolute inset-0"
      >
        <img
          src="/media/hero.jpg"
          alt="Portrait of Lars Leimkühler"
          className="h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      {/* Scrim — top-to-bottom + left side darken for text legibility */}
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      </motion.div>

      {/* Text layer */}
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 pb-16 sm:pb-0">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-white"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
              UC Santa Barbara · Economics
            </span>

            <h1
              className="mt-6 font-display font-bold text-white tracking-[-0.04em] leading-[0.95] text-[clamp(3rem,9vw,8rem)]"
              style={{
                textShadow: "0 2px 24px rgba(0,0,0,0.35)",
              }}
            >
              Lars
              <br />
              Leimkühler
            </h1>

            <p
              className="mt-6 max-w-xl text-[1.0625rem] sm:text-[1.1875rem] leading-[1.55] text-white/90"
              style={{
                textShadow: "0 1px 12px rgba(0,0,0,0.35)",
              }}
            >
              I am a PhD Student in Economics at UC Santa Barbara. My research
              interests lie in{" "}
              <span className="text-white font-medium">Labour</span>,{" "}
              <span className="text-white font-medium">Personnel Economics</span>{" "}
              and <span className="text-white font-medium">Taxation</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:lleimkuhler@ucsb.edu"
                className="group inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-full bg-white text-ink text-[0.9375rem] font-medium transition-colors duration-500 hover:bg-accent hover:text-white"
              >
                <span>lleimkuhler@ucsb.edu</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-12">
                  <Envelope weight="regular" className="w-4 h-4" />
                </span>
              </a>

              <a
                href="/cv.pdf"
                className="group inline-flex items-center gap-2 pl-4 pr-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white text-[0.9375rem] font-medium transition-colors duration-500 hover:bg-white hover:text-ink"
              >
                <FilePdf weight="regular" className="w-4 h-4" />
                <span>CV</span>
                <ArrowUpRight
                  weight="regular"
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#teaching"
        aria-label="Scroll to teaching"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 inline-flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="font-mono text-[0.625rem] tracking-[0.18em] uppercase">
          Scroll
        </span>
        <span aria-hidden className="hero-bob inline-flex">
          <ArrowDown weight="regular" className="w-4 h-4" />
        </span>
      </a>
    </section>
  );
}

/**
 * A full-width feature section with side-by-side image + copy.
 * Image gets a gentle parallax drift; text fades up on enter.
 * No blur, no scroll-jacking — just a normal-flow section.
 */
export function FeatureSection({
  id,
  index,
  eyebrow,
  title,
  body,
  href,
  cta,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["6%", "-6%"],
  );
  const imgScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1, 1] : [1.06, 1.0],
  );

  return (
    <section
      ref={ref}
      id={id}
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div
          className={`grid grid-cols-12 gap-x-6 gap-y-10 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative overflow-hidden rounded-[var(--radius-bezel)] bg-bg-tint shadow-[var(--shadow-ambient-lg)] aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]">
              <motion.div
                style={{ y: imgY, scale: imgScale, willChange: "transform" }}
                className="absolute inset-0"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  decoding="async"
                  loading="lazy"
                />
              </motion.div>
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[inherit] pointer-events-none"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`${reverse ? "lg:pr-10" : "lg:pl-6"}`}
            >
              <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-ink-muted tabular-nums">
                {index} · {eyebrow}
              </span>
              <h2 className="mt-5 font-display text-h1 text-ink leading-[1.04] tracking-[-0.028em]">
                {title}
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.65] text-ink-muted max-w-xl">
                {body}
              </p>

              <Link
                href={href}
                className="group mt-9 inline-flex items-center gap-3 text-ink text-[0.9375rem] font-medium"
              >
                <span className="relative">
                  <span>{cta}</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink origin-left scale-x-100 transition-transform duration-500 group-hover:scale-x-0"
                  />
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"
                  />
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated border border-border-faint transition-all duration-500 group-hover:bg-accent group-hover:border-accent group-hover:rotate-45">
                  <ArrowUpRight
                    weight="regular"
                    className="w-4 h-4 text-ink transition-colors duration-500 group-hover:text-bg-elevated"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
