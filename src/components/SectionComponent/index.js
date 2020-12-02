import React from 'react';
import HomeSection from '../../components/HomeSection';
import AboutSection from '../AboutSection';
import ContactSection from '../ContactSection';
import RandomSection from '../RandomSection';
import WorkSection from '../WorkSection';
import styles from "./SectionComponent.module.css";


const SectionContainer = () => {
  return (
    
  
    <div className={styles.containerGlobalSection }>
     
      
      <div className={styles.containerHomeSection}>
      <HomeSection id="Home"/>


      <div className={styles.containerWorkSection}>
      <WorkSection id="Work"/>
      </div>

      
      </div>
      <div className={styles.containerAboutSection}>
      <AboutSection id="About"/>
      </div>

      <div className={styles.containerRandomSection}>
      <RandomSection id="Random"/>
      </div>

      
      <div className={styles.containerContactSection}>
        <ContactSection name="Contact"/>
      </div>
       
    </div>
  
   
  );
};

export default SectionContainer;
