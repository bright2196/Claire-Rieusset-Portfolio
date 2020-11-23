import React from 'react';
import ScrollAnimation from '../ScrollAnimation';
import styles from "./HomeSection.module.css";
import SousTitre from '../Subtitles';


export default function HomeSection() {
  return (
    <div className={styles.HomeSectionContainer}>
    <div className={styles.containerText}>
     
    <div className={styles.Subtitles}> <SousTitre
    name='I am_' 
    fontWeight= '500'
    fontSize= '30px'
    /> </div> 
    <h1 className={styles.title}>CLAIRE RIEUSSET</h1>
    
  </div>
    <div className={styles.Animation}>
    <ScrollAnimation />
    </div>
  </div>

  );
}
