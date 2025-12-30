"use client";
import React, { useEffect, useRef } from "react";
import styles from "./about.module.css";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiThreedotjs,
  SiPython,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React / Next.js", color: "#61DAFB", icon: SiReact },
  { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
  { name: "Node.js", color: "#339933", icon: SiNodedotjs },
  { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
  { name: "PostgreSQL", color: "#4169E1", icon: SiPostgresql },
  { name: "Three.js", color: "#000000", icon: SiThreedotjs },
  { name: "Python", color: "#3776AB", icon: SiPython },
  { name: "Git", color: "#F05032", icon: SiGit },
];

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const highlight = highlightRef.current;
    if (!grid || !highlight) return;

    // Use the module's generated class name for the selector
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
      // Use styles['grid-item'] here as well
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
  }, []);

  return (
    <section className={styles['about-section']}>
      <div className={styles['about-header']}>
        <p className={styles.label}>01 / WHO AM I</p>
        <h1>
          Building digital experiences at the intersection of{" "}
          <span className={styles.italic}>design</span> and{" "}
          <span className={styles['highlight-text']}>engineering.</span>
        </h1>
      </div>

      <div className={styles['about-content']}>
        <div className={styles.bio}>
          <p>
            I am a Software Engineer based in Lagos, Nigeria, specializing in
            building highly interactive, performant web applications. I bridge
            the gap between complex logic and fluid user interfaces.
          </p>
        </div>

        <div>
          <p className={styles.label}>CORE TECH STACK</p>
          <div
            ref={gridRef}
            // Combining Tailwind classes with CSS Module class
            className={`${styles['grid-container-custom']} relative grid grid-cols-12`}
          >
            {skills.map((skill, i) => (
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
                <div className="flex flex-col items-center">
                  <p className="text-[13px] font-medium uppercase tracking-widest mix-blend-difference z-20 text-center px-2">
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