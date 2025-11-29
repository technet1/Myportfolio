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
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  // Ye line add kar → Nav use kar sake Lenis ko
  window.lenis = lenis;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
    delete window.lenis;
  };
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

      <section id="projects-desktop">
        <Projects />
      </section>
      

    <section id="designs-m" className="relative min-h-screen hidden lg:block">
        <Design />
      </section>

      {/* Mobile & Tablet ke liye */}
      <section className="  ">
        <Designs />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App