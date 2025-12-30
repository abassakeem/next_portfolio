import React from 'react'
import { usePortfolio } from '../context/PortfolioContext';

export default function ModeToggle() {
  const { mode, toggleMode } = usePortfolio();

  return (
    <div>
      <p>Current mode: {mode}</p>
      <p>Switch to {mode === "developer" ? "QA Portfolio" : "Developer Portfolio"}</p>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  )
}
