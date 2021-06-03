import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollAnimation from '../ScrollAnimation';
import styles from "./HomeSection.module.css";


export default function HomeSection() {
  return (
    <div className={styles.HomeSectionContainer} id="Home">
    <div className={styles.containerText}>
    <h1 className={styles.title}>BIENVENUE</h1>
    <div className={styles.Subtitles}> 
    <h3 className={styles.subtitles2}>Je suis <NavLink to= "/a-propos" className={styles.changeColor}>Claire Rieusset</NavLink>, étudiante à plein temps et... bientôt votre future alternante 🤞</h3>
    </div> 
    
    
  </div>
    <div className={styles.Animation}>
    <ScrollAnimation />
    </div>
  </div>

  );
}
