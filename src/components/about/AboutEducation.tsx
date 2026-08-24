import About from "./About";
import Education from "./Education";
import collegeImage from "../../assets/images/college.png";

export default function AboutEducation() {
  return (
    <section
      id="about"
      aria-label="About and education"
      className="relative z-20 overflow-hidden min-[1260px]:mt-[-16.8vh]"
    >
      <div className="relative hidden min-h-142.5 min-[1260px]:block">
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        >
          <defs>
            <clipPath id="educationClip">
              <path
                d="
                  M 985 145
                  C 935 160, 910 205, 905 265
                  C 895 365, 915 470, 895 545
                  C 875 625, 825 675, 775 700
                  L 1440 700
                  L 1440 145
                  C 1340 115, 1250 110, 1170 125
                  C 1090 140, 1035 160, 985 145
                  Z
                "
              />
            </clipPath>
          </defs>

          <path
            d="
              M 0 165
              C 120 185, 230 205, 335 185
              C 440 165, 500 115, 595 100
              C 700 82, 790 100, 875 120
              C 920 130, 955 140, 985 145
              C 935 165, 910 205, 905 265
              C 895 365, 915 470, 895 545
              C 875 625, 825 675, 775 700
              L 0 700
              Z
            "
            fill="#11191E"
          />

          <path
            d="
              M 985 145
              C 935 160, 910 205, 905 265
              C 895 365, 915 470, 895 545
              C 875 625, 825 675, 775 700
              L 1440 700
              L 1440 145
              C 1340 115, 1250 110, 1170 125
              C 1090 140, 1035 160, 985 145
              Z
            "
            fill="#F2EADF"
          />

          <image
            href={collegeImage}
            x="775"
            y="315"
            width="665"
            height="385"
            preserveAspectRatio="xMidYMax meet"
            opacity="0.22"
            clipPath="url(#educationClip)"
          />
        </svg>

        <div className="relative z-10 mx-auto grid min-h-142.5 w-full max-w-360 grid-cols-[70%_30%]">
          <div className="about-content min-w-0 px-[7%] pt-55">
            <div className="w-full max-w-195">
              <About />
            </div>
          </div>

          <div className="education-content min-w-0 px-[8%] pt-55">
            <Education />
          </div>
        </div>
      </div>

      <div className="min-[1260px]:hidden">
        <div className="relative bg-[#F7F2EA]">
          <svg
            viewBox="0 0 1000 190"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="pointer-events-none -mb-px block h-31.25 w-full sm:h-36.25 md:h-41.25"
          >
            <path
              d="
                M 1000 0
                L 1000 72
                C 925 54, 870 46, 815 53
                C 750 61, 704 92, 650 112
                C 610 127, 570 128, 530 116
                C 580 86, 620 51, 675 29
                C 745 1, 815 -6, 880 3
                C 930 10, 970 22, 1000 34
                Z
              "
              fill="#D7CCB9"
            />

            <path
              d="
                M 0 74
                C 65 94, 120 111, 180 113
                C 240 115, 285 98, 330 86
                C 380 72, 420 70, 460 82
                C 495 92, 510 106, 530 116
                C 570 128, 610 127, 650 112
                C 704 92, 750 61, 815 53
                C 870 46, 925 54, 1000 72
                L 1000 190
                L 0 190
                Z
              "
              fill="#11191E"
            />
          </svg>

          <div className="about-content -mt-px bg-[#11191E] px-[7%] pb-16 pt-6 sm:px-[6%] sm:pb-20 md:px-[6%]">
            <About />
          </div>
        </div>

        <div className="relative -top-2 bg-[#11191E]">
          <svg
            viewBox="0 0 1000 150"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="pointer-events-none -mb-px block h-25 w-full sm:h-30 md:h-33.75"
          >
            <path
              d="
                M 0 0
                L 1000 0
                L 1000 52
                C 920 38, 850 34, 780 47
                C 710 60, 655 85, 590 91
                C 530 97, 485 78, 430 69
                C 375 60, 325 69, 275 86
                C 215 106, 155 112, 95 96
                C 55 85, 25 68, 0 56
                Z
              "
              fill="#11191E"
            />

            <path
              d="
                M 0 56
                C 25 68, 55 85, 95 96
                C 155 112, 215 106, 275 86
                C 325 69, 375 60, 430 69
                C 485 78, 530 97, 590 91
                C 655 85, 710 60, 780 47
                C 850 34, 920 38, 1000 52
                L 1000 150
                L 0 150
                Z
              "
              fill="#F2EADF"
            />
          </svg>

          <div className="education-content relative -mt-px min-h-130 overflow-hidden bg-[#F2EADF] px-[7%] pb-0 pt-10 sm:min-h-140 sm:px-[6%] sm:pt-12 md:min-h-150 md:px-[7%] md:pt-14">
            <div className="relative z-10">
              <Education />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-[58%] items-end justify-center sm:h-[60%] md:h-[72%]">
              <img
                src={collegeImage}
                alt=""
                aria-hidden="true"
                className="block h-full w-full object-bottom opacity-[0.20]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
