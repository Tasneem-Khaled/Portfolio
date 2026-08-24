import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        timeline
          .from(".hero-intro", {
            y: 20,
            opacity: 0,
            duration: 0.6,
          })
          .from(
            ".hero-name",
            {
              y: 45,
              opacity: 0,
              duration: 0.85,
            },
            "-=0.35",
          )
          .from(
            ".hero-role",
            {
              y: 18,
              opacity: 0,
              duration: 0.6,
            },
            "-=0.4",
          )
          .from(
            ".hero-visual",
            {
              y: 40,
              scale: 0.94,
              opacity: 0,
              duration: 1,
            },
            "-=0.45",
          )
          .from(
            ".hero-description",
            {
              y: 20,
              opacity: 0,
              duration: 0.65,
            },
            "-=0.5",
          )
          .from(
            ".hero-action",
            {
              y: 18,
              opacity: 0,
              duration: 0.55,
              stagger: 0.1,
            },
            "-=0.35",
          )
          .from(
            ".hero-social",
            {
              y: 12,
              opacity: 0,
              duration: 0.45,
              stagger: 0.06,
            },
            "-=0.25",
          );
      });

      return () => mm.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-[6%] pb-5 pt-25 sm:px-[7%] sm:pt-32 lg:flex lg:items-center lg:px-[5%] lg:pt-20 min-[1260px]:pb-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-360">
        <div className="grid w-full lg:grid-cols-[38%_62%] lg:grid-rows-[auto_auto] lg:items-center">
          <div className="z-20 flex flex-col justify-end pb-2 sm:pb-3 lg:min-h-105 lg:pb-12">
            <p className="hero-intro mb-2 text-base text-[#555334] sm:text-lg lg:text-xl">
              Hello, I'm
            </p>

            <h1
              id="hero-heading"
              className="hero-name font-serif text-[clamp(3.5rem,15vw,5.5rem)] leading-[0.87] tracking-[-0.04em] text-[#11191E] sm:text-[5.8rem] lg:text-[clamp(4.8rem,6.7vw,6.6rem)]"
            >
              Tasneem
              <br />
              Khaled<span className="text-[#77704B]">.</span>
            </h1>

            <div className="hero-role mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-medium text-[#11191E] sm:text-base lg:mt-7 lg:text-lg">
              <span>Front-End Developer</span>
              <span className="size-1.5 shrink-0 rounded-full bg-[#77704B]" />
              <span>CS & AI Student</span>
            </div>
          </div>

          <div className="mt-3 flex w-full items-center justify-center sm:mt-1 md:-mt-2 lg:row-span-2 lg:mt-0 lg:justify-end lg:pl-2">
            <HeroVisual />
          </div>

          <div className="mt-4 lg:col-start-1 lg:row-start-2 lg:mt-0">
            <p className="hero-description max-w-112.5 text-sm leading-7 text-[#11191E]/70 sm:text-base">
              I turn real problems into thoughtful digital experiences from
              understanding the user to building solutions that matter.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="hero-action">
                <a
                  href="https://drive.google.com/drive/folders/157CjsA8H9WDR_IdrXinBWZLz1VhTC0mf"
                  target="_blank"
                  className="group flex h-12.5 w-48.75 items-center justify-center rounded-full bg-[#77704B] px-5 text-sm text-[#F7F2EA] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#65603F] hover:shadow-md sm:w-auto sm:min-w-45 sm:px-6"
                >
                  <span className="flex items-center gap-5">
                    <span>View Highlights</span>
                    <ArrowRight
                      size={18}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </div>

              <div className="hero-action">
                <a
                  href="https://drive.google.com/file/d/1dc9DD3Ryu6AQ5b6KRIvRJ2RY1XMKr6XS/view?usp=drivesdk"
                  target="_blank"
                  className="flex h-12.5 w-40 items-center justify-center rounded-full border border-[#B5AA98] px-4 text-sm text-[#11191E] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#77704B] hover:bg-[#EDE5D9] hover:shadow-sm sm:w-auto sm:min-w-41.25 sm:px-6"
                >
                  <span className="flex items-center gap-3">
                    <span className="whitespace-nowrap">Download CV</span>
                    <Download size={17} strokeWidth={1.7} />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative z-30 mt-7 flex flex-wrap items-center gap-3">
              <span className="hero-social mr-1 shrink-0 whitespace-nowrap text-xs font-medium text-[#11191E]/70">
                Find me on
              </span>

              <div className="hero-social">
                <a
                  href="https://github.com/Tasneem-Khaled"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#B5AA98]/60 text-[#11191E] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#11191E] hover:bg-[#11191E] hover:text-[#F7F2EA]"
                >
                  <FaGithub size={17} />
                </a>
              </div>

              <div className="hero-social">
                <a
                  href="https://www.linkedin.com/in/tasneem-khaled-652038343"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#B5AA98]/60 text-[#11191E] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#11191E] hover:bg-[#11191E] hover:text-[#F7F2EA]"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>

              <div className="hero-social">
                <a
                  href="mailto:tasneemkhaled2512007@gmail.com"
                  aria-label="Send me an email"
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#B5AA98]/60 text-[#11191E] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#11191E] hover:bg-[#11191E] hover:text-[#F7F2EA]"
                >
                  <Mail size={17} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[48vh] z-0 hidden h-[65vh] w-full overflow-visible min-[1260px]:block"
      >
        <path
          d="M 790 700 C 870 280, 1040 530, 1135 230 C 1200 50, 1300 50, 1440 88 L 1440 700 Z"
          fill="#B5AA98"
        />
      </svg>
    </section>
  );
}
