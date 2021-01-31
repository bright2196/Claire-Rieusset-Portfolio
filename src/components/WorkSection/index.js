import React from 'react';
import { Link } from 'react-router-dom';
import ButtonProject from '../ButtonProject';
import SousTitre from '../Subtitles';
import WorkElementButton from '../WorkElementButton';
import styles from "./WorkSection.module.css";


export default function WorkSection() {
  return (
    <div className={styles.WorkSectionContainer} id="Work">

      <div className={styles.Subtitles}>     
      <SousTitre
          name='Tous mes projets_' 
          fontWeight= '600'
          fontSize= '30px'
          color= "#E0CF04"
          /> </div>


       <div className={styles.ElementContainer}>

     
       <div className={styles.ContainerElementPart1}>
       <Link to='/libow-project' className={styles.LinkContainer}>
      <div className={styles.Element}>
        
        <WorkElementButton
            number= '1_Stage'
            name= 'LIBOW_'
            link='/libow-project'
            backgroundColor='RGBA(207,192,5,0.3)'/>
       
    
    </div>
    </Link>

    <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.Element}>
        
        <WorkElementButton
      name= 'ADAPT_'
      backgroundColor='RGBA(207,192,5,0.3)'/>
    
    </div>
    </Link>


 <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.Element}>
        
        <WorkElementButton
      name= "VITRINE VERTE_"
      backgroundColor='RGBA(207,192,5,0.3)'/>
    
    </div>
    </Link>


    </div>

    <div className={styles.ContainerElementPart2}>

    <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.ElementR}>
        
        <WorkElementButton
      name= 'NILK2GO_'
      backgroundColor='RGBA(207,192,5,0.3)'/>
    
    </div>
    </Link>


 <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.ElementR}>
        
        <WorkElementButton
      name= "MES ADRESSES_"
      backgroundColor='RGBA(207,192,5,0.3)'/>
    
    </div>
    </Link>

    </div>
    </div>
    <div className={styles.ButtonMore}> 
              <ButtonProject
              name='See more projects' 
              fontWeight= '600'
              fontSize= '18px'
              color= "#E0E0E0"/>
             
    </div>
  </div>

  );
}
