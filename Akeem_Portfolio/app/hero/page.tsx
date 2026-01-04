"use client";
import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Copy from "../components/Copy";
import ModeToggle from "../components/ModeToggle";
import { usePortfolio } from "../context/PortfolioContext";

export default function Hero() {
  const { content, mode } = usePortfolio(); // Destructure mode here

  return (
    <main className={styles.hero_container}>
      <nav className={styles.hero_navbar}>
        <div className={styles.nav_left}>
          <p>Akeem Lanre-Abass</p>
        </div>

        <div className={styles.nav_center}>
          <ModeToggle />
        </div>

        <div className={styles.nav_right}>
          <p>Portfolio ©2026</p>
        </div>
      </nav>

      {/* Intro Section */}
      <section className={styles.hero_mainSection}>
        <div className={styles.hero_contentBox}>
          {/* 1. Add key={mode} here to force the animation component to refresh its text */}
          <Copy key={`title-${mode}`} blackColor="#111" duration={0.6}>
            <h1 className={styles.hero_title}>{content.heroTitle}</h1>
          </Copy>

          <p className={styles.hero_name}>Akeem Lanre-Abass</p>

          <Copy
            key={`desc-${mode}`}
            blackColor="#111"
            stagger={0.1}
            delay={0.5}
          >
            <p className={styles.hero_description}>
              {content.description}{" "}
              {/* 2. Use the dynamic description from context */}
            </p>
          </Copy>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.hero_mainSection} ${styles.hero_about}`}>
        <div className={styles.hero_contentBox}>
          <Copy blackColor="#111">
            <h1 className={styles.hero_title}>About</h1>
          </Copy>

          <div className={styles.hero_imageLayer}>
            <Image
              src={content.heroImage} // 3. Use the dynamic image from context
              alt="Working"
              fill
              className={styles.hero_bgImage}
            />
          </div>

          <Copy key={`about-${mode}`} blackColor="#111" stagger={0.08}>
            <p className={styles.hero_description}>
              {/* 4. Use dynamic bio text from your portfolioData */}
             
                Engineering secure platforms with focus on performance.
            </p>
          </Copy>
        </div>
      </section>

      {/* CTA Section stays mostly static as your contact info doesn't change */}
    </main>
  );
}
