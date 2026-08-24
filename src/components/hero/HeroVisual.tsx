import heroVisual from "../../assets/images/hero-visual.png";

export default function HeroVisual() {
  return (
    <div className="hero-visual pointer-events-none relative z-10 flex w-full items-center justify-center lg:justify-end">
      <div className="relative w-full max-w-152.5 lg:max-w-190 xl:max-w-212.5">
        <div className="absolute left-[20%] top-[25%] h-[50%] w-[60%] rounded-full bg-[#B5AA98]/15 blur-[55px]" />

        <img
          src={heroVisual}
          alt="Illustration of my front-end development process"
          className="relative z-10 h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
