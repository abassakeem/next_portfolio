"use client";

import React, { useRef } from "react";
import styles from "./ProjectCards.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { usePortfolio } from "../../context/PortfolioContext";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCards() {
  const { content, mode } = usePortfolio(); // Access dynamic project list
  const container = useRef(null);

useGSAP((self) => {
  

      // Clear existing triggers to prevent stacking during mode toggle
     

      const projectCards = self.selector(`.${styles.stickyCard}`);

      projectCards.forEach((project, index) => {
        if (index < projectCards.length - 1) {
          ScrollTrigger.create({
            trigger: project,
            start: "top top",
            endTrigger: projectCards[projectCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true,
          });
        }

        if (index < projectCards.length - 1) {
          ScrollTrigger.create({
            trigger: project,
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.1; // Reduced scale slightly for better UX
              const rotation = (index % 2 === 0 ? 2 : -2) * progress;
              const afterOpacity = progress;

              gsap.set(project, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });

      // Force a refresh once elements are rendered
      ScrollTrigger.refresh();
    },
    { scope: container, dependencies: [mode] } // Re-run animation logic when mode changes
  );
  

  return (
    <div
      className={styles.stickyCards}
      ref={container}
      key={mode} // Crucial: Re-mounts the container to reset card refs
    >
      {content.projects.map((project: any) => (
        <div key={`${mode}-${project.id}`} className={styles.stickyCard}>
          <div className={styles.stickyCardIndex}>
            <h1>0{project.id}</h1>
          </div>
          <div className={styles.stickyCardContent}>
            <div className={styles.stickyCardContentWrapper}>
              <h1 className={styles.stickyCardHeader}>{project.title}</h1>
              <div className={styles.stickyCardImg}>
                <div className={styles.stickyCardImgWrapper}>
  <Image
    src={project.image}
    alt={project.title}
    fill // This makes the image fill the parent container
    className="object-cover rounded-lg" // Replaces manual width/height logic
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
    priority={project.id === 1}
  />
</div>
              </div>

              <div className={styles.stickyCardCopy}>
                <div className={styles.stickyCardCopyTitle}>
                  <p className="bg-white px-2">
                    ( {mode === "developer" ? "Build Specs" : "Test Specs"} )
                  </p>
                </div>

                <div className={styles.stickyCardCopyDescription}>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
