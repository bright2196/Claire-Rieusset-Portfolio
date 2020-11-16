import React from 'react';
import ScrollAnimation from '../ScrollAnimation';
import styles from "./HomeSection.module.css";


export default function HomeSection() {
  return (
    <div className={styles.HomeSectionContainer}>
    <div className={styles.containerText}>
     
    <h3 className={styles.Subtitles}> I am_</h3> 
    <h1 className={styles.title}>CLAIRE RIEUSSET</h1>
    
  </div>
    <div className={styles.AnimationScroll}>
    <ScrollAnimation />
    </div>
  </div>

  );
}
