import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Engineering from "./components/Engineering";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar lenisRef={lenisRef} />
      <Hero />
      <Engineering />
      <Stats />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}

export default App;