import React from 'react';

// import AnimatedImage from '../../AnimatedImage'
import PropTypes from 'prop-types';
import ComponentProjectSection from '../ComponentProjectSection';
import AdaptImage from './img/adaptPhotoTest.png'
import styles from './HorryBordProject.module.css'




const HorryBordProject = () => {
  return (
    

  
    <div className={styles.containerGlobal}>

      <ComponentProjectSection
          desination= 'Projet Étudiant_'
          projectName= 'HorryBord_'
          descriptionProject='Le challenge de cette semaine : créer un blog basé sur le thème de 
          « Bordeaux à travers… ». Pour réaliser ce projet, nous avions trois semaines par groupe de 6.
          Nous avons choisi de parler des histoires terrifiantes qui hantent la Belle Endormie.'
          projectImage={AdaptImage}
          link='/horrybord-project'


      />
  
       
      </div>
     
       


  
   
  );
};

HorryBordProject.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string, 


}

export default HorryBordProject;