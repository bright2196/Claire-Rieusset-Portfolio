import React from 'react';
import ButtonProject from '../../ButtonProject';
import CorpsText from '../../CorpsText';
import SousTitre from '../../Subtitles';
import Title from '../../Title';
import styles from "./MedFocusProject.module.css";




const MedFocusProject = () => {
  return (
    
  
    <div className={styles.containerGlobalLibow }>
   <div className={styles.leftSide}>
      <div className={styles.designation}>
          <SousTitre
          name='Projet Étudiant_' 
          fontWeight= '400'
          fontSize= '20px'
          color= "#E0CF04"
          
          />
      </div>
    
     
        <div className={styles.titlePage}>
      <Title
          name='Medfocus_' 
          fontWeight= '600'
          fontSize= '40px'
          color= "#E0E0E0"
          /> 
        </div>
        <div className={styles.TextAndButtonContainer}>
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

        
        <div className={styles.ButtonContainer}>
            <ButtonProject
            name="Découvrir le projet_" 
            fontWeight= '600'
            fontSize= '18px'
            color= "#E0E0E0"
            />
    
        </div>
        </div>
        </div>
       
       
      </div>
     
       


  
   
  );
};

export default MedFocusProject;