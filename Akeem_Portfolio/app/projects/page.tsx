"use client";

import React from "react";
import styles from "./projects.module.css";
import ProjectCards from "../components/ProjectCards/ProjectCards";
import { usePortfolio } from "../context/PortfolioContext";
export default function Projects() {
  const { mode } = usePortfolio();

  return (
    <div>
      <section className={styles.intro}>
        <h1 className={styles.heading1}>Projects </h1>
      </section>
      <ProjectCards />

      <section className={styles.outro} data-mode={mode}>
        <div className={styles.outro_wrapper}>
          {/* Top Label */}
          <div className={styles.outro_top}>
            <p className={styles.label_caps}>
              Available for 2026 Collaborations
            </p>
            <div className={styles.status_dot}></div>
          </div>

          {/* Main Title */}
          <div className={styles.outro_main}>
            <h2 className={styles.big_title}>
              {mode === "developer" ? (
                <>
                  Let’s build <br />{" "}
                  <span className={styles.italic}>something iconic.</span>
                </>
              ) : (
                <>
                  Let’s make it <br />{" "}
                  <span className={styles.italic}>bulletproof.</span>
                </>
              )}
            </h2>
          </div>

          {/* Contact & Links */}
          <div className={styles.outro_bottom}>
            <div className={styles.contact_block}>
              <p className={styles.label_small}>Get in touch</p>
              <a
                href="mailto:lanreabassab1@gmail.com"
                className={styles.email_btn}
              >
                lanreabassab1@gmail.com
              </a>
            </div>

            <div className={styles.footer_links}>
              <div className={styles.social_group}>
                <a
                  href="https://www.linkedin.com/in/akeem-lanre-abass-618199229/"
                  className={styles.social_link}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/abassakeem"
                  className={styles.social_link}
                >
                  GitHub
                </a>
              </div>
              <p className={styles.copyright}>
                © 2026 Akeem Lanre-Abass — Built with Precision
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
