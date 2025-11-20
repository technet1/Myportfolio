import React from 'react'
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Nav from './Copmonent/Nav'
import Hero from './Copmonent/Hero'
import AboutMe from './Copmonent/Aboutme'
import BentoGrid from './Copmonent/BentoGrid'
import Collab from './Copmonent/Collab'
import Projects from './Copmonent/Projects';
import Design from './Copmonent/Design';
import Footer from './Copmonent/Footer';
import Project from './Copmonent/Project';
import Designs from './Copmonent/Designs';

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
      

      <section id="designs">
        <Design />
        <Designs/>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App