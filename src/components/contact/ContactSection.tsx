import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      data-reveal="up"
      className="relative min-w-0"
    >
      <div className="relative mx-auto max-w-350 overflow-hidden rounded-4xl border border-[#B5AA98]/25 bg-[#F7F2EA]/55 px-6 py-8 sm:px-10 sm:py-9 lg:mt-35 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-8 xl:px-12">
        <svg
          viewBox="0 0 500 400"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 h-85 w-90opacity-[0.16]"
        >
          <path
            d="M90 340 C20 245 80 150 190 135 C285 120 270 40 380 45 C480 50 520 145 450 220 C390 285 455 335 350 365 C245 395 145 410 90 340 Z"
            fill="#B5AA98"
          />
        </svg>

        <div className="relative z-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8A8063]">
            Have an idea?
          </p>

          <h2
            id="contact-heading"
            className="mt-3 max-w-132.5 font-serif text-[34px] leading-[1.05] text-[#11191E] sm:text-[42px] lg:text-[40px] xl:text-[44px]"
          >
            Let’s build something{" "}
            <span className="italic text-[#B97C60]">meaningful</span> together.
          </h2>

          <p className="mt-4 max-w-117.5 text-[13px] leading-6 text-[#11191E]/60 sm:text-sm">
            I’m open to opportunities where I can contribute, learn and create
            digital experiences that make an impact.
          </p>

          <a
            href="mailto:tasneemkhaled2512007@gmail.com"
            className="group mt-6 inline-flex h-11.5 items-center justify-center gap-5 rounded-full bg-[#11191E] px-6 text-sm text-[#F7F2EA] transition-all duration-300 hover:-translate-y-1 hover:bg-[#252C30] hover:shadow-md"
          >
            <span>Get in Touch</span>
            <ArrowRight
              size={17}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="relative z-10 mt-8 border-t border-[#B5AA98]/30 pt-7 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
          <div className="space-y-5">
            <a
              href="mailto:tasneemkhaled2512007@gmail.com"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B5AA98]/40 text-[#77744B] transition-all duration-300 group-hover:bg-[#11191E] group-hover:text-[#F7F2EA]">
                <Mail size={17} strokeWidth={1.5} />
              </div>

              <span className="text-xs text-[#11191E]/65 transition-colors group-hover:text-[#11191E] sm:text-sm">
                tasneemkhaled2512007@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B5AA98]/40 text-[#77744B]">
                <MapPin size={17} strokeWidth={1.5} />
              </div>

              <span className="text-xs text-[#11191E]/65 sm:text-sm">
                Cairo, Egypt
              </span>
            </div>

            <a
              href="https://www.linkedin.com/in/tasneem-khaled-652038343"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B5AA98]/40 text-[#77744B] transition-all duration-300 group-hover:bg-[#11191E] group-hover:text-[#F7F2EA]">
                <FaLinkedinIn size={16} />
              </div>

              <span className="text-xs text-[#11191E]/65 transition-colors group-hover:text-[#11191E] sm:text-sm">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
