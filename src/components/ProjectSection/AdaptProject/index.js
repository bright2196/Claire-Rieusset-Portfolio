import React from 'react';

// import AnimatedImage from '../../AnimatedImage'
import PropTypes from 'prop-types';
import ComponentProjectSection from '../ComponentProjectSection';
import AdaptImage from './img/adaptPhotoTest.png'
import styles from './AdaptProject.module.css'




const AdaptProject = () => {
  return (
    

  
    <div className={styles.containerGlobal}>

      <ComponentProjectSection
          desination= 'Projet Étudiant_'
          projectName= 'Adapt_'
          descriptionProject='Lorem ipsum dolor sit amet, consetetur 
          sadipscing elitr, sed diam nonumy eirmod 
          tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua. At vero eos 
          et accusam et justo duo dolores et ea rebum.'
          projectImage={AdaptImage}


      />
  
       
      </div>
     
       


  
   
  );
};

AdaptProject.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string, 


}

export default AdaptProject;