"use client";
import React from "react";
import ModeToggle from "../components/ModeToggle";
import About from "../about/page";
import Projects from "../projects/page";
import { ReactLenis, useLenis } from "lenis/react";
import Hero from "../hero/page";
export default function Homepage() {
  return (
    <ReactLenis root>
      <div>
        <ModeToggle />
        <Hero />
        <About />
        <Projects />
      </div>{" "}
    </ReactLenis>
  );
}
