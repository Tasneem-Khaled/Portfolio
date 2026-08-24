import { experienceItems } from "./experienceData";

export default function ExperienceTimeline() {
  return (
    <div>
      <div className="mb-8" data-reveal="up">
        <h2 className="font-serif text-3xl text-[#F7F2EA] sm:text-4xl">
          Experience
        </h2>

        <div className="mt-3 h-0.5 w-10 bg-[#B5AA98]" />
      </div>

      <div data-reveal-stagger className="grid gap-8 md:grid-cols-2">
        {experienceItems.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            data-reveal-item
            className="relative pl-7"
          >
            <div className="absolute left-0 top-1 h-full w-px bg-[#B5AA98]/35" />
            <div className="absolute -left-1 top-1 h-2.5 w-2.5 rounded-full bg-[#B5AA98]" />

            <p className="text-xs font-medium text-[#B5AA98]">{item.year}</p>

            <h3 className="mt-3 text-sm font-semibold text-[#F7F2EA] sm:text-base">
              {item.title}
            </h3>

            <p className="mt-1 text-xs text-white/55">{item.organization}</p>

            <p className="mt-3 max-w-82.5 text-xs leading-5 text-white/65">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
