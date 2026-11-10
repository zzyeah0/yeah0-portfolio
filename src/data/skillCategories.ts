export type SkillCategory = "Frontend" | "Backend" | "Infra" | "Tools" | "Etc";

export const skillCategoryOrder: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Infra",
  "Tools",
  "Etc",
];

// 키는 소문자로 작성 (조회 시 소문자로 변환)
const categoryBySkill: Record<string, SkillCategory> = {
  typescript: "Frontend",
  javascript: "Frontend",
  react: "Frontend",
  "vue.js": "Frontend",
  nuxt: "Frontend",
  html: "Frontend",
  css: "Frontend",

  java: "Backend",
  jsp: "Backend",
  sql: "Backend",
  mariadb: "Backend",
  jexframework: "Backend",

  aws: "Infra",
  nginx: "Infra",
  pm2: "Infra",
  jenkins: "Infra",

  git: "Tools",
  svn: "Tools",
  changeflow: "Tools",
  redmine: "Tools",
  claude: "Tools",
};

export function groupSkills(skills: string[]) {
  const groups = new Map<SkillCategory, string[]>();
  for (const skill of skills) {
    const category = categoryBySkill[skill.toLowerCase()] ?? "Etc";
    groups.set(category, [...(groups.get(category) ?? []), skill]);
  }
  return skillCategoryOrder
    .filter((category) => groups.has(category))
    .map((category) => ({ category, skills: groups.get(category)! }));
}
