export type Paper = {
  slug: string;
  title: string;
  coauthors?: string[];
  venue: string;
  year: number;
  month: number;
  status: "published" | "forthcoming" | "working" | "revise-resubmit";
  abstract: string;
  links: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    bibtex?: string;
    journal?: string;
  };
};

export const papers: Paper[] = [
  {
    slug: "la-mansion-tax-spillovers",
    title:
      "Do Transfer Taxes Induce Spillovers? Evidence from the Los Angeles Mansion Tax",
    venue: "Working paper",
    year: 2026,
    month: 4,
    status: "working",
    coauthors: [],
    abstract:
      "Coming soon",
    links: {
      pdf: "#",
    },
  },
  {
    slug: "language-first-or-work-first",
    title:
      "Language First or Work First? Caseworker Discretion, Skill Complementarity, and Refugee Integration in Denmark",
    venue: "Working paper",
    year: 2026,
    month: 4,
    status: "working",
    coauthors: ["Emma Jorgenson"],
    abstract:
      "Coming soon",
    links: {
      pdf: "#",
    },
  },
];

export function papersByYear() {
  const sorted = [...papers].sort(
    (a, b) => b.year - a.year || b.month - a.month,
  );
  const groups = new Map<number, Paper[]>();
  for (const p of sorted) {
    const list = groups.get(p.year) ?? [];
    list.push(p);
    groups.set(p.year, list);
  }
  return Array.from(groups.entries());
}
