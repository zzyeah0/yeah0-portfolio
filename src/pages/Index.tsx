import {ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Timeline } from "@/components/Timeline";

const skillGroups = [
  {
    title: "Strong",
    tools: [
      "JavaScript",
      "JSP",
      "Java",
      "React",
      "SQL",
    ],
    //description:
    //  "Strong",    
  },
  {
    title: "Kowledgable",
    tools: [
      "HTML",
      "CSS",
      "Python",
      "Next.js",
      "TypeScript",
    ],
    //description:
    //  "Evolving cohesive component libraries that keep brands consistent across pages and platforms.",
  },
  {
    title: "ETC",
    tools: ["Git", "SVN", "AWS"],
    //description:
    //  "Connecting polished interfaces to data workflows, automation, and reliable release pipelines.",
  },
];


const profile = [
  {
    title: "(주)닉컴퍼니",
    detail:
      [
        "IT Service 본부",      
        "대리",
      ],
    year: "2020.07 - 2024.12",
  },
  {
    title: "쌍용교육센터",
    detail:
      [
        "JAVA 기반 융합형 SW개발자 양성과정",
      ],     
    year: "2019.12 - 2020.07",
  },
  {
    title: "중앙대학교",
    detail:
      [
        "국제물류학과",
        "문화콘텐츠 융합전공",
      ],
    year: "2011.02 - 2017.08",
  },
];


export default function Index() {
  return (
    <div className="space-y-24 pb-24">
      <section
        id="about"
        className="container grid gap-16 pt-20 md:grid-cols-[minmax(0,1fr)_380px] md:pt-28"
      >
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <Sparkles className="h-4 w-4" /> Web developer
          </p>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Welcome!
          </h1>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">            
            I am Web Developer, 
          </h1>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            Jang Yeyeong.
          </h1>
          
          <p className="max-w-2xl text-lg text-foreground/70 md:text-l font-notoSans">
            4년 6개월간 금융권 채널 고도화 프로젝트에 참여하여 인터넷뱅킹, 스마트뱅킹 등 웹 개발 경험이 있습니다. 이 과정에서 다양한 직군의 사람들과 원활히 소통하였으며, 문제 해결을 위해 적극적으로 고민하고 해결했습니다. 금융사의 다소 보수적인 기술 환경을 넘어 다양한 신기술을 탐구하고 적용하며 성장하는 개발자로 나아가고 싶습니다.
          </p>
          {/*<div className="flex flex-wrap items-center gap-4">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              See my toy projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@jangyeyoung.dev"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-6 py-3 text-sm font-semibold text-foreground/80 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
            >
              Start a project conversation
            </a>
          </div>*/}
          <dl className="grid gap-6 pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-foreground/50">
                Experience
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">
                4.5 years
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-foreground/50">
                Favorite toolkit
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">
                React
              </dd>
            </div>
          </dl>
        </div>
        <aside className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-glow">
          <div className="absolute inset-0 bg-card-gloss opacity-90" />
          <div className="relative space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/60">
            Profile
            </p>
            <Timeline />
            {/*<div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm text-primary">
              Currently open for select collaborations that value detail-driven
              craftsmanship and fearless experimentation.
            </div>*/}
          </div>
        </aside>
        {/*<aside className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-glow">
          <div className="absolute inset-0 bg-card-gloss opacity-90" />
          <div className="relative space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground/60">
              Profile
            </p>
            <ul className="space-y-5">
              {profile.map((milestone) => (
                <li key={milestone.title} className="flex gap-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
                        {milestone.year}
                  </span>
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium text-foreground/70">
                      <span>{milestone.title}</span>
                      
                    </div>
                    <p className="text-sm text-foreground/60">{milestone.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 text-sm text-primary">
              Currently open for select collaborations that value detail-driven
              craftsmanship and fearless experimentation.
            </div> 
          </div> 
        </aside>*/}
      </section>

      <section id="skills" className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
              Skill architecture
            </p>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              An adaptable toolbox for delivering thoughtful digital products.
            </h2>
          </div>
          {/*<p className="max-w-lg text-sm text-foreground/60">
            I combine design thinking, engineering rigor, and iterative delivery so every release supports real user needs from day one.
          </p>*/}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-8 shadow-glow transition-transform duration-500 hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="absolute inset-0 translate-y-10 bg-card-gloss opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <p className="text-l uppercase tracking-[0.35em] text-primary/80">
                  {group.title}
                </p>
                {/*<h3 className="font-display text-s text-foreground">
                  {group.description}
                </h3>*/}
                <div className="flex flex-wrap gap-2 pt-0">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
              Projects
            </p>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              You can click to see the details of the project.
            </h2>
          </div>
          {/*<a
            href="mailto:hello@jangyeyoung.dev"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60"
          >
            Book a discovery call
            <ArrowUpRight className="h-4 w-4" />
          </a>*/}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-1">          
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/20 p-7 shadow-glow transition-transform duration-500 hover:-translate-y-3 hover:border-primary/50"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/50">
                <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                  {project.year}
                </span>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground font-notoSans">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-foreground/65 font-notoSans">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70"
                  >
                    {skill}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70"
                >
                  ...
                </span>
              </div>
            </Link>
          ))}         
          <Link
            key={'toyproject'}
            to={"toyproject"}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-accent/20 to-background p-12 shadow-glow transition-transform duration-500 hover:-translate-y-3 hover:border-primary/50"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/50">
              <span className="px-3 py-1 text-secondary-foreground">
                AND...
              </span>
              <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-foreground">
              Toy Projects
            </h3>
            {/*<p className="mt-3 text-sm text-foreground/65">summary</p>*/}
              <div className="mt-6 flex flex-wrap gap-2">                
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                    Portfolio
                  </span>                              
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                    Band Scraping Program
                  </span>                              
                  <span className="inline-flex items-center rounded-full border border-border/70 bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                    SpiderGame
                  </span>                              
              </div>
          </Link>
        </div>
      </section>
{/*
      <section id="contact" className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/20 via-accent/20 to-background p-12 text-center shadow-glow md:p-16">
          <div className="absolute inset-0 bg-card-gloss opacity-80" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">
              Contact
            </p>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Let’s bring your next digital story to life.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-foreground/65">
              Share your goals, timelines, and favorite references. I’ll prepare a
              tailored collaboration plan and a polished visual direction to get
              us started within a week.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:hello@jangyeyoung.dev"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-1"
              >
                Email hello@jangyeyoung.dev
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://cal.com/jangyeyoung/intro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-6 py-3 text-sm font-semibold text-foreground/80 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                Schedule a 30 min call
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
