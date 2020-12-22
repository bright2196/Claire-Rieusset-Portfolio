import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from '../../components/HomeSection';
import LinkBar from '../../components/LinkBar';
import LibowProject from '../../components/ProjectSection/LibowProject';
import styles from './Home.module.css'
import MedFocusProject from '../../components/ProjectSection/MedFocusProject';

const Home = () => (
  
 
  
  <ReactFullpage
    //fullpage options
    licenseKey = {'7756740D-1A7C4402-93E96B54-EBE84341'}
    scrollingSpeed = {1500} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
      
        
        <ReactFullpage.Wrapper>
        <div className={styles.LinkBar}>
         <LinkBar/>
         </div>
          <div className="section">
           <HomeSection/>
          </div>
          <div className="section">
            <LibowProject/>
          </div>
          <div className="section">
            <MedFocusProject/>
          </div>
          
        </ReactFullpage.Wrapper>
       
        
      );
    }}
  />
);
export default Home;
