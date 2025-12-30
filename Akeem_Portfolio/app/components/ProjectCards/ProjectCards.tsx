"use client";

import React, { useRef } from "react";
import styles from "./ProjectCards.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCards() {
  const projects: {
    id: number;
    title: string;
    image: string;
    description: string;
  }[] = [
    {
      id: 1,
      title: "Project 1",
      image: "/projects/apple.png",
      description: "Description for project 1",
    },
    {
      id: 2,
      title: "Project 2",
      image: "/projects/bupower.png",
      description: "Description for project 2",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/projects/getlinked.png",
      description: "Description for project 3",
    },
    {
      id: 4,
      title: "Project 4",
      image: "/projects/hangman.png",
      description: "Description for project 4",
    },
    {
      id: 5,
      title: "Project 5",
      image: "/projects/guess.png",
      description: "Description for project 5",
    },
  ];

  const container = useRef(null);

  useGSAP(
    () => {
      const projectCards = document.querySelectorAll(`.${styles.stickyCard}`);

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
                const scale = 1 - progress * 0.25;
                const rotation = (index % 2 === 0 ? 5 : -5) * progress;
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
      },
      { scope: container }
  );

  return (
    <div className={styles.stickyCards} ref={container}>
      {projects.map((project) => (
        <div key={project.id} className={styles.stickyCard}>
          <div className={styles.stickyCardIndex}>
            <h1>{project.id}</h1>
          </div>
          <div className={styles.stickyCardContent}>
            <div className={styles.stickyCardContentWrapper}>
              <h1 className={styles.stickyCardHeader}>{project.title}</h1>
          <div className={styles.stickyCardImg}>
  <Image
    src={project.image}
    alt={project.title}
    // Remove layout="responsive" as it's deprecated in newer Next.js versions
    width={800} // This defines the aspect ratio base
    height={480} // Matches your 5/3 aspect ratio
    className="w-full h-auto object-cover rounded-lg"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>

              <div className={styles.stickyCardCopy}>
                <div className={styles.stickyCardCopyTitle}>
                  <p className="bg-white">( About this project )</p>
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
