import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import NavItem from "./NavItem";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#connect" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef<HTMLElement>(null);
  const lastScrollRef = useRef(0);
  const tickingRef = useRef(false);
  const programmaticScrollRef = useRef(false);
  const scrollEndTimerRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollRef.current = window.scrollY;

    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const updateNavbar = () => {
      const currentScroll = window.scrollY;
      const navHeight = navRef.current?.offsetHeight ?? 80;
      const activationLine = currentScroll + navHeight + window.innerHeight * 0.18;

      setScrolled(currentScroll >= 130);

      if (programmaticScrollRef.current) {
        setHidden(false);
      } else {
        const difference = currentScroll - lastScrollRef.current;
        const scrollingDown = difference > 4;
        const scrollingUp = difference < -4;

        if (currentScroll <= 130) {
          setHidden(false);
        } else if (scrollingDown) {
          setHidden(true);
        } else if (scrollingUp) {
          setHidden(false);
        }
      }

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (activationLine >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);

      lastScrollRef.current = currentScroll;
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(updateNavbar);
        tickingRef.current = true;
      }

      if (programmaticScrollRef.current) {
        if (scrollEndTimerRef.current) {
          window.clearTimeout(scrollEndTimerRef.current);
        }

        scrollEndTimerRef.current = window.setTimeout(() => {
          programmaticScrollRef.current = false;
          lastScrollRef.current = window.scrollY;
        }, 160);
      }
    };

    updateNavbar();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavbar);

      if (scrollEndTimerRef.current) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, []);

  const scrollToSection = (href: string, closeMobileMenu = false) => {
    const target = document.querySelector<HTMLElement>(href);

    if (!target) return;

    if (closeMobileMenu) {
      setIsOpen(false);
    }

    programmaticScrollRef.current = true;
    setHidden(false);
    setActiveSection(href.slice(1));

    const navHeight = navRef.current?.offsetHeight ?? 80;
    const extraSpace = 20;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navHeight -
      extraSpace;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <nav
      ref={navRef} aria-label="Main navigation"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-[#F7F2EA]/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}>
      <div
        className={`mx-auto flex w-[90%] items-center justify-between transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}>
        <a
          href="#home" aria-label="Go to home"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center text-[#555334]">
          <svg
            width="58" height="45" viewBox="0 0 58 45" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M4 6H29 M16.5 6V39"
              stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

            <path
              d="M45 8L31 22.5L46 38"
              stroke="currentColor" strokeWidth="3" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              active={activeSection === item.href.slice(1)}
              onClick={() => scrollToSection(item.href)}>
              {item.label}
            </NavItem>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("#contact");
          }}
          className="group hidden items-center gap-4 rounded-full bg-[#151612] px-6 py-3 text-sm text-[#F7F2EA] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md lg:flex">
          <span className="flex items-center gap-5">
            <span>Let's Connect</span>

            <ArrowRight
              size={18} strokeWidth={1.7}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative h-9 w-9 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}>
          <span
            className={`absolute left-1/2 h-[2.5px] rounded-full bg-[#29273D] transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-1/2 w-7 -translate-x-1/2 -translate-y-1/2 rotate-45"
                : "top-2.25 w-7 -translate-x-1/2"
            }`} />

          <span
            className={`absolute left-1/2 top-1/2 h-[2.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29273D] transition-all duration-300 ease-in-out ${
              isOpen ? "w-0 opacity-0" : "w-4.75 opacity-100"
            }`} />

          <span
            className={`absolute left-1/2 h-[2.5px] rounded-full bg-[#29273D] transition-all duration-300 ease-in-out ${
              isOpen
                ? "top-1/2 w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                : "bottom-2.25 w-6 -translate-x-1/2"
            }`} />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-[#F7F2EA]/95 backdrop-blur-md transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ul className="flex flex-col items-center gap-5 pb-7 pt-2">
          {navigationItems.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              active={activeSection === item.href.slice(1)}
              onClick={() => scrollToSection(item.href, true)}>
              {item.label}
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}