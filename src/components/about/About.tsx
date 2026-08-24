import { Brain, Lightbulb, Map, Trophy } from "lucide-react";
import signature from "../../assets/images/signature.png";

const traits = [
  { icon: Brain, label: "Curious Mind" },
  { icon: Map, label: "Problem Solver" },
  { icon: Lightbulb, label: "Always Learning" },
  { icon: Trophy, label: "Purpose Driven" },
];

export default function About() {
  return (
    <div className="text-[#F7F2EA]" data-reveal-stagger>
      <div data-reveal-item>
        <h2 className="font-serif text-3xl sm:text-4xl">About Me</h2>
        <div className="mt-3 h-0.5 w-10 bg-[#B5AA98]" />
      </div>

      <div className="mt-7 flex flex-col gap-10 md:flex-row md:gap-15 lg:gap-10">
        <div className="max-w-110">
          <p
            data-reveal-item
            className="text-sm leading-7 text-white/75 sm:text-base"
          >
            I'm a Computer Science & AI student who loves turning ideas into
            meaningful digital solutions. I enjoy building clean interfaces,
            exploring new technologies, and solving problems that make people's
            lives easier.
          </p>

          <div className="mt-5 ms-9" data-reveal-item>
            <img
              src={signature}
              alt="Tasneem Khaled signature"
              className="block w-50 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 border-white/15 md:border-l md:pl-10">
          {traits.map(({ icon: Icon, label }) => (
            <div
              key={label}
              data-reveal-item
              className="flex items-center gap-4"
            >
              <Icon size={22} strokeWidth={1.5} className="text-[#B5AA98]" />
              <span className="text-sm text-white/75">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
