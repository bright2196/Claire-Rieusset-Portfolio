import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from '../../components/HomeSection';
import LibowProject from '../../components/ProjectSection/LibowProject';
import AdaptProject from '../../components/ProjectSection/AdaptProject'


const Home = () => (
  
 
  
  <ReactFullpage
    //fullpage options
    licenseKey = {'7756740D-1A7C4402-93E96B54-EBE84341'}
    scrollingSpeed = {1500}
    fadingEffect= {true}
    menu= '#myMenu'
    navigation = {true}
    showActiveTooltip = {true}
    slideNavigation= {true}

    render={({ state, fullpageApi }) => {
      
          return (
      
        
        <ReactFullpage.Wrapper>
        
          
              <div className="section" data-anchor='Home' id='Home' data-tooltip='Home'>
              <HomeSection data-tooltip='Home'/>
              </div>
              <div className="section" data-anchor='Libow' id='Libow' data-tooltip='Projet 1'>
                <LibowProject/>
              </div>
              <div className="section" data-anchor='MedFocus' id='MedFocus' data-tooltip='Projet 2'>
                <AdaptProject/>
              </div>

              <div className="section" data-anchor='Re-Steam' id='Re-Steam' data-tooltip='Projet 3'>
              <LibowProject/>
              </div>

              <div className="section" data-anchor='Main dans la main' id='Main dans la main' data-tooltip='Projet 4'>
              <AdaptProject/>
              </div>
          
        </ReactFullpage.Wrapper>
       
        
      );
    }}
  />
);
export default Home;
