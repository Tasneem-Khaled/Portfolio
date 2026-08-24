import {
  CircleUserRound,
  TriangleAlert,
  Lightbulb,
  TrendingUp,
  X,
  Search,
  Users,
  Hammer,
  Sparkles,
  Target,
  ArrowUpRight,
  BrainCircuit,
} from "lucide-react";

import type { Project, StorySection, StorySectionId } from "./types";

type ProjectCaseStudyProps = {
  project: Project;
  onClose: () => void;
};

const storyIcons: Record<StorySectionId, typeof CircleUserRound> = {
  project: CircleUserRound,
  problem: Target,
  research: Search,
  challenge: TriangleAlert,
  solution: Lightbulb,
  role: Users,
  build: Hammer,
  experience: Sparkles,
  result: TrendingUp,
  impact: ArrowUpRight,
  next: BrainCircuit,
};

function StoryItem({
  section,
  index,
}: {
  section: StorySection;
  index: number;
}) {
  const Icon = storyIcons[section.id];

  return (
    <div
      className={`relative grid items-center gap-7 md:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr] ${
        index !== 0 ? "mt-7" : ""
      }`}
    >
      <div className="relative flex items-start gap-4 md:h-full">
        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8D0C5] bg-[#F8F3EC] shadow-sm">
          <Icon size={20} strokeWidth={1.5} className="text-[#77744B]" />
        </div>

        <div className="pt-1">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8A8063]">
            {section.label}
          </p>

          <span className="mt-2 block h-px w-8 bg-[#8A8063]/60" />
        </div>
      </div>

      <div
        className={`overflow-hidden rounded-[22px] border border-[#DDD5C9] bg-[#F7F2EA] ${
          section.image ? "grid md:grid-cols-[1fr_0.9fr]" : ""
        }`}
      >
        <div className="flex items-center p-6 md:p-7 lg:p-8">
          <p className="max-w-170 text-sm leading-7 text-[#11191E]/65">
            {section.text}
          </p>
        </div>

        {section.image && (
          <div className="min-h-47.5 overflow-hidden bg-[#F7F2EA]">
            <img
              src={section.image}
              alt={`${section.label} visual`}
              className="h-full w-full object-contain p-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectCaseStudy({
  project,
  onClose,
}: ProjectCaseStudyProps) {
  return (
    <section
      id="project-story"
      aria-labelledby={`project-story-${project.id}`}
      className="relative mt-10 scroll-mt-24 overflow-hidden rounded-4xl border border-[#D8D0C5] bg-[#EEE6DA] px-5 py-8 sm:px-7 md:px-9 md:py-10 lg:px-12 lg:py-12"
    >
      <div className="pointer-events-none absolute -right-28 -top-32 h-82.5 w-82.5 rounded-full border-60 border-[#B28F7B]/10" />
      <div className="pointer-events-none absolute bottom-8 left-[3%] h-40 w-40 rounded-full border border-[#77744B]/10" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8063]">
              Project Story
            </p>

            <h2
              id={`project-story-${project.id}`}
              className="mt-2 max-w-162.5 font-serif text-3xl leading-tight text-[#11191E] sm:text-4xl lg:text-[46px]"
            >
              The story behind{" "}
              <span className="italic text-[#77744B]">{project.title}</span>
            </h2>

            <p className="mt-4 max-w-145 text-sm leading-6 text-[#11191E]/50">
              Every project starts with a problem worth understanding.
              Here&apos;s how this one evolved from research and decisions into
              a working digital experience.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} project story`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#CFC5B7] bg-[#F7F2EA] text-[#11191E] transition-all duration-300 hover:rotate-90 hover:bg-[#11191E] hover:text-[#F7F2EA]"
          >
            <X size={17} />
          </button>
        </div>

        <div className="relative mt-10 md:mt-12">
          <div className="pointer-events-none absolute bottom-6 left-5.75 top-6 hidden w-px border-l border-dashed border-[#8A8063]/35 md:block" />

          {project.story.map((section, index) => (
            <StoryItem
              key={`${project.id}-${section.id}`}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
