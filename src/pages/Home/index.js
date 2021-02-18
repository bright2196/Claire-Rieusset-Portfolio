import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from '../../components/HomeSection';
import LibowProject from '../../components/ProjectSection/LibowProject';
import AdaptProject from '../../components/ProjectSection/AdaptProject'
// import HorryBordProject from '../../components/ProjectSection/HorryBordProject';


const Home = () => (
  
 
  
  <ReactFullpage
    //fullpage options
    licenseKey = {'7756740D-1A7C4402-93E96B54-EBE84341'}
    scrollingSpeed = {1000}
    responsiveHeight= {'600'}

    fadingEffect= {true}
    menu= {'#myMenu'}
    navigation = {true}
    slideNavigation= {true}

    render={({ state, fullpageApi }) => {
      
          return (
      
        
        <ReactFullpage.Wrapper>
        
          
              <div className="section" data-anchor='Home' id='Home' data-tooltip='Home'>
              <HomeSection/>
              </div>
              <div className="section" data-anchor='Libow' id='Libow' data-tooltip='Projet 1'>
                <LibowProject/>
              </div>
              <div className="section" data-anchor='Adapt' id='Adapt' data-tooltip='Projet 2'>
                <AdaptProject/>
              </div>

              {/* <div className="section" data-anchor='HorryBord' id='HorryBord' data-tooltip='Projet 3'>
              <HorryBordProject/>
              </div> */}
          
        </ReactFullpage.Wrapper>
       
        
      );
    }}
  />
);
export default Home;
