import {ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Timeline } from "@/components/Timeline";
import { images } from "@/img/portfolioimg";

// 이미지 Preload 함수
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

// 프로젝트 이미지 Preload
const imageUrls = Object.values(images).map((title) => title.join(",")).join().split(",");
imageUrls.forEach((url) => {    
  preloadImage(url).catch((error) => console.error(`Failed to preload image: ${url}`, error));
});

const hasKorean = (text: string) => /[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(text);

// 프로젝트 company 값별 카드 구분 스타일
const companyStyles: Record<string, { border: string; arrow: string }> = {
  solious: { border: "border-primary/50 hover:border-primary", arrow: "text-primary" },
  nic: { border: "border-accent/50 hover:border-accent", arrow: "text-accent" },
};
const defaultCompanyStyle = { border: "border-border/70 hover:border-primary/50", arrow: "text-primary" };

const skillGroups = [
  {
    title: "Hard Skills",
    tools: [
      "JavaScript",
      "Java",
      "TypeScript",
      "SQL",
      "JSP",
      "React",
      "Vue.js",
      "Next.js",
      "HTML",
      "CSS",
      "MariaDB",
      "Linux",
      "Jenkins",
      "PM2",
      "Git", "SVN", "Claude"
    ],
    //description:
    //  "Strong",    
  },
  {
    title: "Soft Skills",
    tools: [
      "의사소통","협업", "문제 해결", "일정 및 우선순위 관리", "주도성", "책임감", "적응력", "문서화"
    ],      
    //description:
    //  "Evolving cohesive component libraries that keep brands consistent across pages and platforms.",
  },
];

/* 주석처리된 157~185행에서 사용 
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
];*/

export default function Index() {
  return (
    <div className="space-y-24 pb-24">
      <section
        id="about"
        className="container grid gap-16 pt-20 md:grid-cols-[minmax(0,1fr)_380px] md:pt-14"
      >
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <Sparkles className="h-4 w-4" /> Web developer
          </p>
          <h1 className="font-ibmPlexSans text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            업무를 이해하고,  
          </h1>
          <h1 className="font-ibmPlexSans text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">            
            서비스로 구현하며,
          </h1>
          <h1 className="font-ibmPlexSans text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
            지속적으로 개선하는 개발자
          </h1>
          
          <p className="text-lg  max-w-2xl text-foreground/70 md:text-l font-notoSans">
            금융 시스템 구축 및 고도화부터 웹 서비스 개발·운영까지 다양한 프로젝트를 경험했습니다. 요구사항 분석과 시스템 설계·개발·테스트를 수행하고, 홈페이지·어드민·CRM의 기능 개발과 서비스 구조 개선을 통해 사용자 경험과 운영 효율을 높여 왔습니다.

          </p>
          <p className="text-lg  max-w-2xl text-foreground/70 md:text-l font-notoSans">다양한 업무 환경과 기술을 빠르게 이해하고, 이해관계자와의 협업을 통해 요구사항을 구체화하며 실제 서비스에 반영하는 것을 강점으로 삼고 있습니다.</p>
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
                5년+
              </dd>
            </div>
            {/*
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-foreground/50">
                Favorite toolkit
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground">
                React
              </dd>
            </div> */}
          </dl>
          <div id="skills" className="space-y-4 pt-6">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
              Skill architecture
            </p>
            <div className="flex flex-col gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="group relative overflow-hidden rounded-2xl bg-card/20 p-5 transition-transform duration-500 "
                >
                  <div className="absolute inset-0 translate-y-10 bg-card-gloss opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary/80">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[0.75rem] font-semibold tracking-[0.2em] text-primary ${
                            hasKorean(tool) ? "font-notoSans" : "uppercase"
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-card/20 p-8 shadow-glow">
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

      <section id="work" className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">
              Projects
            </p>           
          </div>
          {/*<a
            href="mailto:hello@jangyeyoung.dev"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/60"
          >
            Book a discovery call
            <ArrowUpRight className="h-4 w-4" />
          </a>*/}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {projects.map((project) => {
            const style = companyStyles[project.company] ?? defaultCompanyStyle;
            return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border ${style.border} bg-card/20 p-5 transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/50">
                <div className="flex items-center gap-2">                 
                  <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                    {project.year}
                  </span>
                </div>
                <ArrowUpRight className={`h-5 w-5 ${style.arrow} transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1`} />
              </div>
              <h3 className="mt-3 font-display text-xl text-foreground font-notoSans">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/65 font-notoSans">{project.summary}</p>
            </Link>
            );
          })}         
          <Link
            key={'toyproject'}
            to={"toyproject"}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-primary/20 via-accent/20 to-background p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/50">
              <span className="px-3 py-1 text-secondary-foreground">
                AND...
              </span>
              <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <h3 className="mt-3 font-display text-xl text-foreground">
              Toy Projects
            </h3>
            {/*<p className="mt-3 text-sm text-foreground/65">summary</p>*/}
              <div className="mt-3 flex flex-wrap gap-2">                
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
