import {Mail, CircleUser, Cake} from "lucide-react";

const pic = new URL(`../assets/selfie.jpg`, import.meta.url).href;

interface TimelineEntry {
  startYear: number;
  endYear: number | "present";
  company: string;
  team: string;
  job: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    startYear: 2026.01,
    endYear: 2026.08,
    company: "(주)솔리어스",
    team: "IT개발팀",
    job: "대리",
    description: "병·의원 홈페이지 및 어드민 페이지 개발",
  },
  {
    startYear: 2020.07,
    endYear: 2024.12,
    company: "(주)닉컴퍼니",
    team: "IT Service 본부",
    job: "대리",
    description: "뱅킹 시스템 구축 및 고도화 프로젝트 수행",
  },
  {
    startYear: 2019.12,
    endYear: 2020.07,
    company: "쌍용교육센터",
    team: "JAVA 기반 융합형 SW개발자 양성과정",
    job: "",
    description: "",
  },
  {
    startYear: 2011.03,
    endYear: 2017.08,
    company: "중앙대학교",
    team: "국제물류학과",
    job: "",
    description: "문화콘텐츠 융합전공",
  },
];

export function Timeline() {      

  return (
    <div className="relative space-y-8">        
      <div className="relative gap-4 inline-flex">
        <img src={pic} className="rounded-full min-w-20 max-w-25"/>
        <ul className="object-center">
            <li><span className="inline-flex items-center gap-2 font-notoSans"><CircleUser className="h-4 w-4"/>장예영</span></li>
            <li><span className="inline-flex items-center gap-2 font-notoSans"><Cake className="h-4 w-4"/>1992.06.16</span></li>
            <li><span className="inline-flex items-center gap-2 font-notoSans"><Mail className="h-4 w-4"/>zzangyeah0@gmail.com</span></li>
        </ul>                        
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-1.5 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20" />

        <div id="timelineConts" className="space-y-8 pb-4 pt-10">
          {timeline.map((entry) => (
            <div
              key={`${entry.company}-${entry.startYear}`}
              className="relative flex flex-col gap-2 pl-8"
            >
              <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary shadow-lg" />
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {entry.startYear}–
                  {typeof entry.endYear === "number"
                    ? entry.endYear
                    : entry.endYear}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 pl-2">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl text-foreground font-notoSans">
                    {entry.company}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/70 font-notoSans">
                    {entry.team}
                    {entry.job && (
                      <span className="font-normal"> | {entry.job}</span>
                    )}
                  </p>
                  <p className="text-sm text-foreground/60 font-notoSans">
                    {entry.description}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
