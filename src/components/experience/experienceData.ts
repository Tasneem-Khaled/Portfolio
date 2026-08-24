import type {
  AchievementItem,
  BeyondCodeItem,
  ExperienceItem,
  ServiceItem,
  SkillItem,
} from "./types";

export const experienceItems: ExperienceItem[] = [
  {
    year: "2026",
    title: "DEMI Programming Instructor",
    organization: "MCIT × iSchool",
    description:
      "On-site teaching and mentoring for Grade 5–6 students, with a focus on problem solving and responsible use of technology.",
  },
  {
    year: "2024 – 2025",
    title: "Math Teaching Assistant",
    organization: "Secondary Stage",
    description:
      "Created and reviewed 20+ structured exams and practice quizzes while supporting lesson planning and student learning.",
  },
];

export const achievementItems: AchievementItem[] = [
  {
    title: "Top Performer",
    subtitle: "Route Academy",
    description:
      "Recognized for outstanding performance in the Front-End React Development Diploma.",
    icon: "trophy",
  },
  {
    title: "Coach Academy",
    subtitle: "CPS Level 1",
    description:
      "Completed Level 1 in Competitive Problem Solving.",
    icon: "code",
  },
  {
  title: "Tech Community & Events",
  subtitle: "Continuous Industry Engagement",
  description:
    "Active participant in tech communities and events including ITI TechWheel AI Day, Google I/O Extended Cairo, Build with AI Arabia 2026 and GDG events.",
  icon: "community",
},
  {
    title: "She Leads Program",
    subtitle: "Youth Leaders Foundation",
    description:
      "Selected for the Freelancing Track as part of the She Leads Program.",
    icon: "star",
  },
];

export const skills: SkillItem[] = [
  { label: "HTML5" },
  { label: "CSS3" },
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "React" },
  { label: "Next.js" },
  { label: "Tailwind CSS" },
  { label: "Bootstrap" },
  { label: "Git & GitHub" },
  { label: "Figma" },
  { label: "REST APIs" },
  { label: "PHP / MySQL" },
];

export const services: ServiceItem[] = [
  { title: "Front-End Development" },
  { title: "Responsive Web Development" },
  { title: "UI/UX Implementation" },
  { title: "API Integration" },
  { title: "Authentication & Validation" },
  { title: "Performance & Code Quality" },
];

export const beyondCode: BeyondCodeItem[] = [
  {
    title: "Teaching & Mentoring",
    description:
      "I enjoy simplifying technical concepts and helping others learn by thinking, not memorizing.",
    icon: "teaching",
  },
  {
    title: "AI Curiosity",
    description:
      "Exploring AI and its integration into real-world web products.",
    icon: "ai",
  },
  {
    title: "Continuous Learning",
    description:
      "Always learning new technologies and turning what I learn into practical projects.",
    icon: "learning",
  },
  {
    title: "Leadership",
    description:
      "Leading teams, organizing work and turning ideas into structured solutions.",
    icon: "leadership",
  },
];