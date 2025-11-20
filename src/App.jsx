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

  <section id="hero"><Hero /></section>

  <section id="about"><AboutMe /></section>
  
  <BentoGrid />

  <section id="collab">
    <Collab /> 
    <Project />          {/* ← Mobile pe dikhega */}
  </section>

  <section id="projects">
    <Projects />         {/* ← Desktop pe dikhega */}
  </section>

  <section id="designs">
    {/* <Design /> */}    {/* ← Agar banaya hai toh uncomment kar dena */}
    <Designs />          {/* ← Mobile pe dikhega */}
  </section>

  <section id="contact">
    <Footer />
  </section>
</>
  )
}

export default App