import React from 'react';
import CorpsText from '../CorpsText';
import SousTitre from '../Subtitles';
import styles from "./AboutSection.module.css";
import MyPortrait from '../AboutSection/img/MyPhoto.svg'
import { Link } from 'react-router-dom';


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



    <div className={styles.ContainerTextCvLink} >
      <div className={styles.cvLink}>
        <Link className={styles.styleCvLink} to="/cv-claire-rieusset">Explore mon CV</Link>
      </div>
      <div className={styles.TextCorps}>
          <CorpsText
          name='Je me présente, je m’appelle Claire. Je suis une grande passionnée 
          de graphisme, mais aussi d’UX design. Mon passe-temps ? Faire ma petite 
          enquête sur mon utilisateur pour répondre à ses besoins. Vrai couteau suisse
           du digital, je m’intéresse aussi au développement web, à la rédaction web 
           et à l’audiovisuel. Un projet ? Un stage ? Je serais honoré qu’on travaille 
           ensemble ! ' 
          fontWeight= '400'
          fontSize= '16px'
          color= "#E0E0E0"
          /> 
        </div>
    </div>
    
  </div>
  <div className={styles.MyPortrait}>
    <img src={MyPortrait} alt="me"/>
  </div>
 
  
  </div>
     

  );
}
