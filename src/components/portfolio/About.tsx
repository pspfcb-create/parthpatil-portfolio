import { Linkedin, Mail, Github, Download } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-12">
        <SectionLabel primary="About" secondary="Me" />
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <h2 className="text-5xl font-bold leading-tight md:text-6xl">
            Hello,
            <br />
            I'm <span className="text-primary">Parth!</span>
          </h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Results-driven{" "}
              <span className="font-semibold text-primary">Data Analyst</span>{" "}
              with hands-on experience in{" "}
              <span className="font-semibold text-primary">
                SQL, Python, Excel, and Power BI
              </span>
              , skilled in{" "}
              <span className="font-semibold text-primary">
                EDA, statistical modeling, regression analysis, and ETL processes
              </span>
              . Adept at building interactive dashboards and translating complex
              data into actionable insights to support data-driven decision-making
              in fast-paced environments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://linkedin.com/in/parth-s-patil"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 text-foreground transition hover:border-primary hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ParthPatilAnalyst"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 text-foreground transition hover:border-primary hover:text-primary"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:parthpatil2611@gmail.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground/80 text-foreground transition hover:border-primary hover:text-primary"
              >
                <Mail size={20} />
              </a>
              <a
                href="#projects"
                className="rounded-full border-2 border-foreground/80 px-6 py-3 text-sm font-semibold underline-offset-4 transition hover:border-primary hover:text-primary hover:underline"
              >
                Projects
              </a>
              <a
                href="/Parth_Patil_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary underline-offset-4 transition hover:bg-primary hover:text-primary-foreground hover:underline"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
