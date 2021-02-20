import React from 'react';
import styles from './TheorieAnime.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../TheorieAnime/img/headerImageMotion.png'
import imageUx1 from '../TheorieAnime/img/motion1.png'
import imageUx2 from '../TheorieAnime/img/motion2.png'
import imageUx3 from '../TheorieAnime/img/motion3.png'
import imageUx4 from '../TheorieAnime/img/motion4.png'
import imageUx5 from '../TheorieAnime/img/motion5.png'
import imageUx6 from '../TheorieAnime/img/motion6.png'
import imageUx7 from '../TheorieAnime/img/motion7.png'
import imageUx8 from '../TheorieAnime/img/motion8.png'
import color1 from '../TheorieAnime/img/color1.png'
import color2 from '../TheorieAnime/img/color2.png'
import color3 from '../TheorieAnime/img/color3.png'
import color4 from '../TheorieAnime/img/color4.png'
// import wireframeImage1 from '../Adapt/img/wireframeAdapt.png'
// import wireframeImage2 from '../Adapt/img/maquetteAdapt.png'
import typo from '../TheorieAnime/img/typo.png'






const TheorieAnime = () => {
  return (
    

    <section className={styles.TheorieAnimePageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Théorie animée_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Description"
          description1="En équipe de deux, nous avons créé un motion design 
          pour populariser 'La théorie de l'image connotée et dénotée' 
          de Roland Barthes."

        
          description2="Avant de créer cette animation, 
          nous avons fait beaucoup de recherches en sciences 
          de l'information et de la communication pour comprendre les détails  de cette théorie. "

          titleInfo1="Client"
          descriptionInfo1="IUT Bordeaux-Montaigne"

          titleInfo2="Date du projet"
          descriptionInfo2="Décembre 2019"

          titleInfo3="Catégories"
          descriptionInfo3="Design graphique, Motion design"

          titleInfo4="Technologies"
          descriptionInfo4="Illustrator, After Effects"


          titleSection1="Le design process_"
   

          imageUx1={imageUx1}
          imageUx2={imageUx2}
          imageUx3={imageUx3}
          imageUx4={imageUx4}
          imageUx5={imageUx5}
          imageUx6={imageUx6}
          imageUx7={imageUx7}
          imageUx8={imageUx8}


          // section2Title="Wireframes et maquettes_"
          // wireframeImage1={wireframeImage1}
          // wireframeImage2={wireframeImage2}
          
          titlePrototypeSection="Le motion design_"

          sectionTitle3="Couleurs_"

          color1={color1}

          color2={color2}

          color3={color3}

          color4={color4}

          

          
          typoSectionTitle="Typographie_"
          typoImg={typo}

          widthProto="100%"
          heightProto="535"
      
          linkProto="https://player.vimeo.com/video/386273836"

          
          linkOtherProject1="/libow-project"
          linkOtherProject2="/mes-petites-adresses-project"
          nameProjectOther1="LIBOW_"
          nameProjectOther2="MES ADRESSES_"
          
          backgroundColorOtherButton='RGBA(156,0,0,0.50)'

        />
        
    </section>

  
  
   
  );
};



export default TheorieAnime;