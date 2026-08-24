import {
  Search,
  Lightbulb,
  Code2,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const steps = [
  {
    title: "Understand",
    description: "I research the problem, the users and the context.",
    icon: Search,
  },
  {
    title: "Research",
    description: "I explore ideas and find the best approach.",
    icon: Lightbulb,
  },
  {
    title: "Build",
    description: "I turn the solution into clean, maintainable code.",
    icon: Code2,
  },
  {
    title: "Improve",
    description: "I test, gather feedback and keep improving.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function Approach() {
  return (
    <section
      className="relative mt-12 pb-6 sm:mt-14 sm:pb-8 lg:mt-20 lg:pb-20"
      aria-labelledby="approach-heading"
    >
      <div className="mb-8 sm:mb-10 lg:mb-12" data-reveal="up">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8A8063] sm:text-[10px] lg:tracking-[0.22em]">
          From problem to product
        </p>

        <h2
          id="approach-heading"
          className="font-serif text-3xl text-[#11191E] sm:text-4xl"
        >
          My Approach
        </h2>

        <div className="mt-3 h-0.5 w-12 bg-[#8A8063]" />
      </div>

      <div className="relative mx-auto max-w-262.5">
        <svg
          viewBox="0 0 300 500"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-full w-40 -translate-x-1/2 sm:hidden"
        >
          <path
            d="M150 25 C220 65 220 105 150 140 C80 180 80 220 150 255 C220 295 220 335 150 370 C80 410 80 450 150 480"
            fill="none"
            stroke="#8A8063"
            strokeWidth="1.3"
            strokeDasharray="4 7"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        <svg
          viewBox="0 0 600 330"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block lg:hidden"
        >
          <path
            d="M150 45 C250 5 350 5 450 45 C540 80 540 145 450 170 C350 200 250 200 150 170 C60 145 60 230 150 270 C250 310 350 310 450 270"
            fill="none"
            stroke="#8A8063"
            strokeWidth="1.3"
            strokeDasharray="4 7"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        <svg
          viewBox="0 0 1000 180"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-[7%] top-3 hidden h-36.25 w-[86%] lg:block"
        >
          <path
            d="M0 45 C90 45 165 125 250 115 C335 105 415 35 500 45 C585 55 665 125 750 115 C835 105 915 45 1000 45"
            fill="none"
            stroke="#77744B"
            strokeWidth="1.4"
            strokeDasharray="3 7"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>

        <div
          data-reveal-stagger
          className="relative z-10 mt-7 flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-40 lg:grid-cols-4 lg:gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} data-reveal-item>
                <div
                  className={`group relative flex min-h-26.25 items-center justify-center sm:min-h-33.75 sm:flex-col sm:text-center lg:min-h-0 ${
                    index === 1
                      ? "-translate-x-5 sm:translate-x-0 lg:translate-y-9"
                      : index === 2
                        ? "translate-x-5 sm:translate-x-0 lg:translate-y-17"
                        : index === 3
                          ? "lg:translate-y-8"
                          : ""
                  }`}
                >
                  <div
                    className={`absolute top-1/2 w-[calc(50%-48px)] -translate-y-1/2 sm:hidden ${
                      index % 2 === 0
                        ? "left-0 text-right"
                        : "right-0 text-left"
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-[#11191E]">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-[11px] leading-[1.55] text-[#11191E]/55">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`relative z-20 flex h-16.5 w-16.5 items-center justify-center rounded-full border-[6px] border-[#F7F2EA] shadow-[0_8px_25px_rgba(17,25,30,0.12)] transition-all duration-300 group-hover:-translate-y-1.5 sm:h-17.5 sm:w-17.5 lg:h-18.5 lg:w-18.5 ${
                      index === 2
                        ? "bg-[#11191E] text-[#F7F2EA]"
                        : index === 3
                          ? "bg-[#B97C60] text-[#F7F2EA]"
                          : "bg-[#77744B] text-[#F7F2EA]"
                    }`}
                  >
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                  <div className="mt-4 hidden max-w-52.5 sm:block lg:mt-5">
                    <h3 className="text-sm font-semibold text-[#11191E]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#11191E]/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
