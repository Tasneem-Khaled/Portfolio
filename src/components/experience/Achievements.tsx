import { Code2, Star, Trophy, UserRound } from "lucide-react";
import { achievementItems } from "./experienceData";

const iconMap = {
  trophy: Trophy,
  code: Code2,
  community: UserRound,
  star: Star,
};

export default function Achievements() {
  return (
    <div>
      <div className="mb-8" data-reveal="up">
        <h2 className="font-serif text-3xl text-[#F7F2EA] sm:text-4xl">
          Achievements
        </h2>

        <div className="mt-3 h-0.5 w-10 bg-[#B5AA98]" />
      </div>

      <div data-reveal-stagger className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        {achievementItems.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <div key={item.title} data-reveal-item className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B5AA98]/30 text-[#B5AA98]">
                <Icon size={21} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#F7F2EA]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#B5AA98]">{item.subtitle}</p>

                <p className="mt-2 text-xs leading-5 text-white/55">
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
