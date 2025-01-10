import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import RayoAnimacion from "../RayoAnimacion";

function WelcomeHero({ title, description }) {

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}> 
      <div className="container">
      <div className={styles.animationContainer}>
          <RayoAnimacion />
        </div>
        <div className={styles.taglineContainer}>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{description}</p>
        </div>
        <div className={styles.cta}>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="#moxiepool"
          >
            MoxiePool Details
          </Link>
          {/* <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/developers"
          >
            Start Building
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default WelcomeHero;
