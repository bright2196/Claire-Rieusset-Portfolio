import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from '../../components/HomeSection';
import LibowProject from '../../components/ProjectSection/LibowProject';
import MedFocusProject from '../../components/ProjectSection/MedFocusProject';



const Home = () => (
  
 
  
  <ReactFullpage
    //fullpage options
    licenseKey = {'7756740D-1A7C4402-93E96B54-EBE84341'}
    scrollingSpeed = {1500}
    fadingEffect= {true}
	  menu= '#myMenu'

    render={({ state, fullpageApi }) => {
      return (
      
        
        <ReactFullpage.Wrapper>
          
          <div className="section" data-anchor='Home'>
           <HomeSection/>
          </div>
          <div className="section" data-anchor='Libow'>
            <LibowProject/>
          </div>
          <div className="section" data-anchor='MedFocus'>
            <MedFocusProject/>
          </div>
          
        </ReactFullpage.Wrapper>
       
        
      );
    }}
  />
);
export default Home;
