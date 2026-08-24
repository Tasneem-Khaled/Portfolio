import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 768px)",
          mobile: "(max-width: 767px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, mobile, reduceMotion } = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reduceMotion: boolean;
          };

          const revealElements =
            gsap.utils.toArray<HTMLElement>("[data-reveal]");

          const staggerContainers = gsap.utils.toArray<HTMLElement>(
            "[data-reveal-stagger]",
          );

          if (reduceMotion) {
            gsap.set("[data-reveal], [data-reveal-item]", {
              clearProps: "all",
            });

            return;
          }

          revealElements.forEach((element) => {
            const type = element.dataset.reveal;

            const animation = {
              opacity: 0,
              duration: desktop ? 0.85 : 0.65,
              ease: desktop ? "power3.out" : "power2.out",
            };

            if (type === "left") {
              gsap.from(element, {
                ...animation,
                x: desktop ? -50 : -30,
                scrollTrigger: {
                  trigger: element,
                  start: desktop ? "top 84%" : "top 88%",
                  toggleActions: "play none none reverse",
                },
              });

              return;
            }

            if (type === "right") {
              gsap.from(element, {
                ...animation,
                x: desktop ? 50 : 30,
                scrollTrigger: {
                  trigger: element,
                  start: desktop ? "top 84%" : "top 88%",
                  toggleActions: "play none none reverse",
                },
              });

              return;
            }

            gsap.from(element, {
              ...animation,
              y: desktop ? 50 : 32,
              scrollTrigger: {
                trigger: element,
                start: desktop ? "top 84%" : "top 88%",
                toggleActions: "play none none reverse",
              },
            });
          });

          staggerContainers.forEach((container) => {
            const items =
              container.querySelectorAll<HTMLElement>("[data-reveal-item]");

            if (!items.length) return;

            const mode = container.dataset.revealStagger;

            if (mode === "projects" && mobile) {
              items.forEach((item) => {
                gsap.from(item, {
                  y: 32,
                  opacity: 0,
                  duration: 0.65,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: item,
                    start: "top 88%",
                    toggleActions: "play none none reverse",
                  },
                });
              });

              return;
            }

            if (mode === "fade") {
              gsap.from(items, {
                opacity: 0,
                duration: desktop ? 0.85 : 0.65,
                stagger: desktop ? 0.1 : 0.08,
                ease: desktop ? "power3.out" : "power2.out",
                scrollTrigger: {
                  trigger: container,
                  start: desktop ? "top 82%" : "top 88%",
                  toggleActions: "play none none reverse",
                },
              });

              return;
            }

            gsap.from(items, {
              y: desktop ? 50 : 32,
              opacity: 0,
              duration: desktop ? 0.85 : 0.65,
              stagger: desktop ? 0.1 : 0.08,
              ease: desktop ? "power3.out" : "power2.out",
              scrollTrigger: {
                trigger: container,
                start: desktop ? "top 82%" : "top 88%",
                toggleActions: "play none none reverse",
              },
            });
          });

          if (mobile) {
            requestAnimationFrame(() => ScrollTrigger.refresh());
          }
        },
      );

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  return null;
}
