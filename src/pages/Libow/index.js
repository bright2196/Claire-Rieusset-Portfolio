import React from 'react';
import styles from './Libow.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'


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
          descriptionInfo4=" Illustrator, XD, Wordpress, Divi, Google Ads, After Effects, SEO, Pirsonal"


          titleSection1="Rédaction web_"
          textSection1="Avant d’arriver à Libow, je ne connaissais absolument rien sur les panneaux solaires. J’ai dû me former grâce à des articles, mais aussi des vidéos explicatives réalisées par les marques spécialisées dans le solaire. 
          L’objectif de mon stage était de réaliser plusieurs articles pour le blog du site. Ils devaient donc respecter un certain nombre de caractères et booster le SEO. 
          Face à mon profil créatif, l’entreprise m’a proposé de réaliser les illustrations des articles ainsi que le design de certaines pages web.  "

          widthProto=""
          heightProto=""
          linkProto=""

          section2Title="Prototype_"
          wireframeImage1={wireframeImage1}
          wireframeImage2={wireframeImage2}
          

          linkOther1='/Home'
          linkOther2='/Home'
          backgroundColorOtherButton='rgba(2, 52, 42, 0.70)'

        />
        
    </section>

  
  
   
  );
};



export default Libow;