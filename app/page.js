import dynamic from "next/dynamic";

import HeroSection from "./components/homepage/hero-section";
const AboutSection = dynamic(() => import("./components/homepage/about"));
const ContactSection = dynamic(() => import("./components/homepage/contact"));
const Education = dynamic(() => import("./components/homepage/education"));
const Experience = dynamic(() => import("./components/homepage/experience"));
const Skills = dynamic(() => import("./components/homepage/skills"));

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Education />
      <ContactSection />
    </>
  );
}
