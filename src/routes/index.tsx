import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Background } from "@/components/portfolio/Background";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parth Patil — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Data Analyst portfolio of Parth Patil — SQL, Python, Power BI, and end-to-end analytics projects across customer behavior, e-commerce growth, and credit card analytics.",
      },
      { property: "og:title", content: "Parth Patil — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Showcasing data analytics projects, dashboards, and case studies by Parth Patil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Parth Patil",
          jobTitle: "Data Analyst",
          email: "mailto:parthpatil2611@gmail.com",
          url: "https://github.com/ParthPatilAnalyst",
          sameAs: [
            "https://linkedin.com/in/parth-s-patil",
            "https://github.com/ParthPatilAnalyst",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Background />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
