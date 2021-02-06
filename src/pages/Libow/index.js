import React from 'react';
import styles from './Libow.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'
import imageUx1 from '../Libow/img/carousel/libow1.png'
import imageUx2 from '../Libow/img/carousel/libow2.png'
import imageUx3 from '../Libow/img/carousel/libow3.png'
import imageUx4 from '../Libow/img/carousel/libow4.png'
import imageUx5 from '../Libow/img/carousel/libow5.png'
import imageUx6 from '../Libow/img/carousel/libow6.png'
import imageUx7 from '../Libow/img/carousel/libow7.png'
import imageUx8 from '../Libow/img/carousel/libow8.png'
import color1 from '../Libow/img/carousel/article1.png'
import color2 from '../Libow/img/carousel/article2.png'
import color3 from '../Libow/img/carousel/article3.png'

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

          imageUx1={imageUx1}
          imageUx2={imageUx2}
          imageUx3={imageUx3}
          imageUx4={imageUx4}
          imageUx5={imageUx5}
          imageUx6={imageUx6}
          imageUx7={imageUx7}
          imageUx8={imageUx8}



          widthProto=""
          heightProto=""
          linkProto=""

          section2Title="Prototype_"
          wireframeImage1={wireframeImage1}
          wireframeImage2={wireframeImage2}
          

          sectionTitle3="Redaction web_"
          titleArticle1="La vérité sur les batteries solaires."
          titleArticle2="Quelles sont les démarches administratives pour installer des panneaux solaires ?"


          titleArticle3="Carports solaires : comment fonctionnent-ils et combien coûtent-ils ? "
          color1={color1}

          color2={color2}
          color3={color3}

          linkOther1='/Home'
          linkOther2='/Home'
          backgroundColorOtherButton='rgba(2, 52, 42, 0.70)'

        />
        
    </section>

  
  
   
  );
};



export default Libow;