import React from 'react'
import LinkText from '../LinkText';
import LogoGlobal from '../LogoPortfolio';
import styles from "./LinkBar.module.css";

const LinkBar = () => {
  return (
    <div className={styles.containerLinkBar}>   
        <LogoGlobal/> 
    <div className={styles.LinkModule}>
      <div className={styles.BehanceLink}>
        <LinkText className={styles.textStyles}
        name= "Behance"
        urlLink= "https://www.behance.net/clairerieusset1"

        /> 
        </div>
        <div className={styles.LinkedinLink}>
        <LinkText className={styles.textStyles}
        name= "Linkedin"
        urlLink= "https://www.linkedin.com/in/claire-rieusset-882633182/"

        /> 
        </div>

    </div>      
    </div>
  );
};

export default LinkBar;
