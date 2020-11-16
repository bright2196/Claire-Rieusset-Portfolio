import React from 'react'
import LinkText from '../LinkText';
import LogoGlobal from '../LogoPortfolio';
import styles from "./LinkBar.module.css";

const LinkBar = () => {
  return (
    <div className={styles.containerLinkBar}>   
        <LogoGlobal/> 
    <div className={styles.LinkModule}>
        <LinkText
        name= "Behance"
        urlLink= "https://www.behance.net/clairerieusset1"

        /> 

    </div>      
    </div>
  );
};

export default LinkBar;
