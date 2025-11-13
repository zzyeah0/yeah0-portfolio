import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:zzangyeah0@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/jangyeyoung",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jangyeyoung",
    icon: Linkedin,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="container flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
            crafted in seoul
          </p>
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Let’s build intuitive web experiences together.
          </h2>
         {/* <p className="text-sm text-foreground/70">
            I partner with creative teams and founders to launch polished
            interfaces that feel effortless. Drop a line and let’s start the
            conversation.
          </p>*/}
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/80 shadow-brand transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
          <p className="text-sm text-foreground/60">
            © {year} 장예영 · Built with curiosity and care.
          </p>
        </div>
      </div>
    </footer>
  );
}
