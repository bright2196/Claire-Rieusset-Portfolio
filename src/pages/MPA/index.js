import React from 'react';
import styles from './MPA.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import imageUx1 from '../Libow/img/imageUx1.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'



import typo from '../Libow/ressources/typographie.png'






const MPA = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Mes p'tites adresses_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Description"
          description1="Une semaine, six étudiants, une marque. Le concept de « Ma ville, mon shopping » 
          est simple : permettre aux commerçants locaux d’évoluer avec leur temps et 
          d’avoir une présence en ligne. La crise sanitaire actuelle a permis à cette entreprise 
          de se développer.  "

        
          description2="Notre objectif était de trouver une nouvelle charte graphique
           ainsi qu’un axe de positionnement intéressant pour que « Ma ville, mon shopping » 
           prenne une plus grande ampleur. Dans ce projet, j’avais le rôle d’UX designer. 
           Ainsi, j’ai eu l’occasion de suivre la recherche utilisateur de A à Z.
          "

          titleInfo1="Client"
          descriptionInfo1="IUT Bordeaux-Montaigne"

          titleInfo2="Date du projet"
          descriptionInfo2="Décembre 2020"

          titleInfo3="Catégories"
          descriptionInfo3="Identité visuelle, re-branding"

          titleInfo4="Technologies"
          descriptionInfo4="Figma, Illustrator, XD, Photoshop"


          titleSection1="Recherche utilisateur_"
          textSection1="Les objectifs de cette recherche étaient de connaître le positionnement
           et l’avis de notre cible sur les commerces locaux. Mais aussi de se renseigner 
           sur ses habitudes de consommation. "

          imageUx1={imageUx1}
          imageUx2={imageUx1}
          imageUx3={imageUx1}


          section2Title="Prototype_"
          wireframeImage1={wireframeImage1}
          wireframeImage2={wireframeImage2}
          




          color1={color1}

          color2={color2}

          color3={color3}

          
         
          typoImg={typo}

          linkOther1='/Home'
          linkOther2='/Home'
          backgroundColorOtherButton='rgba(2, 52, 42, 0.70)'

        />
        
    </section>

  
  
   
  );
};



export default MPA;