import React from 'react';
import LinkBar from "../../components/LinkBar";
import SectionContainer from '../../components/SectionComponent';
import styles from "./Home.module.css";


const Home = () => {
  return (
    
  
    <div className={styles.containerGlobalHome }>
      <div className={styles.LinkBar}>
        
       <LinkBar  />
       </div>
      <div className={styles.containerHomeSection}>
        <SectionContainer/>
      </div>
       
    </div>
  
   
  );
};

export default Home;
