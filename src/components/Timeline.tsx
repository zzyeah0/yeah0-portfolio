import {Mail, CircleUser, Cake} from "lucide-react";
import pic from '@/img/selfie.jpg'

interface TimelineEntry {
  startYear: number;
  endYear: number | "present";
  company: string;
  title: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    startYear: 2020.07,
    endYear: 2024.12,
    company: "(주)닉컴퍼니",
    title: "IT Service 본부",
    description: "대리",
  },
  {
    startYear: 2019.12,
    endYear: 2020.07,
    company: "쌍용교육센터",
    title: "JAVA 기반 융합형 SW개발자 양성과정",
    description: "",
  },
  {
    startYear: 2011.03,
    endYear: 2017.08,
    company: "중앙대학교",
    title: "국제물류학과",
    description: "문화콘텐츠 융합전공",
  },
];

export function Timeline() {  
  
  return (
    <div className="relative space-y-8">        
      <div className="relative gap-4 inline-flex">
        <img src={pic} style={{width:"27%", borderRadius:"100%"}}/>
        <ul>
            <li><span className="inline-flex items-center gap-2 font-notoSans"><CircleUser className="h-4 w-4"/>장예영</span></li>
            <li><span className="inline-flex items-center gap-2 font-notoSans"><Cake className="h-4 w-4"/>1992.06.16</span></li>
            <li><span className="inline-flex items-center gap-2 font-notoSans"><Mail className="h-4 w-4"/>zzangyeah0@gmail.com</span></li>
        </ul>                        
      </div>
      <div className="flex gap-8">        
        <div className="relative flex flex-col items-center">
          <div className="relative h-full w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20">
            {timeline.map((entry, index) => (
              <div
                key={`${entry.company}-${entry.startYear}`}
                className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-lg"
                style={{
                  top: `${(index / (timeline.length - 1)) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            ))}
          </div>
        </div>

        <div id="timelineConts" className="space-y-8 pb-4">
          {timeline.map((entry) => (
            <div
              key={`${entry.company}-${entry.startYear}`}
              className="flex flex-col gap-2"
            >
                <div className="flex items-center gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {entry.startYear}–
                  {typeof entry.endYear === "number"
                    ? entry.endYear
                    : entry.endYear}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl text-foreground font-notoSans">
                    {entry.company}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/70 font-notoSans">
                    {entry.title}
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
