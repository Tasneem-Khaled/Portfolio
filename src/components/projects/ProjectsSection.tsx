import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudy from "./ProjectCaseStudy";
import Approach from "./Approach";
import { projects } from "./projectsData";
import type { Project } from "./types";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const mentavia = projects[0];
  const shopMart = projects[1];
  const fcaihGuide = projects[2];

  const openStory = (project: Project) => {
    setSelectedProject(project);

    window.setTimeout(() => {
      document.getElementById("project-story")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const closeStory = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-30 -mt-10 overflow-hidden rounded-t-[30px] bg-[#F7F2EA] px-[6%] pb-15 pt-14 sm:-mt-12 sm:rounded-t-[35px] lg:-mt-8 lg:rounded-t-[40px] lg:px-[7%] lg:pt-16"
    >
      <div className="pointer-events-none absolute -left-24 bottom-10 z-0 h-52 w-52 rounded-full border-35 border-[#77744B]/5" />

      <div className="pointer-events-none absolute -left-28 top-105 h-80 w-[320px] rounded-full border-55 border-[#77744B]/10 sm:-left-32 sm:top-112.5 lg:-left-36 lg:top-97.5 lg:h-90 lg:w-90 lg:border-65" />

      <div
        className="pointer-events-none absolute right-[4%] top-12 grid grid-cols-5 gap-3 opacity-20"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#9B8D6E]" />
        ))}
      </div>

      <svg
        viewBox="0 0 300 200"
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-[38%] hidden h-60 w-87.5 opacity-[0.07] lg:block"
      >
        <path
          d="M20 160 C70 40 130 200 180 70 C220 -20 260 60 290 20"
          fill="none"
          stroke="#11191E"
          strokeWidth="2"
        />

        <path
          d="M40 175 C90 70 140 190 205 90 C245 30 265 80 295 50"
          fill="none"
          stroke="#11191E"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-350">
        <div className="mb-10 md:mb-12" data-reveal="up">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8063]">
            A selection of my work
          </p>

          <h2
            id="projects-heading"
            className="font-serif text-[38px] leading-none text-[#11191E] sm:text-5xl lg:text-[56px]"
          >
            Selected Projects
          </h2>

          <div className="mt-5 h-0.5 w-14 bg-[#8A8063]" />
        </div>

        <div
          data-reveal-stagger="projects"
          className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6"
        >
          <div data-reveal-item>
            <ProjectCard project={mentavia} featured onStoryClick={openStory} />
          </div>

          <div className="grid gap-5 lg:grid-rows-2 lg:gap-6">
            <div data-reveal-item>
              <ProjectCard project={shopMart} onStoryClick={openStory} />
            </div>

            <div data-reveal-item>
              <ProjectCard project={fcaihGuide} onStoryClick={openStory} />
            </div>
          </div>
        </div>

        {selectedProject && (
          <ProjectCaseStudy project={selectedProject} onClose={closeStory} />
        )}

        <Approach />
      </div>
    </section>
  );
}
