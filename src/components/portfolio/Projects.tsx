import React from "react";
import { Github } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";
import shopping1 from "@/assets/shopping-1.png";
import shopping2 from "@/assets/shopping-2.png";
import ecom1 from "@/assets/ecom-1.png";
import ecom2 from "@/assets/ecom-2.png";
import credit1 from "@/assets/credit-1.png";
import credit2 from "@/assets/credit-2.png";

type Segment = { text: string; highlight?: boolean };

interface Project {
  n: string;
  title: string;
  image1: string;
  image2: string;
  description: Segment[];
  tools: string;
  analysis: string;
  links: { label: string; href: string; icon: React.ElementType }[];
}

const projects: Project[] = [
  {
    n: "01",
    title: "CUSTOMER SHOPPING BEHAVIOR ANALYSIS",
    image1: shopping1,
    image2: shopping2,
    description: [
      { text: "Analyzed " },
      { text: "7,900+ customer transactions", highlight: true },
      { text: " using Python (Pandas, NumPy, Seaborn) and PostgreSQL (10+ SQL queries), " },
      { text: "improving data accuracy by 45%", highlight: true },
      { text: " and identifying " },
      { text: "revenue drivers", highlight: true },
      { text: " across demographics, discount impact, and loyalty segments. Developed an interactive Power BI dashboard with KPIs — " },
      { text: "improving decision clarity by 30%", highlight: true },
      { text: " and supporting retention strategies." },
    ],
    tools: "Python, SQL (PostgreSQL), Power BI",
    analysis: "EDA, Segmentation, KPI Tracking",
    links: [{ label: "GitHub", href: "https://github.com/ParthPatilAnalyst", icon: Github }],
  },
  {
    n: "02",
    title: "E-COMMERCE SUSTAINABLE GROWTH ANALYSIS",
    image1: ecom1,
    image2: ecom2,
    description: [
      { text: "Analyzed " },
      { text: "100,000+ Amazon e-commerce records", highlight: true },
      { text: " across 5 analytical dimensions — financial performance, customer insights, logistics, product management, and returns. Built " },
      { text: "15+ Matplotlib/Seaborn visualizations", highlight: true },
      { text: " and authored strategic recommendations on " },
      { text: "reducing cancellation rates", highlight: true },
      { text: ", optimizing pricing in the 500–1000 band, and " },
      { text: "expanding the B2B segment", highlight: true },
      { text: " — improving operational decision-making clarity." },
    ],
    tools: "Python, Pandas, NumPy, Matplotlib, Seaborn",
    analysis: "ETL, EDA, Pareto, B2B/B2C Segmentation",
    links: [{ label: "GitHub", href: "https://github.com/ParthPatilAnalyst", icon: Github }],
  },
  {
    n: "03",
    title: "CREDIT CARD ANALYTICS DASHBOARD",
    image1: credit1,
    image2: credit2,
    description: [
      { text: "Built an end-to-end " },
      { text: "Credit Card Analytics Dashboard", highlight: true },
      { text: " in Power BI analyzing " },
      { text: "50,000+ records", highlight: true },
      { text: ", cleaning and transforming data via Power Query and DAX, " },
      { text: "improving data accuracy by ~25%", highlight: true },
      { text: " and creating 10+ KPIs. Designed interactive dashboards with customer segmentation and weekly trend analysis, " },
      { text: "reducing manual reporting effort by ~40%", highlight: true },
      { text: " and enabling data-driven decisions." },
    ],
    tools: "Power BI, Excel, DAX, Power Query",
    analysis: "KPI Tracking, Customer Segmentation, Trend Analysis",
    links: [{ label: "GitHub", href: "https://github.com/ParthPatilAnalyst", icon: Github }],
  },
];

function HighlightedText({ segments }: { segments: Segment[] }) {
  return (
    <p className="text-base leading-relaxed text-muted-foreground">
      {segments.map((seg, i) =>
        seg.highlight ? (
          <span key={i} className="font-semibold text-primary">
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </p>
  );
}

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-16">
        <SectionLabel primary="Notable" secondary="Projects" />
        <div className="space-y-24">
          {projects.map((p) => (
            <article key={p.n} className="space-y-6">
              <header className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="text-5xl font-extrabold text-foreground md:text-6xl">
                  {p.n}
                </span>
                <h3 className="text-2xl font-extrabold uppercase leading-tight text-primary md:text-3xl">
                  {p.title}
                </h3>
              </header>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[p.image1, p.image2].map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl transition hover:border-primary"
                  >
                    <img
                      src={src}
                      alt={`${p.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ minHeight: "220px" }}
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                <HighlightedText segments={p.description} />
                <div className="flex flex-col gap-3 self-start">
                  {p.links.map((l) => {
                    const Icon = l.icon;
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-background"
                      >
                        <Icon className="h-4 w-4" />
                        {l.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-bold text-primary">Tools: </span>
                  <span className="text-foreground">{p.tools}</span>
                </p>
                <p>
                  <span className="font-bold text-primary">Analysis: </span>
                  <span className="text-foreground">{p.analysis}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
