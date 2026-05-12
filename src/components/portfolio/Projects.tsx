import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";
import shopping from "@/assets/project-shopping.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import creditcard from "@/assets/project-creditcard.jpg";

// A description segment: plain text or a highlighted (gold) phrase
type Segment = { text: string; highlight?: boolean };

interface Project {
  n: string;
  title: string;
  titleImage: string;       // left cover card image
  dashboardImage: string;   // right dashboard screenshot
  description: Segment[];
  tools: string;
  analysis: string;
  links: { label: string; href: string; icon: React.ElementType }[];
}

const projects: Project[] = [
  {
    n: "01",
    title: "CUSTOMER SHOPPING BEHAVIOR ANALYSIS",
    titleImage: shopping,
    dashboardImage: shopping,
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
    titleImage: ecommerce,
    dashboardImage: ecommerce,
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
    titleImage: creditcard,
    dashboardImage: creditcard,
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

// Renders mixed plain + highlighted text segments
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

// Title cover card — styled like the reference (gold bg strip + white title text)
function TitleCard({ n, title, image }: { n: string; title: string; image: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover brightness-50"
        style={{ minHeight: "220px" }}
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="mb-2 inline-block self-start rounded bg-primary px-3 py-1">
          <span className="text-xs font-extrabold uppercase tracking-widest text-background">
            Data Analytics Portfolio
          </span>
        </div>
        <h4 className="text-xl font-extrabold uppercase leading-snug text-white drop-shadow-lg">
          {title}
        </h4>
        <p className="mt-1 text-xs font-medium text-primary">PARTH PATIL</p>
      </div>
      {/* Project number badge */}
      <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background">
        <span className="text-sm font-extrabold">{n}</span>
      </div>
    </div>
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

              {/* ── Header: number + title ── */}
              <header className="flex items-baseline gap-5">
                <span className="text-5xl font-extrabold text-foreground md:text-6xl">
                  {p.n}
                </span>
                <h3 className="text-2xl font-extrabold uppercase leading-tight text-primary md:text-3xl">
                  {p.title}
                </h3>
              </header>

              {/* ── Dual image row ── */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* Left: title card */}
                <TitleCard n={p.n} title={p.title} image={p.titleImage} />

                {/* Right: dashboard screenshot */}
                <div className="overflow-hidden rounded-xl border border-border shadow-2xl transition hover:border-primary">
                  <img
                    src={p.dashboardImage}
                    alt={`${p.title} dashboard`}
                    width={1280}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ minHeight: "220px" }}
                  />
                </div>
              </div>

              {/* ── Description + links ── */}
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

              {/* ── Tools & Analysis ── */}
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
