"use client";

import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

export function MagneticCTA({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });

  const iconX = useTransform(sx, (v) => v * 0.45);
  const iconY = useTransform(sy, (v) => v * 0.45);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    mx.set(px * 0.25);
    my.set(py * 0.25);
  }

  function handleLeave() {
    setHovered(false);
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        className="group relative inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-ink text-bg-elevated text-[0.9375rem] font-medium overflow-hidden transition-[background,color] duration-500 hover:bg-accent active:scale-[0.98]"
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          style={{ x: iconX, y: iconY }}
          className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg-elevated text-ink transition-transform duration-500"
        >
          <ArrowUpRight
            weight="regular"
            className={`w-4 h-4 transition-transform duration-500 ${
              hovered ? "translate-x-0.5 -translate-y-0.5" : ""
            }`}
          />
        </motion.span>
      </Link>
    </motion.div>
  );
}
