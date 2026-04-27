import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-faint mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-h3 text-ink">Lars Leimk&uuml;hler</p>
          <p className="mt-2 text-ink-muted text-[0.9375rem] max-w-md">
            PhD Student in Economics at UC Santa Barbara.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-2">
          <ul className="flex gap-6 text-[0.9375rem] text-ink-muted">
            <li>
              <Link href="/contact" className="transition-colors hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://econ.ucsb.edu/people/students/lars-leimkuhler"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-ink"
              >
                UCSB Econ
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/larsleimkuhler/"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LarsLeimkuhler"
                rel="noopener noreferrer"
                target="_blank"
                className="transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
          <p className="mono-label">© {new Date().getFullYear()} · Built with care</p>
        </div>
      </div>
    </footer>
  );
}
