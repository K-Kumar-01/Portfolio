import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Blogs from '../components/Blogs';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
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