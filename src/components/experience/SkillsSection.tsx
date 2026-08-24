import BeyondCode from "./BeyondCode";
import Services from "./Services";
import SkillsGrid from "./SkillsGrid";
import brainImage from "../../assets/images/brain.png";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Skills, services and interests"
      className="relative overflow-hidden bg-[#F2EADF] px-[6%] pb-16 pt-14 sm:pb-20 sm:pt-16 lg:px-[7%] lg:pb-24 lg:pt-20"
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-23.75 w-full opacity-25 sm:h-28.75"
      >
        <path
          d="M0 65 C170 110 285 30 455 62 C620 95 745 40 915 65 C1085 92 1210 38 1440 72"
          fill="none"
          stroke="#B5AA98"
          strokeWidth="1.5"
        />
      </svg>

      <div className="pointer-events-none absolute -left-24 bottom-4 h-64 w-64 rounded-full border-45 border-[#77744B]/5" />

      <svg
        viewBox="0 0 600 500"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-16 z-0 h-[70%] w-[42%] opacity-40 sm:w-[38%] lg:-bottom-10 lg:-right-12 lg:h-[76%] lg:w-[34%]"
      >
        <path
          d="M120 420 C40 330 100 235 210 205 C320 175 285 85 405 52 C520 20 610 115 575 220 C540 320 610 355 500 415 C385 475 235 510 120 420 Z"
          fill="#D9CBB9"
          opacity="0.35"
        />

        <path
          d="M175 430 C95 365 135 275 240 245 C350 215 345 130 450 110 C535 95 590 170 555 250 C520 330 555 375 470 420 C365 475 255 485 175 430 Z"
          fill="#B5AA98"
          opacity="0.16"
        />
      </svg>

      <img
        src={brainImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-2%] right-[-4%] z-1 w-[70%] object-contain opacity-[0.42] mix-blend-multiply sm:w-[70%] lg:w-[35%]"
      />

      <div className="relative z-10 mx-auto grid max-w-350 gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_1.05fr] lg:gap-10">
        <SkillsGrid />
        <Services />
        <BeyondCode />
      </div>
    </section>
  );
}
