export type Course = {
  code: string;
  title: string;
  quarters: string[];
  current?: boolean;
};

export const courses: Course[] = [
  {
    code: "Econ 134A",
    title: "Financial Management",
    quarters: ["Fall 2024", "Winter 2025", "Summer 2025", "Spring 2026"],
    current: true,
  },
  {
    code: "Econ 152",
    title: "Personnel Economics",
    quarters: ["Winter 2026"],
  },
  {
    code: "Econ 5",
    title: "Statistics for Economics",
    quarters: ["Fall 2025"],
  },
  {
    code: "Econ 2",
    title: "Principles of Macroeconomics",
    quarters: ["Spring 2025"],
  },
];

export type StudentQuote = {
  body: string;
  course: string;
  quarter: string;
};

export const studentQuotes: StudentQuote[] = [
  {
    body: "One of the things I really appreciated about his sections was how he encouraged student participation. It was often only after Lars reviewed the topic that it really started to click for me.",
    course: "Econ 5",
    quarter: "Fall 2025",
  },
  {
    body: "Lars' passion for the field of economics and the fulfillment he finds in the success of his students is obvious.",
    course: "Econ 134A",
    quarter: "Summer 2025",
  },
  {
    body: "One of Lars's greatest strengths as a TA is his ability to make complex material accessible without oversimplifying it.",
    course: "Econ 152",
    quarter: "Winter 2026",
  },
];

export const teachingPhilosophyUrl = "/teaching-philosophy.pdf";
