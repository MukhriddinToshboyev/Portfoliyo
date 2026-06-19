"use client";

import { useRef } from "react";
import Home from "@/src/features/home";
import About from "@/src/features/about";
import Projects from "@/src/features/projects";
import Contact from "@/src/features/contact";
import Footer from "@/src/features/footer";

export default function Page() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Home
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
