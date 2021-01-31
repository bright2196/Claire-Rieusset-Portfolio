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
          descriptionProject='Solaire, autoconsommation, énergie… 
          Tous ces mots résument mon stage de rédaction web et création de contenus multimédias. 
          Libow m’a donné l’opportunité de travailler sur des projets comme la création d’une 
          vidéo de vulgarisation en motion design ou encore la rédaction d’articles sur les 
          batteries solaires de Tesla. 
          '
          projectImage={LibowImage}
          link="/libow-project"


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