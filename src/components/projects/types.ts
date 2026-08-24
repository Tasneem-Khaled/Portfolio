export type StorySectionId = | "project"| "problem"| "research"| "challenge"| "solution"| "role"| "build"| "experience"| "result"| "impact"| "next";

export type StorySection = {
  id: StorySectionId;
  label: string;
  text: string;
  image?: string;
};

export type Project = {
  id: number;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  image?: string;
  story: StorySection[];
};