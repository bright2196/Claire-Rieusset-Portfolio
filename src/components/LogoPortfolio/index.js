import React from 'react'
import styles from "./LogoPortfolio.module.css";
import LogoPortfolio from "./img/logoPortfolio.svg"

const LogoGlobal = () => {
  return (
    <div className={styles.containerLinkBar}>
        <img classname={styles.LogoPortfolio} src={LogoPortfolio} alt='' />
      
    </div>
  );
};

export default LogoGlobal;
