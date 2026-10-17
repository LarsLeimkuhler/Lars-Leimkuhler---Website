"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const links = [
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav
        aria-label="Primary"
        className="island pointer-events-auto flex items-center gap-1 pl-4 pr-2 py-1.5"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 pr-3 pl-1 py-1.5 mr-1 rounded-full hover:bg-bg-tint transition-colors duration-300"
          aria-label="Lars Leimkuhler — Home"
        >
          <span aria-hidden className="eyebrow-dot" />
          <span className="font-display text-[0.9375rem] font-bold tracking-tight text-ink">
            Lars Leimk&uuml;hler
          </span>
        </Link>

        <ul className="flex items-center">
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative inline-flex items-center px-3.5 py-2 rounded-full text-[0.875rem] text-ink-muted transition-colors duration-300 hover:text-ink"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-bg-tint"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 32,
                        mass: 0.7,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${isActive ? "text-ink" : ""}`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
