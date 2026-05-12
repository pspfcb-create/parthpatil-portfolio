import {
  Database,
  Code2,
  Sigma,
  BarChart3,
  LineChart,
  Table2,
  FileSpreadsheet,
  NotebookPen,
  Github,
  Boxes,
  Cloud,
  PieChart,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";

const columns = [
  {
    title: "Programming\n& Querying",
    items: [
      { icon: Database, label: "SQL" },
      { icon: Code2, label: "Python" },
      { icon: Database, label: "MySQL" },
    ],
  },
  {
    title: "Libraries\n& Frameworks",
    items: [
      { icon: Boxes, label: "Pandas" },
      { icon: Sigma, label: "NumPy" },
      { icon: LineChart, label: "Matplotlib" },
      { icon: PieChart, label: "Seaborn" },
    ],
  },
  {
    title: "Visualization\n& BI Tools",
    items: [
      { icon: BarChart3, label: "Power BI" },
      { icon: BarChart3, label: "Tableau" },
      { icon: Table2, label: "Power Query / DAX" },
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: FileSpreadsheet, label: "Google Sheets" },
      { icon: NotebookPen, label: "Jupyter" },
      { icon: Github, label: "GitHub" },
      { icon: Cloud, label: "AWS" },
    ],
  },
  {
    title: "Analytical\nMethods",
    items: [
      { icon: Sigma, label: "EDA" },
      { icon: Sigma, label: "Regression Analysis" },
      { icon: Sigma, label: "Hypothesis Testing" },
      { icon: Sigma, label: "A/B Testing" },
      { icon: Sigma, label: "ETL & Data Pipelines" },
      { icon: Sigma, label: "Forecasting" },
      { icon: Sigma, label: "Segmentation" },
    ],
  },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-14">
        <SectionLabel primary="Technical" secondary="Skills" />
        <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-border lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title} className="px-2 md:px-6 first:md:pl-0">
              <h3 className="mb-8 whitespace-pre-line text-3xl font-bold text-primary">
                {col.title}
              </h3>
              <ul className="space-y-5">
                {col.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
                      <Icon size={22} />
                    </span>
                    <span className="text-base font-medium text-foreground">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
