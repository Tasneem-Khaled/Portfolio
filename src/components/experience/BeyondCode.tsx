import {
  BrainCircuit,
  GraduationCap,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import { beyondCode } from "./experienceData";

const iconMap = {
  teaching: GraduationCap,
  ai: BrainCircuit,
  learning: Lightbulb,
  leadership: UsersRound,
};

export default function BeyondCode() {
  return (
    <div className="relative z-10">
      <div data-reveal="up">
        <h2 className="font-serif text-3xl text-[#11191E] sm:text-4xl">
          Beyond Code
        </h2>

        <div className="mt-3 h-0.5 w-10 bg-[#8A8063]" />
      </div>

      <div data-reveal-stagger="fade" className="mt-8 space-y-6">
        {beyondCode.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div key={item.title} data-reveal-item className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D8D0C5] bg-[#F7F2EA]/75 text-[#77744B] backdrop-blur-sm">
                <Icon size={19} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#11191E]">
                  {item.title}
                </h3>

                <p className="mt-1 max-w-[320px] text-xs leading-5 text-[#11191E]/55">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
