"use client";
import React from "react";
import ModeToggle from "../components/ModeToggle";
import About from "../about/page";
import Projects from "../projects/page";
import { ReactLenis, useLenis } from "lenis/react";
import Hero from "../hero/page";
import { usePortfolio } from "../context/PortfolioContext";
export default function Homepage() {

  const { contentRef } = usePortfolio();
  return (
    <ReactLenis root>
      <div ref={contentRef}>
       
        <Hero />
        <About />
        <Projects />
      </div>{" "}
    </ReactLenis>
  );
}
