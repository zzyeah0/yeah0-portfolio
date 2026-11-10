import {
  ArrowRight,
  ExternalLink,
  House,
  Sparkles,
  MonitorSmartphone,
  Server,
  Cloud,
  FolderGit2,
  Ellipsis,
  type LucideIcon,
} from "lucide-react";
import { useState, type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { images } from "@/img/portfolioimg";
import { Gallery } from "@/components/Gallery";
import { groupSkills, type SkillCategory } from "@/data/skillCategories";

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  Infra: Cloud,
  Tools: FolderGit2,
  Etc: Ellipsis,
};

type LearnedItem = { text: string; children?: string[] };

type ToyProject = {
  tab: string;
  title: string;
  summary: string;
  skills: string[];
  howTitle: string;
  howSubtitle?: string;
  steps?: string[];
  gallery?: {
    images: ComponentProps<typeof Gallery>["images"];
    name: string;
  };
  link?: { type: "external" | "route"; href: string; label: string };
  learned: LearnedItem[];
};

const reactLearned: LearnedItem[] = [
  {
    text: "React 전환 프로젝트 투입 전 React 학습",
    children: [
      "SSR, CSR 개념 및 차이점 학습",
      "JSX, hooks 등 react 기본 개념 학습",
    ],
  },
  { text: "Next.js 이용한 웹페이지 생성" },
];

const toyProjects: ToyProject[] = [
  {
    tab: "Portfolio",
    title: "PORTFOLIO",
    summary: "지금 보고 계신 이 웹페이지는 이렇게 만들어졌습니다!",
    skills: [
      "React",
      "TypeScript",
      "Builder.io",
      "github",
      "lucide-react",
      "vite",
      "tailwind css",
    ],
    howTitle: "How to build",
    howSubtitle: "AI 기반 퍼블리싱 플랫폼 Builder.io를 이용하여 퍼블리싱",
    steps: [
      "프롬프트 입력",
      "프롬프트 추가 입력을 통한 UI수정",
      "내용 입력 및 코드 수정",
      "Github Pages를 이용한 호스팅",
    ],
    gallery: { images: images.portfolio, name: "portfolio" },
    learned: [
      { text: "AI 기반 퍼블리싱 플랫폼 프롬프트 작성 역량 습득" },
      { text: "typescript, tailwind css, vite 등 새로운 기술스택 습득" },
      { text: "프리로딩을 통한 이미지 로딩시간 단축" },
      { text: "github Pages를 이용한 정적 웹 페이지 배포" },
      { text: "github Actions를 이용한 CI/CD 자동화" },
    ],
  },
  {
    tab: "Band Scraping Program",
    title: "BAND SCRAPING PROGRAM",
    summary: "네이버 밴드 스크래핑 프로그램",
    skills: ["PYTHON", "Selenium"],
    howTitle: "How to work",
    steps: [
      "프로그램 실행",
      "브라우저 실행 및 band.us 로그인 페이지로 이동",
      "로그인 후 밴드 선택하면 작성자, 작성일자, 내용 등 자동 크롤링 시작",
      "크롤링 완료 후 지정된 경로에 csv 파일 생성",
    ],
    gallery: { images: images.scraping, name: "scraping" },
    learned: [
      { text: "python을 이용한 스크래핑 프로그램 구축 경험" },
      { text: "웹 자동화 오픈소스 프레임워크 selenium 사용 경험" },
    ],
  },
  {
    tab: "Spider Game",
    title: "SPIDER GAME",
    summary: "스파이더 게임",
    skills: ["REACT", "Next.js"],
    howTitle: "How to work",
    gallery: { images: images.spidergame, name: "spidergame" },
    link: {
      type: "external",
      href: `/${import.meta.env.VITE_BASE_URL}game`,
      label: "게임 해보기",
    },
    learned: reactLearned,
  },
  /*{
    tab: "Movie Recommand",
    title: "MOVIE RECOMMAND",
    summary: "내가 보고 싶은 영화는?",
    skills: ["REACT", "Cloudflare"],
    howTitle: "How to work",
    link: { type: "route", href: "/movie", label: "추천 받기" },
    learned: reactLearned,
  },*/
];

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-bold text-foreground font-notoSans">
      <Sparkles className="size-4 min-w-4 text-primary" />
      {children}
    </h2>
  );
}

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary font-notoSans hover:bg-primary/20";

export default function ToyProjects() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const [projectNum, setProjectNum] = useState(0);
  const project = toyProjects[projectNum];
  const skillGroups = groupSkills(project.skills);

  return (
    <article className="relative space-y-16 pb-24">
      {/* Hero */}
      <section className="container space-y-8 pt-20 md:pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <House className="h-3.5 w-3.5" />
          </Link>
          {toyProjects.map((item, i) => (
            <button
              key={item.tab}
              type="button"
              onClick={() => setProjectNum(i)}
              className={`rounded-full px-4 py-2 text-xs font-semibold font-notoSans transition-colors ${
                i === projectNum
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight text-foreground font-notoSans md:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-foreground/60 font-notoSans">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="container">
        <SectionTitle>기술스택</SectionTitle>
        <div className="mt-2 space-y-3 rounded-2xl border border-border/30 bg-card/30 p-6">
          {skillGroups.map(({ category, skills }) => {
            const Icon = categoryIcons[category];
            return (
              <div
                key={category}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="flex w-28 shrink-0 items-center gap-2 text-sm font-semibold text-foreground/70 font-notoSans">
                  <Icon className="size-4 min-w-4 text-primary" />
                  {category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How to build / work */}
      <section className="container space-y-4">
        <SectionTitle>{project.howTitle}</SectionTitle>
        {project.howSubtitle && (
          <p className="text-sm font-semibold text-primary font-notoSans">
            {project.howSubtitle}
          </p>
        )}

        <div className="space-y-6 rounded-2xl border border-border/30 bg-card/30 p-6 shadow-sm">
          {project.steps && (
            <ul className="space-y-3">
              {project.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex size-6 min-w-6 items-center justify-center rounded-full bg-primary text-[0.65rem] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/70 font-notoSans">
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {project.gallery && (
            <Gallery
              images={project.gallery.images}
              projectName={project.gallery.name}
            />
          )}

          {project.link && (
            <div className="flex justify-end">
              {project.link.type === "external" ? (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {project.link.label}
                </a>
              ) : (
                <Link to={project.link.href} className={linkClass}>
                  <ArrowRight className="h-3.5 w-3.5" />
                  {project.link.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* What I Learned */}
      <section className="container space-y-4">
        <SectionTitle>What I Learned</SectionTitle>
        <div className="rounded-2xl border border-border/30 bg-card/30 p-6 shadow-sm">
          <ul className="space-y-2">
            {project.learned.map((item) => (
              <li key={item.text} className="space-y-2">
                <div className="flex gap-3">
                  <span className="mt-2.5 size-1.5 min-w-1.5 rounded-full bg-foreground/30" />
                  <p className="text-sm leading-relaxed text-foreground/70 font-notoSans">
                    {item.text}
                  </p>
                </div>
                {item.children && (
                  <ul className="space-y-2 pl-6">
                    {item.children.map((child) => (
                      <li key={child} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 min-w-1.5 rounded-full bg-foreground/15" />
                        <p className="text-sm leading-relaxed text-foreground/60 font-notoSans">
                          {child}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 상단 배경 그라데이션 (ProjectDetails 와 동일, 마지막 자식 + !mt-0 필수) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 !mt-0 h-[32rem] bg-gradient-to-b from-primary/10 via-accent/10 to-transparent" />
    </article>
  );
}
