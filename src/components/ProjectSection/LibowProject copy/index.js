import React from 'react';

// import AnimatedImage from '../../AnimatedImage'
import PropTypes from 'prop-types';
import ComponentProjectSection from '../ComponentProjectSection';
import LibowImage from './img/libowPhotoTest.png'
import styles from './LibowProject.module.css'




const LibowProject = () => {
  return (
    

  
    <div className={styles.containerGlobal}>

      <ComponentProjectSection
          desination= 'Stage_'
          projectName= 'Libow_'
          descriptionProject='Lorem ipsum dolor sit amet, consetetur 
          sadipscing elitr, sed diam nonumy eirmod 
          tempor invidunt ut labore et dolore magna 
          aliquyam erat, sed diam voluptua. At vero eos 
          et accusam et justo duo dolores et ea rebum.'
          projectImage={LibowImage}


      />
  
       
      </div>
     
       


  
   
  );
};

LibowProject.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string, 


}

export default LibowProject;