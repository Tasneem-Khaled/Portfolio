import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import AboutEducation from "./components/about/AboutEducation";
import ProjectsSection from "./components/projects/ProjectsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Footer from "./components/Footer";
import ConnectArea from "./components/contact/ConnectArea";
import ScrollAnimations from "./components/ScrollAnimations";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F2EA]">
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <AboutEducation />
      <ProjectsSection />
      <ExperienceSection />
      <ConnectArea />
      <Footer />
    </main>
  );
}
