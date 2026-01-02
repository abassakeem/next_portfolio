import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Copy from "../components/Copy";
import img from "../../public/cheats.gif";

export default function Hero() {
  return (
    <main className={styles.hero_container}>
      {/* Navigation */}
      <nav className={styles.hero_navbar}>
        <p>Akeem Lanre-Abass</p>
        <p>Portfolio ©2026</p>
      </nav>

      {/* Intro Section */}
      <section className={styles.hero_mainSection}>
        <div className={styles.hero_contentBox}>
          <p className={styles.hero_name}>Akeem Lanre-Abass</p>
          <Copy blackColor="#111" duration={0.8}>
            <h1 className={styles.hero_title}>Software<br/>Engineer</h1>
          </Copy>

          <Copy blackColor="#111" stagger={0.1} delay={0.5}>
            <p className={styles.hero_description}>
              Crafting high-performance digital solutions that bridge the gap between <span style={{color: 'var(--accent)'}}>enterprise security</span> and intuitive design.
            </p>
          </Copy>
        </div>
      </section>

      {/* About Section with Image */}
      <section className={`${styles.hero_mainSection} ${styles.hero_about}`}>
        <div className={styles.hero_contentBox}>
          <Copy blackColor="#111">
            <h1 className={styles.hero_title}>About</h1>
          </Copy>
          
          <div className={styles.hero_imageLayer}>
            <Image 
                src={img} 
                alt="Working" 
                fill 
                className={styles.hero_bgImage}
            />
          </div>

          <Copy blackColor="#111" stagger={0.08}>
            <p className={styles.hero_description}>
              Currently engineering secure  platforms. 
              I specialize in React, Next.js, and Cloud Infrastructure to build scalable, pixel-perfect applications.
            </p>
          </Copy>
        </div>
      </section>

      {/* Outro / CTA Section */}
      <section className={`${styles.hero_mainSection} ${styles.hero_cta}`}>
        <div className={styles.hero_contentBox}>
          <Copy blackColor="#fff" duration={0.8}>
            <h1 className={styles.hero_title}>Let's Connect</h1>
          </Copy>

          <Copy blackColor="#fff" delay={0.4}>
            <p className={styles.hero_description}>
              Open to innovative projects and full-stack engineering collaborations.
            </p>
          </Copy>
          
          <div style={{marginTop: '3rem'}}>
             <a href="mailto:lanreabassab1@gmail.com" style={{fontSize: '1.2rem', textDecoration: 'underline', color: 'white'}}>
               lanreabassab1@gmail.com
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}