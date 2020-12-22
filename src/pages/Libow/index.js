import React from 'react';
import LinkBar from '../../components/LinkBar';
import styles from "./Libow.module.css";
import Title from '../../components/Title';
import CorpsText from '../../components/CorpsText';
import SousTitre from '../../components/Subtitles';
import Time from './img/duree.svg';


const Libow = () => {
  return (
    
  
    <div className={styles.containerGlobalLibow }>
      <div className={styles.LinkBar}>
        
       <LinkBar className={styles.LinkBarContainer}/>
       </div>
      <div className={styles.containerLibowSection}>
        <div className={styles.containerTextHeader}>
        <div className={styles.titlePage}>
      <Title 
          name='Libow_' 
          fontWeight= '600'
          fontSize= '50px'
          color= "#E0E0E0"
          /> 
        </div>

        <div className={styles.SousTitreProject}>

        <SousTitre
              name='Internship_' 
              fontWeight= '400'
              fontSize= '16px'
              color= "#E0CF04"
        />

        </div>
        <div className={styles.descriptionProject}>

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
        <div className={styles.dureePhoto}>
            <img src={Time} alt=''/>
        </div>
        <div className={styles.detailsProject}>
          <div className={styles.TitleRole}>
            <SousTitre
              name='Mon rôle_' 
              fontWeight= '400'
              fontSize= '16px'
              color= "#E0CF04"
            />
          </div>

        </div>
      </div>
     
       
    </div>
  
   
  );
};

export default Libow;