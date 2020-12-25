import React from 'react';
import CorpsText from '../CorpsText';
import SousTitre from '../Subtitles';
import styles from "./AboutSection.module.css";
import MyPortrait from '../AboutSection/img/MyPhoto.svg'


export default function AboutSection() {
  return (
    <div className={styles.AboutSectionContainer} id="About">
    <div className={styles.containerText}>
     
    <div className={styles.Subtitles}>
          <SousTitre
          name='Hi 👋 _' 
          fontWeight= '600'
          fontSize= '28px'
          color= "#E0CF04"
          /> 
    
    </div> 



    <div className={styles.TextCorps}>
          <CorpsText
          name='Lorem ipsum dolor sit amet, consetetur 
          sadipscing elitr, sed diam nonumy eirmod 
          tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua. At vero eos 
          et accusam et justo duo dolores et ea rebum. ' 
          fontWeight= '400'
          fontSize= '16px'
          color= "#E0E0E0"
          /> 
    </div>
    
  </div>
  <div className={styles.MyPortrait}>
    <img src={MyPortrait} alt="me"/>
  </div>
 
  
  </div>
     

  );
}
