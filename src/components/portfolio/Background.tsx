import { GraduationCap, Briefcase } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";

const education = [
  {
    title: "MBA, Analytics & Marketing",
    org: "CSIBER, Kolhapur",
    period: "Graduated 2025",
    bullets: [
      "Relevant Coursework: Business Statistics, Data Mining, Marketing Analytics, Operations Research, Data-Driven Decision Making.",
    ],
  },
];

const experience = [
  {
    title: "Business Analyst Intern",
    org: "Quantum IT Innovation, Remote",
    period: "Tools: Excel, Python, Power BI, Wireframing & Documentation",
    bullets: [
      "Collaborated with 5+ cross-functional teams to gather, analyze, and document business and data requirements, delivering 10+ BRDs, FRDs, SRS, and DFDs and reducing rework by 20%.",
      "Analyzed workflows using data-driven methods and implemented process improvements, increasing task efficiency by 15%.",
      "Prepared weekly analytical reports, tracked KPIs, and ensured timely project delivery through structured stakeholder communication.",
    ],
  },
  {
    title: "Data Analyst Intern",
    org: "Shivshakti Distributors, Kolhapur",
    period: "Tools: Python, NumPy, Pandas, Excel, Power BI",
    bullets: [
      "Collected, cleaned, validated, and analyzed 100,000+ records using Python (Pandas, NumPy) and Excel, improving data accuracy by 30%.",
      "Performed customer churn analysis using EDA, segmentation, regression analysis, forecasting, and hypothesis testing.",
      "Built ETL pipelines and developed interactive Power BI dashboards with 10+ KPIs to support real-time, data-driven decision-making.",
    ],
  },
];

interface EntryProps {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  Icon: typeof GraduationCap;
}

function Entry({ title, org, period, bullets, Icon }: EntryProps) {
  return (
    <div className="flex gap-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon size={28} />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-primary">{title}</h4>
        <p className="text-sm font-semibold text-foreground">{org}</p>
        <p className="text-xs italic text-muted-foreground">{period}</p>
        <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Background() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="background" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-14">
        <SectionLabel primary="Education & Experience" secondary="Background" />
        <div className="grid gap-12 md:grid-cols-2 md:divide-x md:divide-border">
          <div className="space-y-8 md:pr-8">
            <h3 className="text-3xl font-extrabold tracking-wide">EDUCATION</h3>
            {education.map((e) => (
              <Entry key={e.title} {...e} Icon={GraduationCap} />
            ))}
          </div>
          <div className="space-y-8 md:pl-8">
            <h3 className="text-3xl font-extrabold tracking-wide">EXPERIENCE</h3>
            {experience.map((e) => (
              <Entry key={e.title} {...e} Icon={Briefcase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
