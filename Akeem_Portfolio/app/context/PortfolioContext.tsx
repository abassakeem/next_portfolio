"use client";
import React, { createContext, useContext, useState, useRef } from "react";
import gsap from "gsap";
import { portfolioData } from "../data/portfolioData";

type Mode = "developer" | "qa";

interface PortfolioContextType {
  mode: Mode;
  toggleMode: () => void;
  content: typeof portfolioData.developer;
  contentRef: React.RefObject<HTMLDivElement>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("developer");
  const contentRef = useRef<HTMLDivElement>(null);

const toggleMode = () => {
    if (!contentRef.current) return;

    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.3,
      onComplete: () => {
        setMode((prev) => (prev === "developer" ? "qa" : "developer"));
        
        // Wait for React to finish rendering the new cards
        setTimeout(() => {
          ScrollTrigger.refresh(true); // The 'true' forces a deeper refresh
        }, 100); 
      }
    })
    .to(contentRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.4,
    });
  };
  return (
    <PortfolioContext.Provider value={{ mode, toggleMode, content: portfolioData[mode], contentRef }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within Provider");
  return context;
};