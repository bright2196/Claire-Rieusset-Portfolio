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
          name='All my work_' 
          fontWeight= '600'
          fontSize= '30px'
          color= "#E0CF04"
          /> </div>
       <div className={styles.ElementContainer}>
     
     
       <div className={styles.ContainerElementPart1}>
       <Link to='/Libow' className={styles.LinkContainer}>
      <div className={styles.Element}>
        
        <WorkElementButton
            number= '1_Intership'
            name= 'LIBOW_'
            link='/Libow'/>
       
    
    </div>
    </Link>

    <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.Element}>
        
        <WorkElementButton
      name= 'MAIN DANS LA MAIN_'/>
    
    </div>
    </Link>


 <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.Element}>
        
        <WorkElementButton
      name= 'HORRY BORD_'/>
    
    </div>
    </Link>


    </div>

    <div className={styles.ContainerElementPart2}>

    <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.ElementR}>
        
        <WorkElementButton
      name= 'MOTION DESIGN_'/>
    
    </div>
    </Link>


 <Link to='/Libow' className={styles.LinkContainer}>
    <div className={styles.ElementR}>
        
        <WorkElementButton
      name= "MUSEE D'AQUITAIRE"/>
    
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
