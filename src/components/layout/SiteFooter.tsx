import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:zzangyeah0@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/zzyeah0",
    icon: Github,
  },  
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-3 md:self-end">
          <p className="text-sm text-foreground/60">
            © 2026 Jang Ye Yeong. All rights reserved.
          </p>
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
        </div>
      </div>
    </footer>
  );
}
