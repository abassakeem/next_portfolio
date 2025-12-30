import React from "react";
import styles from "./projects.module.css";
import ProjectCards from "../components/ProjectCards/ProjectCards";
export default function Projects() {


    
  return (
    <div>
      <section className={styles.intro}>
        <h1 className={styles.heading1}>Projects </h1>
      </section>
      <ProjectCards />

      <section className={styles.outro}>
        <h1 className={styles.heading1}>End </h1>
      </section>
    </div>
  );
}
