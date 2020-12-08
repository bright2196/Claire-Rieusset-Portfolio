import React from 'react';
import HomeSection from '../../components/HomeSection';
import AboutSection from '../AboutSection';
import ContactSection from '../ContactSection';
import RandomSection from '../RandomSection';
import WorkSection from '../WorkSection';
import styles from "./SectionComponent.module.css";


const SectionContainer = () => {
  return (
    
  
    <div className={styles.containerGlobalSection} dir="ltr">
     
      
      <section className={styles.containerHomeSection}>
        <HomeSection id="Home"/>
      </section>

      <section className={styles.containerWorkSection}>
      <WorkSection id="Work"/>
      </section>

      
      
      <section className={styles.containerAboutSection}>
      <AboutSection id="About"/>
      </section>

      <section className={styles.containerRandomSection}>
      <RandomSection id="Random"/>
      </section>

      
      <section className={styles.containerContactSection}>
        <ContactSection name="Contact"/>
      </section>
       
    </div>
  
   
  );
};

export default SectionContainer;
