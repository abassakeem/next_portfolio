"use client";
import React from "react";
import ModeToggle from "../components/ModeToggle";
import About from "../about/page";
import Projects from "../projects/page";
import { ReactLenis, useLenis } from 'lenis/react'
export default function Hero() {
  return (
    <ReactLenis root>
      <div>
        <ModeToggle />
        <About />
        <Projects />
      </div>{" "}
    </ReactLenis>
  );
}
