import React from 'react';
import ScrollAnimation from '../ScrollAnimation';
import styles from "./HomeSection.module.css";


export default function HomeSection() {
  return (
    <div className={styles.HomeSectionContainer} id="Home">
    <div className={styles.containerText}>
    <h1 className={styles.title}>BIENVENUE_</h1>
    <div className={styles.Subtitles}> 
    <h3 className={styles.subtitles2}>Je suis <span className={styles.changeColor}>Claire Rieusset</span>, une créative passionnée par tout ce qui touche au multimédia</h3>
    </div> 
    
    
  </div>
    <div className={styles.Animation}>
    <ScrollAnimation />
    </div>
  </div>

  );
}
