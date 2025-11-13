export interface TimelineEntry {
  startYear: number;
  endYear: number | "present";
  company: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    startYear: 2020,
    endYear: 2024,
    company: "NicCompany",
    title: "Assistant Manager",
    description: "IT Service center",
  },
  {
    startYear: 2019,
    endYear: 2020,
    company: "Ssangyong",
    title: "Student",
    description: "Class",
  },
  {
    startYear: 2011,
    endYear: 2017,
    company: "CAU",
    title: "International Logistics",
    description: "Class",
  },
];
