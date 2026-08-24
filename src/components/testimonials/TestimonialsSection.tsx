import TestimonialCarousel from "./TestimonialCarousel";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative min-w-0"
    >
      <div className="mb-4 sm:mb-5" data-reveal="up">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8A8063] sm:text-[10px]">
          Kind words from people I’ve worked with
        </p>

        <h2
          id="testimonials-heading"
          className="font-serif text-[28px] leading-none text-[#11191E] sm:text-3xl"
        >
          What people say
        </h2>

        <div className="mt-3 h-0.5 w-9 bg-[#8A8063]" />
      </div>

      <div className="relative" data-reveal="up">
        <TestimonialCarousel />
      </div>
    </section>
  );
}
