import { Github, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";
import shopping from "@/assets/project-shopping.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import creditcard from "@/assets/project-creditcard.jpg";

const projects = [
  {
    n: "01",
    title: "CUSTOMER SHOPPING BEHAVIOR ANALYSIS",
    image: shopping,
    description:
      "Analyzed 7,900+ customer transactions using Python (Pandas, NumPy, Seaborn) and PostgreSQL (10+ SQL queries), improving data accuracy by 45% and identifying revenue drivers across demographics, discount impact, and loyalty segments. Developed an interactive Power BI dashboard with KPIs (revenue, top products, customer loyalty) — improving decision clarity by 30%.",
    tools: "Python, SQL (PostgreSQL), Power BI",
    analysis: "EDA, Segmentation, KPI Tracking",
    links: [{ label: "GitHub", href: "https://github.com/ParthPatilAnalyst", icon: Github }],
  },
  {
    n: "02",
    title: "E-COMMERCE SUSTAINABLE GROWTH ANALYSIS",
    image: ecommerce,
    description:
      "Analyzed 100,000+ Amazon e-commerce records across 5 analytical dimensions — financial performance, customer insights, logistics, product management, and returns. Built 15+ Matplotlib/Seaborn visualizations and authored strategic recommendations on cancellation reduction, pricing in the 500–1000 band, and B2B segment expansion.",
    tools: "Python, Pandas, NumPy, Matplotlib, Seaborn",
    analysis: "ETL, EDA, Pareto, B2B/B2C Segmentation",
    links: [{ label: "GitHub", href: "https://github.com/ParthPatilAnalyst", icon: Github }],
  },
  {
    n: "03",
    title: "CREDIT CARD ANALYTICS DASHBOARD",
    image: creditcard,
    description:
      "Built an end-to-end Credit Card Analytics Dashboard in Power BI analyzing 50,000+ records, cleaning and transforming data via Power Query and DAX, improving data accuracy by ~25% and creating 10+ KPIs. Designed interactive dashboards with customer segmentation and weekly trend analysis, reducing manual reporting effort by ~40%.",
    tools: "Power BI, Excel, DAX, Power Query",
    analysis: "KPI Tracking, Customer Segmentation, Trend Analysis",
    links: [{ label: "GitHub", href: "https://github.com/ParthPatilAnalyst", icon: Github }],
  },
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-16">
        <SectionLabel primary="Notable" secondary="Projects" />
        <div className="space-y-20">
          {projects.map((p) => (
            <article key={p.n} className="space-y-6">
              <header className="flex items-baseline gap-5">
                <span className="text-5xl font-extrabold text-foreground md:text-6xl">
                  {p.n}
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-primary md:text-3xl">
                  {p.title}
                </h3>
              </header>
              <div className="overflow-hidden rounded-xl border border-border shadow-2xl transition hover:border-primary">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1280}
                  height={768}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="flex flex-col gap-3 self-start">
                  {p.links.map((l) => {
                    const Icon = l.icon;
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/80 px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                      >
                        <Icon size={16} />
                        {l.label}
                        <ExternalLink size={14} />
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
