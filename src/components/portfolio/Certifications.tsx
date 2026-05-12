import { Award } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    title: "HackerRank SQL Golden Badge & SQL (Advanced) Certificate",
    issuer: "HackerRank",
    year: "2026",
    description:
      "Advanced SQL — joins, CTEs, window functions, and query optimization.",
  },
  {
    title: "The Complete Python Bootcamp: Zero to Hero",
    issuer: "Udemy",
    year: "2024",
    description:
      "Python fundamentals, Pandas, NumPy, Matplotlib, file handling, and automation.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "—",
    description:
      "Foundational understanding of AWS Cloud services, architecture, security, and pricing.",
  },
];

export function Certifications() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="certifications" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-12">
        <SectionLabel primary="Certifications" secondary="& Awards" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award size={26} />
              </div>
              <h4 className="mb-1 text-lg font-bold text-primary">{it.title}</h4>
              <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                {it.issuer} · {it.year}
              </p>
              <p className="text-sm text-muted-foreground">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
