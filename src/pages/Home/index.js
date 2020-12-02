import React from 'react';
import LinkBar from "../../components/LinkBar";
import NavBar from '../../components/NavBar';
import SectionContainer from '../../components/SectionComponent';
import styles from "./Home.module.css";


const Home = () => {
  return (
    
  
    <div className={styles.containerGlobalHome }>
    
     
      
      <div className={styles.containerHomeSection}>
     
      <LinkBar/>
        <NavBar/>
        
       
        <SectionContainer/>
      
     
       
    </div>
    </div>
  
   
  );
};

export default Home;
