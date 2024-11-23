import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import AnimatedSection from "./components/AnimatedSection";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        {/* <AnimatedSection>
          <Experience />
        </AnimatedSection> */}
        <Timeline />
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Blogs />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default App;
