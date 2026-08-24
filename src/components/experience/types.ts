export type ExperienceItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
};

export type AchievementItem = {
  title: string;
  subtitle: string;
  description: string;
  icon: "trophy" | "code" | "community" | "star";
};

export type SkillItem = {
  label: string;
};

export type ServiceItem = {
  title: string;
};

export type BeyondCodeItem = {
  title: string;
  description: string;
  icon: "teaching" | "ai" | "learning" | "leadership";
};
