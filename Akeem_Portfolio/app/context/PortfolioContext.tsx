"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PortfolioMode = "developer" | "qa";

interface PortfolioContextProps {
  mode: PortfolioMode;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>("developer");

  const toggleMode = () => {
    setMode(prev => (prev === "developer" ? "qa" : "developer"));
  };

  return (
    <PortfolioContext.Provider value={{ mode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used inside PortfolioProvider.");
  }
  return context;
}
