import dynamic from "next/dynamic";
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";

const ContactSection = dynamic(() => import("./components/homepage/contact"));
const Education = dynamic(() => import("./components/homepage/education"));
const Experience = dynamic(() => import("./components/homepage/experience"));
const Projects = dynamic(() => import("./components/homepage/projects"));
const Skills = dynamic(() => import("./components/homepage/skills"));

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Education />
      <ContactSection />
    </>
  );
}
