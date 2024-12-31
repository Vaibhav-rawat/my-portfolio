import Education from "../_components/home/education";
import Experience from "../_components/home/experience";
import HeroSection from "../_components/home/hero-section";
import Projects from "../_components/home/projects";
import Skills from "../_components/home/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </>
  );
}
