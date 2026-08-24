import Achievements from "./Achievements";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillsSection from "./SkillsSection";

export default function ExperienceSection() {
  return (
    <>
      <div className="relative h-18.75 bg-[#F7F2EA] sm:h-22.5 lg:h-27.5">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 h-full w-full"
        >
          <path
            d="
              M0 95
              C140 135 260 45 420 72
              C570 98 670 128 830 92
              C1010 50 1160 45 1440 90
              L1440 160
              L0 160
              Z
            "
            fill="#11191E"
          />
        </svg>
      </div>

      <section
        id="experience"
        aria-label="Experience and achievements"
        className="relative overflow-hidden bg-[#11191E] px-[6%] pb-24 pt-16 sm:pt-20 lg:px-[7%] lg:pb-28 lg:pt-24"
      >
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 opacity-[0.12]">
          <svg
            viewBox="0 0 300 300"
            aria-hidden="true"
            className="h-full w-full"
          >
            <path
              d="M160 280 C165 210 150 165 120 125 C95 90 80 55 100 20"
              fill="none"
              stroke="#B5AA98"
              strokeWidth="3"
            />

            <path
              d="M145 215 C190 190 220 150 230 110"
              fill="none"
              stroke="#B5AA98"
              strokeWidth="2"
            />

            <path
              d="M135 175 C95 150 70 115 60 80"
              fill="none"
              stroke="#B5AA98"
              strokeWidth="2"
            />

            <ellipse
              cx="238"
              cy="92"
              rx="22"
              ry="45"
              transform="rotate(30 238 92)"
              fill="#B5AA98"
              opacity="0.45"
            />

            <ellipse
              cx="70"
              cy="72"
              rx="20"
              ry="42"
              transform="rotate(-35 70 72)"
              fill="#B5AA98"
              opacity="0.35"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto grid max-w-350 gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <ExperienceTimeline />
          <Achievements />
        </div>

        <svg
          viewBox="0 0 1440 170"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-0 h-27.5 w-full sm:h-32.5"
        >
          <path
            d="
              M0 100
              C160 35 300 70 440 95
              C600 125 760 85 900 90
              C1060 95 1210 55 1440 100
              L1440 170
              L0 170
              Z
            "
            fill="#F2EADF"
          />
        </svg>
      </section>

      <SkillsSection />
    </>
  );
}
