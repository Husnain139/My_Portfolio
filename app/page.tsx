import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
