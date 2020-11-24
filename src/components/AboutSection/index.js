import React from 'react';
import ButtonProject from '../ButtonProject';
import CorpsText from '../CorpsText';
import SousTitre from '../Subtitles';
import styles from "./AboutSection.module.css";
// import MyPortrait from '../AboutSection/img/MyPhoto.png'


export default function AboutSection() {
  return (
    <div className={styles.AboutSectionContainer}>
    <div className={styles.containerText}>
     
    <div className={styles.Subtitles}>
          <SousTitre
          name='About me_' 
          fontWeight= '600'
          fontSize= '2vw'
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
          fontSize= '1.2vw'
          color= "#E0E0E0"
          /> 

<div className={styles.ButtonDiscover}>
      <ButtonProject
      
      name='More about me' 
      fontWeight= '600'
      fontSize= '1.1vw'
      color= "#E0E0E0"/>
      </div>
    </div>
    
  </div>
  <div className={styles.MyPortrait}>
    {/* <img src={MyPortrait} alt="me"/> */}
  </div>
 
  
  </div>
     

  );
}
