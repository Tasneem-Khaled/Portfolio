import {
  Braces,
  Gauge,
  KeyRound,
  PanelsTopLeft,
  PlugZap,
  Smartphone,
} from "lucide-react";
import { services } from "./experienceData";

const icons = [
  PanelsTopLeft,
  Smartphone,
  Braces,
  PlugZap,
  KeyRound,
  Gauge,
];

export default function Services() {
  return (
    <div className="md:ms-15 lg:ms-6">
      <div data-reveal="up">
        <h2 className="font-serif text-3xl text-[#11191E] sm:text-4xl">
          Services I Offer
        </h2>

        <div className="mt-3 h-0.5 w-10 bg-[#8A8063]" />
      </div>

      <div data-reveal-stagger="fade" className="mt-8 space-y-4">
        {services.map((service, index) => {
          const Icon = icons[index];

          return (
            <div
              key={service.title} data-reveal-item
              className="flex items-center gap-4 ps-3 md:ps-0">
              <Icon size={19} strokeWidth={1.5} className="text-[#77744B]" />

              <span className="text-sm text-[#11191E]/75">
                {service.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}