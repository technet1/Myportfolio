import React from "react";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

// Components
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import AboutMe from "./Component/AboutMe";
import BentoGrid from "./Component/BentoGrid";
import Collab from "./Component/Collab";

// Desktop Sections
import Projects from "./Component/Projects";   // ← desktop wala slider
import Design from "./Component/Design";         // ← agar banaya hai (optional)

// Mobile/Tablet Sections
import Project from "./Component/Project";     // ← mobile wala cards
import Designs from "./Component/Designs";       // ← mobile wala designs slider

import Footer from "./Component/Footer";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
<>
      <Nav />

      {/* Each section must have a unique id */}
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>
      <BentoGrid/>

      <section id="collab">
        <Collab /> 
        <Project/>
      </section>

      <section id="projects">
        <Projects />
      </section>
      

    <section id="designs" className="relative min-h-screen hidden lg:block">
        <Design />
      </section>

      {/* Mobile & Tablet ke liye */}
      <section className="lg:hidden py-20">
        <Designs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App