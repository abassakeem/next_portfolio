import React, { useRef } from 'react'
import { usePortfolio } from '../context/PortfolioContext';
import styles from './ModeToggle.module.css';

export default function ModeToggle() {
  const { mode, toggleMode, contentRef } = usePortfolio();

  return (
    <div className={styles.modeToggle} ref={contentRef}>
    
      <p>Switch to {mode === "developer" ? "QA Portfolio" : "Developer Portfolio"}</p>
      <button onClick={toggleMode}>Click here</button>
    </div>
  )
}
