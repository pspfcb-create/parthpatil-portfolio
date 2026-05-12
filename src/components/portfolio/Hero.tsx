import { ChevronsDown } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import portrait from "@/assets/hero-portrait.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-24 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <SectionLabel primary="DATA ANALYST" secondary="PORTFOLIO" />
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            <span className="block text-foreground">PARTH</span>
            <span className="block text-primary">PATIL</span>
          </h1>
          <p className="max-w-md text-xl text-muted-foreground md:text-2xl">
            I help people find{" "}
            <span className="text-primary">insights</span> through{" "}
            <span className="text-primary">data</span>
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-foreground/90 md:h-[420px] md:w-[420px]">
            <img
              src={portrait}
              alt="Parth Patil portrait"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-foreground/10 p-2 text-primary backdrop-blur-sm transition hover:bg-foreground/20"
      >
        <ChevronsDown className="animate-bounce" size={26} />
      </a>
    </section>
  );
}
