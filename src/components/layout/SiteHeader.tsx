import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { projects } from "@/data/projects";

const sectionLinks = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },  
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-background/75 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-foreground/80 transition-colors hover:text-foreground"
          >
            <span className="relative flex items-center gap-1 text-xl font-bold tracking-tight text-foreground">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Jang YeYeong
              </span>
              <span className="hidden text-foreground/60 sm:inline">/ Portfolio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">            
            {sectionLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-foreground/70 transition-colors hover:text-foreground font-notoSans"
              >
                {item.label}
              </Link>
            ))}
           {/* <a
              href="https://jangyeyoung.dev/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/15 hover:text-primary"
            >
              Resume
            </a> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-foreground"
                >
                  Projects
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-70">
                {projects.map((project) => (
                  <DropdownMenuItem key={project.slug} asChild>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex flex-col items-start gap-1 py-2 text-sm"
                    >
                      <span className="font-semibold text-foreground/80">
                        {project.name}
                      </span>                      
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem key={'toyproject'} asChild>
                    <Link
                      to={'toyproject'}
                      className="flex flex-col items-start gap-1 py-2 text-sm"
                    >
                      <span className="font-semibold text-foreground/80">
                        Toy Projects
                      </span>                      
                    </Link>
                  </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground/80 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-border/70 bg-background/95 px-6 py-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Toy projects
                </p>
                <div className="flex flex-col gap-2">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      className="text-base font-semibold text-foreground/80"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                  Explore
                </p>
                <div className="flex flex-col gap-2">
                  {sectionLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="text-base font-semibold text-foreground/80"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <a
                href="https://jangyeyoung.dev/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary"
              >
                Resume
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
