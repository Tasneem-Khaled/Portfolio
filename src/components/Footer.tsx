import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import thankYouImage from "../assets/images/thank-you-for-visiting.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTop();
  };

  return (
    <footer className="relative z-20 bg-[#11191E] px-[6%] pb-4 pt-3 text-[#F7F2EA] lg:px-[7%]">
      <div className="mx-auto flex max-w-350 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-6">
          <a
            href="#home"
            onClick={handleHomeClick}
            aria-label="Back to home"
            className="inline-flex shrink-0 items-center text-[#B5AA98]"
          >
            <svg
              width="44"
              height="34"
              viewBox="0 0 58 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 6H29 M16.5 6V39"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M45 8L31 22.5L46 38"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div>
            <img
              src={thankYouImage}
              alt="Thank you for visiting!"
              className="w-43.75 object-contain sm:w-50 lg:w-55"
            />

            <p className="mt-0.5 text-[9px] text-white/40 sm:text-[10px]">
              Let’s create something amazing.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/Tasneem-Khaled"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F2EA] hover:text-[#11191E]"
          >
            <FaGithub size={14} />
          </a>

          <a
            href="https://www.linkedin.com/in/tasneem-khaled-652038343"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F2EA] hover:text-[#11191E]"
          >
            <FaLinkedinIn size={14} />
          </a>

          <a
            href="mailto:tasneemkhaled2512007@gmail.com"
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F2EA] hover:text-[#11191E]"
          >
            <Mail size={14} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#B97C60] text-[#11191E] transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-3 max-w-350">
        <p className="text-center text-sm text-white/25">
          © 2026 Tasneem Khaled. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
