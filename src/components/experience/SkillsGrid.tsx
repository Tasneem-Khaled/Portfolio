import {
  SiBootstrap,
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Braces } from "lucide-react";

const skills = [
  { label: "HTML5", icon: SiHtml5 },
  { label: "CSS3", icon: SiCss },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Tailwind", icon: SiTailwindcss },
  { label: "Bootstrap", icon: SiBootstrap },
  { label: "Git", icon: SiGit },
  { label: "GitHub", icon: SiGithub },
  { label: "Figma", icon: SiFigma },
  { label: "REST APIs", icon: Braces },
  { label: "PHP", icon: SiPhp },
  { label: "MySQL", icon: SiMysql },
];

export default function SkillsGrid() {
  return (
    <div className="min-w-0">
      <div data-reveal="up">
        <h2 className="font-serif text-[28px] leading-tight text-[#11191E] sm:text-3xl lg:text-[34px]">
          Skills & Tech Stack
        </h2>

        <div className="mt-3 h-0.5 w-10 bg-[#8A8063]" />
      </div>

      <div
        data-reveal-stagger="fade"
        className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 lg:gap-x-5"
      >
        {skills.map(({ label, icon: Icon }) => (
          <div
            key={label}
            data-reveal-item
            className="group flex min-w-0 flex-col items-center gap-2.5 text-center"
          >
            <div className="flex h-11 w-11 items-center justify-center text-[#30383C] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-[#77744B]">
              <Icon size={26} />
            </div>

            <span className="max-w-18 text-[10px] leading-4 text-[#11191E]/60 transition-colors duration-300 group-hover:text-[#11191E] sm:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <p
        data-reveal="up"
        className="mt-7 max-w-130 text-[11px] italic leading-5 text-[#8A8063]/85"
      >
        + ShadCN UI, HeroUI, React Query, Axios, JWT, NextAuth, Zod, Postman &
        more.
      </p>
    </div>
  );
}
