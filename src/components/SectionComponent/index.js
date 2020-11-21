import React from 'react';
import HomeSection from '../../components/HomeSection';
import WorkSection from '../WorkSection';
import styles from "./SectionComponent.module.css";


const SectionContainer = () => {
  return (
    
  
    <div className={styles.containerGlobalSection }>
      <div className={styles.containerHomeSection}>
      <HomeSection/>
      </div>
      <div className={styles.containerWorkSection}>
      <WorkSection/>
      </div>
       
    </div>
  
   
  );
};

export default SectionContainer;
