"use client";
import React, { useEffect, useRef } from "react";
import styles from "./about.module.css";
import { usePortfolio } from "../context/PortfolioContext";

export default function About() {
  const { content, mode } = usePortfolio(); // Get dynamic content and mode
  const gridRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const highlight = highlightRef.current;
    if (!grid || !highlight) return;

    // Grab the first item based on current mode
    const firstItem = grid.querySelector(`.${styles['grid-item']}`) as HTMLElement;

    const moveToElement = (element: HTMLElement | null) => {
      if (!element || !grid || !highlight) return;
      const rect = element.getBoundingClientRect();
      const gridRect = grid.getBoundingClientRect();

      highlight.style.transform = `translate(${rect.left - gridRect.left}px, ${
        rect.top - gridRect.top
      }px)`;
      highlight.style.width = `${rect.width}px`;
      highlight.style.height = `${rect.height}px`;
      highlight.style.backgroundColor = element.dataset.color || "#fff";
      highlight.style.opacity = "1";
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const item = target.closest(`.${styles['grid-item']}`) as HTMLElement;
      if (item) moveToElement(item);
    };

    const handleMouseLeave = () => moveToElement(firstItem);

    moveToElement(firstItem);
    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mode]); // Re-run effect when mode switches

  return (
    <section className={styles['about-section']}>
      <div className={styles['about-header']}>
        <p className={styles.label}>01 / ORIGIN</p>
        <h1>
          Engineering secure, scalable systems with a focus on{" "}
          <span className={styles.italic}>performance</span> and{" "}
          <span className={styles['highlight-text']}>visual integrity.</span>
        </h1>
      </div>

      <div className={styles['about-content']}>
        <div className={styles.bio}>
          <p>{content.about.bio}</p>
        </div>

        <div>
          <p className={styles.label}>TECHNICAL STRENGTHS</p>
          <div
            key={mode} // Force fresh mount of grid for highlight calculation
            ref={gridRef}
            className={`${styles['grid-container-custom']} relative grid grid-cols-12`}
          >
            {content.about.skills.map((skill: any, i: number) => (
              <div
                key={i}
                data-color={skill.color}
                className={`
                ${styles['grid-item']}
                relative z-10 h-32 md:h-48 flex items-center justify-center cursor-none text-center
                ${i < 3 ? "col-span-4" : "col-span-3"} 
                max-md:col-span-12
              `}
              >
                <div className={`${styles.skill} flex flex-col items-center `}>
                  <p className="skill text-[13px] font-medium uppercase tracking-widest mix-blend-difference z-20 text-center px-2">
                    {skill.name}
                  </p>
                  <div className="mt-2 mix-blend-difference z-20">
                    <skill.icon size={24} />
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.highlight} ref={highlightRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}