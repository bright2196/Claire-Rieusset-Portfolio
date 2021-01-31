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
          descriptionProject='À l’instar de Spotify, Deezer ou encore Apple Music, 
          notre objectif était de créer une plateforme de streaming audio.
          Nous avons choisi de créer Adapt. Le service de streaming audio en lien avec
          votre planning. '
          projectImage={AdaptImage}
          link="/adapt-project"
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