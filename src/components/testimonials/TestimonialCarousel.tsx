import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { testimonials } from "./testimonialsData";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      <div
        ref={emblaRef}
        className="cursor-grab overflow-hidden active:cursor-grabbing"
      >
        <div className="flex touch-pan-y items-stretch">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex min-w-0 flex-[0_0_100%]"
            >
              <article className="flex w-full flex-col overflow-hidden rounded-[28px] border border-[#B5AA98]/20 bg-[#F7F2EA]/55 p-5 sm:p-6">
                <Quote
                  size={24}
                  strokeWidth={1.2}
                  className="mb-3 shrink-0 text-[#77744B]"
                />

                <p className="text-[12px] leading-[1.65] text-[#11191E]/72 sm:text-[13px]">
                  {testimonial.quote}
                </p>

                <div className="mt-4 shrink-0">
                  <h3 className="text-[13px] font-semibold text-[#11191E]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] italic tracking-[0.02em] text-[#8A8063] sm:text-[11px]">
                    {testimonial.role}
                  </p>
                </div>

                {testimonial.memoryImage && (
                  <div className="mt-auto pt-5">
                    <div className="mx-auto aspect-16/10 w-full max-w-90 overflow-hidden [clip-path:polygon(0_0,90%_0,100%_18%,100%_100%,10%_100%,0_82%)]">
                      <img
                        src={testimonial.memoryImage}
                        alt={testimonial.memoryLabel ?? testimonial.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    {testimonial.memoryLabel && (
                      <span className="mt-2 block text-center text-[9px] italic text-[#11191E]/55">
                        {testimonial.memoryLabel}
                      </span>
                    )}
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Go to testimonial ${index + 1}`}
            onClick={() => scrollTo(index)}
            className={`h-1.75 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-5 bg-[#B97C60]"
                : "w-1.75 bg-[#B5AA98]/45 hover:bg-[#77744B]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}