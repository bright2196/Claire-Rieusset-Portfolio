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
    <h2 className={styles.Title}>Essaye l'aléatoire_</h2>
    </div>
    <div id="sousTitre" className={styles.SousTitre}>
    <CorpsText
          name='Découvre quelque chose sur moi. 
          Clique sur ce bouton pour explorer un de mes projets_' 
          fontWeight= '400'
          fontSize= '25px'
          color= "#E0E0E0"
          /> 

          
    </div>

    </div>
        
  </div>
    
  );
}
