import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className="relative z-10 text-[#11191E]" data-reveal-stagger>
      <div data-reveal-item>
        <h2 className="font-serif text-3xl sm:text-4xl">Education</h2>
        <div className="mt-3 h-0.5 w-10 bg-[#77704B]" />
      </div>

      <div data-reveal-item className="mt-8 flex items-start gap-5">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-[#B5AA98]/40 bg-[#F7F2EA]/60 sm:size-20">
          <GraduationCap size={32} strokeWidth={1.5} />
        </div>

        <div className="min-w-0 pt-1">
          <h3 className="text-base font-semibold sm:text-lg">
            FCAIH – Helwan University
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#11191E]/65">
            Faculty of Computers & Artificial Intelligence
          </p>

          <p className="text-sm leading-6 text-[#11191E]/65">
            Computer Science & AI
          </p>

          <p className="mt-5 text-sm font-semibold sm:text-base">
            GPA: 3.44 / 4.00
          </p>
        </div>
      </div>
    </div>
  );
}
