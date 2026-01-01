import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Copy from "../components/Copy";
import img from "../../public/cheats.gif";

export default function Hero() {
  const bgImageSrc = "https://media1.tenor.com/m/tRE_-tKKUxwAAAAd/cheats.gif";

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
            <h1 className={styles.hero_title}>Creative<br/>Developer</h1>
          </Copy>

          <Copy blackColor="#111" stagger={0.1} delay={0.5}>
            <p className={styles.hero_description}>
              Building digital experiences that balance <span style={{color: 'var(--accent)'}}>technical precision</span> with aesthetic beauty.
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
          
          {/* Featured Image in Middle of Content */}
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
              Full-stack expertise in React, Next.js, and Node.js. 
              Focused on performance and modern interaction design.
            </p>
          </Copy>
        </div>
      </section>

      {/* Outro / CTA Section - High Contrast Flip */}
      <section className={`${styles.hero_mainSection} ${styles.hero_cta}`}>
        <div className={styles.hero_contentBox}>
          <Copy blackColor="#fff" duration={0.8}>
            <h1 className={styles.hero_title}>Let's Talk</h1>
          </Copy>

          <Copy blackColor="#fff" delay={0.4}>
            <p className={styles.hero_description}>
              Available for freelance and full-time collaborations.
            </p>
          </Copy>
          
          <div style={{marginTop: '3rem'}}>
             <a href="mailto:hello@akeem.com" style={{fontSize: '1.2rem', textDecoration: 'underline', color: 'white'}}>
               lanreabassab1@gmail.com
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}