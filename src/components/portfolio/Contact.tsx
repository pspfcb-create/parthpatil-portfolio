import { useState, type FormEvent } from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "@/hooks/use-reveal";

const channels = [
  {
    label: "Phone (WhatsApp)",
    value: "+91 9359321365",
    href: "https://wa.me/919359321365",
    Icon: Phone,
  },
  {
    label: "E-mail",
    value: "parthpatil2611@gmail.com",
    href: "mailto:parthpatil2611@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/parth-s-patil",
    href: "https://linkedin.com/in/parth-s-patil",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/ParthPatilAnalyst",
    href: "https://github.com/ParthPatilAnalyst",
    Icon: Github,
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:parthpatil2611@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-5 py-24 md:px-10">
      <div ref={ref} className="fade-in-up mx-auto max-w-7xl space-y-12">
        <SectionLabel primary="Contact" secondary="Info" />
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 rounded-xl border border-transparent p-2 transition hover:border-primary"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-foreground/80 text-foreground">
                  <Icon size={22} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-primary">
                    {label}
                  </span>
                  <span className="text-base text-foreground underline-offset-4 hover:underline">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Let's <span className="text-primary">connect</span> and
              <br />
              work <span className="text-primary">together!</span>
            </h2>
            <form onSubmit={submit} className="space-y-4">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or opportunity"
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <footer className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Parth Patil · Data Analyst Portfolio
        </footer>
      </div>
    </section>
  );
}
