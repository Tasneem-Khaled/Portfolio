import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "./types";
import { projects } from "./projectsData";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  onStoryClick: (project: Project) => void;
};

export default function ProjectCard({
  project,
  featured = false,
  onStoryClick,
}: ProjectCardProps) {
  const imageSize =
    project.id === 1
      ? "h-[102%] w-[102%] lg:h-[106%] lg:w-[106%]"
      : project.id === 2
        ? "h-[96%] w-[96%] lg:h-[95%] lg:w-[95%]"
        : "h-[90%] w-[90%] lg:h-[90%] lg:w-[90%]";

  const imagePosition =
    project.id === 1
      ? "translate-y-1"
      : project.id === 2
        ? "-translate-x-1"
        : "-translate-x-1";

  return (
    <article
      className={`
        group relative flex overflow-hidden rounded-[28px]
        border border-[#DED6CA]
        bg-[#F8F3EC]
        shadow-[0_8px_30px_rgba(17,25,30,0.06)]

        transition-all duration-500 ease-out
        hover:-translate-y-1.5
        hover:border-[#CFC4B5]
        hover:shadow-[0_20px_48px_rgba(17,25,30,0.12)]
        ${project=== projects[0] ? "lg:mt-15" : ""}

        ${
          featured
            ? "min-h-130 flex-col"
            : "min-h-62.5 flex-col sm:flex-row lg:flex-row"
        }
      `}
    >
      <div
        className={`
          relative flex shrink-0 items-center justify-center
          bg-[#F8F3EC]

          ${
            featured
              ? "h-61.25 w-full lg:h-68.75"
              : `
                h-47.5 w-full
                sm:h-auto sm:w-[46%]
                lg:w-[48%]
              `
          }
        `}
      >
        {project.image ? (
          <div
            className={`
              group/image relative flex h-full w-full
              items-center justify-center
              overflow-visible
              ${imagePosition}
            `}
          >
            <img
              src={project.image}
              alt={`${project.title} responsive project preview`}
              className={`
                max-w-none object-contain

                transition-transform
                duration-500
                ease-out

                group-hover/image:scale-[1.06]

                ${imageSize}
              `}
            />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center px-5 text-center">
            <span className="font-serif text-lg text-[#11191E]/25">
              Add {project.title} screenshot
            </span>
          </div>
        )}
      </div>

      <div
        className={`
          relative z-10 flex flex-1 flex-col
          bg-[#F8F3EC]
          ${featured ? "p-7 md:p-8" : "p-5 md:p-6"}
        `}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8063]">
          {project.type}
        </p>

        <h3
          className={`
            mt-2 font-serif text-[#11191E]
            ${featured ? "text-3xl md:text-[34px]" : "text-2xl"}
          `}
        >
          {project.title}
        </h3>

        <p
          className={`
            mt-3 leading-6 text-[#11191E]/60
            ${featured ? "max-w-142.5 text-sm" : "text-xs"}
          `}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-lg
                bg-[#E9E1D6]
                px-3 py-1.5
                text-[10px]
                font-medium
                text-[#11191E]/70
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="
                relative pl-3
                text-[10px]
                text-[#11191E]/45

                before:absolute
                before:left-0
                before:top-1/2
                before:h-1
                before:w-1
                before:-translate-y-1/2
                before:rounded-full
                before:bg-[#8A8063]
              "
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-5 pt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link inline-flex items-center gap-2
              text-xs font-semibold text-[#11191E]
            "
          >
            View Live Site
            <ArrowUpRight
              size={15}
              className="
                transition-transform duration-300
                group-hover/link:-translate-y-0.5
                group-hover/link:translate-x-0.5
              "
            />
          </a>

          <button
            type="button"
            onClick={() => onStoryClick(project)}
            className="
              group/story inline-flex cursor-pointer
              items-center gap-2
              text-xs font-semibold
              text-[#8A8063]
            "
          >
            Discover the story
            <ArrowRight
              size={15}
              className="
                transition-transform duration-300
                group-hover/story:translate-x-1.5
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}
