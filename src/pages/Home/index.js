import React from 'react';
import HomeSection from '../../components/HomeSection';
import LinkBar from "../../components/LinkBar";
import styles from "./Home.module.css";


const Home = () => {
  return (
    
  
    <div className={styles.containerGlobalHome}>
       <LinkBar />
      <div className={styles.containerHomeSection}>
      <HomeSection/>
      </div>
       
    </div>
  
   
  );
};

export default Home;
