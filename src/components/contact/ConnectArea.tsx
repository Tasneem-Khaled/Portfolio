import ContactSection from "./ContactSection";
import TestimonialsSection from "../testimonials/TestimonialsSection";

export default function ConnectArea() {
  return (
    <section id="connect" className="relative z-20 overflow-hidden bg-[#F2EADF] px-[6%] pb-23.75 pt-8 sm:pt-10 lg:px-[7%] lg:pb-27.5 lg:pt-9">
      <div className="pointer-events-none absolute left-[-8%] bottom-14.5 z-0 hidden h-57.5 w-105 lg:block">
        <svg viewBox="0 0 420 230" aria-hidden="true" className="h-full w-full">
          <path
            d="
              M18 142
              C5 78 55 28 122 37
              C167 43 182 70 220 60
              C271 47 305 7 359 24
              C415 41 428 104 392 141
              C360 174 309 167 270 189
              C222 216 170 226 117 211
              C63 197 28 185 18 142
              Z
            "
            fill="#D9CCBA" opacity="0.30" />

          <path
            d="
              M48 150
              C37 101 74 68 123 73
              C166 78 182 109 220 102
              C266 94 297 54 339 68
              C378 81 389 126 361 151
              C331 178 294 165 258 182
              C214 204 165 209 121 195
              C78 182 57 176 48 150
              Z
            "
            fill="#FBF8F3" opacity="0.72" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -left-24 bottom-22.5 z-0 h-37.5 w-60 opacity-60 lg:hidden">
        <svg viewBox="0 0 240 150" aria-hidden="true" className="h-full w-full">
          <path
            d="
              M8 94
              C0 49 38 16 82 27
              C114 35 120 55 151 50
              C183 45 208 19 229 41
              C250 64 237 104 205 113
              C166 125 131 143 88 136
              C45 130 15 122 8 94
              Z
            "
            fill="#D9CCBA" opacity="0.28" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-350 grid-cols-1 gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-7 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
        <TestimonialsSection />
        <ContactSection />
      </div>

      <svg
        viewBox="0 0 1440 210" preserveAspectRatio="none" aria-hidden="true"
        className="pointer-events-none absolute -bottom-2 left-0 z-20 h-23 w-full sm:h-27 lg:h-31.25">
        <path
          d="
            M0 82
            C120 116 225 126 350 102
            C480 77 545 44 665 70
            C790 97 860 136 995 108
            C1125 81 1210 48 1320 71
            C1372 82 1410 97 1440 91
            L1440 210
            L0 210
            Z
          "
          fill="#11191E" />
      </svg>
    </section>
  );
}