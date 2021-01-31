import React from 'react';
import styles from './Libow.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import imageUx1 from '../Libow/img/imageUx1.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'



import typo from '../Libow/ressources/typographie.png'






const Libow = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Libow_"
          designationProject="Stage_"
          descriptionTitle1="Description"
          description1="Libow est spécialiste en autoconsommation solaire. 
          Durant trois mois, j’ai occupé le poste de stagiaire en production de contenus 
          multimédias et rédaction web. Cette expérience m’a permis de développer 
          mes compétences dans de nombreux domaines, mais aussi de me familiariser 
          avec la vie en entreprise."

        
          description2="J’ai écrit quelques articles sur des concepts liés aux panneaux solaires.
           Cependant, le projet qui m’a le plus passionné a été la création d’un motion 
           design pour présenter les études solaires des leads."

          titleInfo1="Client"
          descriptionInfo1="Libow"

          titleInfo2="Date du projet"
          descriptionInfo2="25 juin - 28 août"

          titleInfo3="Catégories"
          descriptionInfo3="Rédaction web, motion design, graphisme, User interface"

          titleInfo4="Technologies"
          descriptionInfo4=" Illustrator, XD, HTML5, CSS3, Google Ads, After Effects, SEO, Pirsonal"


          titleSection1="Motion design_"
          textSection1="L'objectif de cette vidéo est de faciliter la compréhension de l'étude de solaire des leads.
          L'énergie solaire est un secteur complexe. Il est nécessaire de vulgariser certaines informations pour rendre l'information plus accessible.
          Voici, le processus de création de cette vidéo. "

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



export default Libow;