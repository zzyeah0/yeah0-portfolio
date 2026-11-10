import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  MonitorSmartphone,
  Server,
  Cloud,
  FolderGit2,
  Ellipsis,
  Pin,
  House,
  type LucideIcon,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/projects";
import { groupSkills, type SkillCategory } from "@/data/skillCategories";
import { Gallery } from "@/components/Gallery";

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  Infra: Cloud,
  Tools: FolderGit2,
  Etc: Ellipsis,
};

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (!project) {
    return (
      <section className="container py-24">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/70 bg-card/80 p-12 text-center shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
            Project not found
          </p>
          <h1 className="mt-4 font-display text-3xl text-foreground">
            I haven’t published that build yet.
          </h1>
          <p className="mt-4 text-sm text-foreground/60">
            Explore the rest of my toy projects, or reach out and I’ll share a
            tailored case study for your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-brand"
            >
              Back to portfolio
            </Link>
            <a
              href="mailto:hello@jangyeyoung.dev"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-6 py-3 text-sm font-semibold text-foreground/80"
            >
              Email hello@jangyeyoung.dev
            </a>
          </div>
        </div>
      </section>
    );
  }

  const prevProject = projects[index - 1];
  const nextProject = projects[index + 1];
  const skillGroups = groupSkills(project.skills);

  return (
    <article className="relative space-y-16 pb-24">
      {/* Hero */}
      <section className="container space-y-8 pt-20 md:pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:border-primary/50 hover:text-foreground"
        >
          <House  className="h-3.5 w-3.5" />
        </Link>

        <div
          className={
            project.heroImage
              ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
              : "grid gap-10"
          }
        >
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-border/70 bg-card/60 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-foreground/70">
              {project.year}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-foreground font-notoSans md:text-5xl">
              {project.name}
            </h1>
            <p className="max-w-2xl text-lg text-foreground/60 font-notoSans">
              {project.summary}
            </p>

            {project.keyPoints && project.keyPoints.length > 0 && (
              <div className="space-y-4 pt-2">
                <h2 className="flex items-center gap-2 text-lg font-bold text-foreground font-notoSans">
                  <Sparkles className="size-4 min-w-4 text-primary" />
                  Summary
                </h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.keyPoints.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-2xl border border-border/30 bg-card/30 p-5 shadow-sm"
                    >
                      <span className="mb-3 flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Pin className="size-4" />
                      </span>
                      <p className="text-xl font-bold text-foreground font-notoSans">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm text-foreground/60 font-notoSans">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {project.heroImage && (
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-glow">
              <img
                src={project.heroImage}
                alt={project.name}
                className="w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="container">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground font-notoSans">
          <Sparkles className="size-4 min-w-4 text-primary" />
          기술스택
        </h2>
        <div className="space-y-3 rounded-2xl border border-border/30 bg-card/30 p-6 mt-2">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="flex w-28 shrink-0 items-center gap-2 text-sm font-semibold text-foreground/70 font-notoSans">
                {(() => {
                  const Icon = categoryIcons[category];
                  return <Icon className="size-4 min-w-4 text-primary" />;
                })()}
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
          ))}
        </div>
      </section>

      {/* Improvements: Problem → Solution → Result */}
      {project.improvements.length > 0 && (
        <section className="container space-y-10">
          {project.improvements.map((improvement) => (
            <div key={improvement.title} className="space-y-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground font-notoSans">
                <Sparkles className="size-4 min-w-4 text-primary" />
                {improvement.title}
              </h2>

              <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <FlowCard
                  label="Problem"
                  icon={<AlertCircle className="size-5" />}
                  items={improvement.problem}
                  tone="problem"
                />
                <FlowArrow />
                <FlowCard
                  label="Solution"
                  icon={<CheckCircle2 className="size-5" />}
                  items={improvement.solution}
                  tone="solution"
                />
                <FlowArrow />
                <FlowCard
                  label="Result"
                  icon={<Star className="size-5" />}
                  items={improvement.result}
                  tone="result"
                />
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Contributions */}
      <section className="container space-y-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-foreground font-notoSans">
          <Sparkles className="size-4 min-w-4 text-primary" />
          주요 기여 및 수행 내용
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {project.contributions.map((contribution, i) => {
            const hasImages = contribution.img.length > 0;
            return (
              <div
                key={contribution.level1}
                className={`rounded-2xl border border-border/30 bg-card/30 p-6 shadow-sm ${
                  hasImages ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 min-w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-foreground font-notoSans">
                    {contribution.level1}
                  </h3>
                </div>

                {contribution.level2.length > 0 && (
                  <ul className="mt-4 space-y-2 pl-11">
                    {contribution.level2.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 min-w-1.5 rounded-full bg-foreground/30" />
                        <p className="text-sm leading-relaxed text-foreground/70 font-notoSans">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {hasImages && (
                  <div className="mt-6">
                    <Gallery
                      images={contribution.img}
                      projectName={project.slug}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Prev / Next */}
      <nav className="container">
        <div className="flex items-center justify-between gap-6 border-t border-border/60 pt-8">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex min-w-0 items-center gap-4"
            >
              <span className="flex size-10 min-w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground/60 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                <ArrowLeft className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-foreground/50">
                  이전 프로젝트
                </span>
                <span className="block truncate text-sm font-bold text-foreground font-notoSans">
                  {prevProject.name}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex min-w-0 items-center justify-end gap-4 text-right"
            >
              <span className="min-w-0">
                <span className="block text-xs text-foreground/50">
                  다음 프로젝트
                </span>
                <span className="block truncate text-sm font-bold text-foreground font-notoSans">
                  {nextProject.name}
                </span>
              </span>
              <span className="flex size-10 min-w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground/60 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ) : (
            // 마지막 프로젝트(1번)에서는 Toy Projects 페이지로 이동
            <Link
              to="/toyproject"
              className="group flex min-w-0 items-center justify-end gap-4 text-right"
            >
              <span className="min-w-0">
                <span className="block text-xs text-foreground/50">
                  다음 프로젝트
                </span>
                <span className="block truncate text-sm font-bold text-foreground font-notoSans">
                  Toy Projects
                </span>
              </span>
              <span className="flex size-10 min-w-10 items-center justify-center rounded-full border border-border/70 bg-card/60 text-foreground/60 transition-colors group-hover:border-primary/50 group-hover:text-primary">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          )}
        </div>
      </nav>

      {/* 상단 배경 그라데이션
          - space-y-16 의 첫 자식이 absolute 이면 Hero 에 margin-top 이 붙어 article 이 64px 밀리므로 마지막 자식으로 둔다
          - 마지막 자식은 space-y 의 margin-top 이 붙어 그라데이션이 64px 아래서 시작하므로 !mt-0 으로 제거 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 !mt-0 h-[32rem] bg-gradient-to-b from-primary/10 via-accent/10 to-transparent" />
    </article>
  );
}

type Tone = "problem" | "solution" | "result";

const toneStyles: Record<
  Tone,
  { card: string; head: string; dot: string; text: string }
> = {
  problem: {
    card: "border-destructive/20 bg-destructive/5",
    head: "text-destructive",
    dot: "bg-destructive/60",
    text: "text-foreground/70",
  },
  solution: {
    card: "border-emerald-500/20 bg-emerald-500/5",
    head: "text-emerald-600",
    dot: "bg-emerald-500/60",
    text: "text-foreground/70",
  },
  result: {
    card: "border-primary/40 bg-primary/10 shadow-glow",
    head: "text-primary",
    dot: "bg-primary",
    text: "text-foreground font-semibold",
  },
};

function FlowCard({
  label,
  icon,
  items,
  tone,
}: {
  label: string;
  icon: React.ReactNode;
  items: string[];
  tone: Tone;
}) {
  const style = toneStyles[tone];
  return (
    <div className={`space-y-4 rounded-2xl border p-6 ${style.card}`}>
      <div className={`flex items-center gap-2 ${style.head}`}>
        {icon}
        <h3 className="text-base font-bold">{label}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className={`mt-2.5 size-1.5 min-w-1.5 rounded-full ${style.dot}`}
            />
            <p className={`text-sm leading-relaxed font-notoSans ${style.text}`}>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden items-center justify-center text-primary/50 lg:flex">
      <ArrowRight className="size-5" />
    </div>
  );
}
