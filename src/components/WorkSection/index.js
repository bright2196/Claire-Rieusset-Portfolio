import React from 'react';
import ButtonProject from '../ButtonProject';
import SousTitre from '../Subtitles';
import WorkElementButton from '../WorkElementButton';
import styles from "./WorkSection.module.css";


export default function WorkSection() {
  return (
    <div className={styles.WorkSectionContainer}>

      <div className={styles.Subtitles}>     
      <SousTitre
          name='All my work_' 
          fontWeight= '500'
          fontSize= '30px'
          color= "#E0CF04"
          /> </div>
       <div className={styles.ElementContainer}>
     
     
       <div className={styles.ContainerElementPart1}>
     
      <div className={styles.Element1}>
        
        <WorkElementButton
      name= 'LIBOW_'/>
    
    </div>

    <div className={styles.Element2}>
        
        <WorkElementButton
      name= 'MAIN DANS LA MAIN_'/>
    
    </div>

    <div className={styles.Element3}>
        
        <WorkElementButton
      name= 'HORRY BORD_'/>
    
    </div>
    </div>

    <div className={styles.ContainerElementPart2}>
    <div className={styles.Element4}>
        
        <WorkElementButton
      name= 'MOTION DESIGN_'/>
    
    </div>

    <div className={styles.Element5}>
        
        <WorkElementButton
      name= "MUSEE D'AQUITAIRE"/>
    
    </div>

    </div>
    </div>
    <div className={styles.ButtonMore}> 
              <ButtonProject
              name='See more projects' 
              fontWeight= '600'
              fontSize= '1.1vw'
              color= "#E0E0E0"/>
             
    </div>
  </div>

  );
}
