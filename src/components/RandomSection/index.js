import React from 'react';
import CorpsText from '../CorpsText';
import styles from "./RandomSection.module.css";



export default function RandomSection() {
  return (
    <div className={styles.RandomSectionContainer} id="Random">
   
    <div className={styles.circleContainer}> 
    <a href="/Libow">
      <div className={styles.circle}> </div>
     
    </a>

    </div>
    <div className={styles.textContainer}>

      <div id="title">
    <h2 className={styles.Title}> Random Project_</h2>
    </div>
    <div id="sousTitre" className={styles.SousTitre}>
    <CorpsText
          name='Discover something. 
          You don’t know what projects could interest you ? 
          No problem, click on the circle and you will see_' 
          fontWeight= '400'
          fontSize= '25px'
          color= "#E0E0E0"
          /> 
    </div>

    </div>
        
  </div>
    
  );
}
