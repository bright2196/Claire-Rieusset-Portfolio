import React from 'react';
import styles from './HorryBord.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import imageUx1 from '../Libow/img/imageUx1.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'



import typo from '../Libow/ressources/typographie.png'






const HorryBord = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="HorryBord_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Description"
          description1="Le challenge de cette semaine : créer un blog basé sur le thème de 
          « Bordeaux à travers… ». Pour réaliser ce projet, nous avions trois semaines par 
          groupe de 6. Nous avons choisi de parler des histoires terrifiantes qui hantent 
          la Belle Endormie. Nous avons créé ce blog de la recherche utilisateur 
          à l’intégration finale.
          "

        
          description2=" J’ai eu l’occasion d’occuper différents rôles dans ce projet. 
          Tout d’abord, j’ai mené une grande partie de la recherche utilisateur. 
          De plus, j’ai eu l’occasion de participer à la réalisation des wireframes 
          et de la maquette. Et pour finir, j’ai pris part à l’intégration du site (côté front).
          "

          titleInfo1="Client"
          descriptionInfo1="IUT Bordeaux-Montaigne"

          titleInfo2="Date du projet"
          descriptionInfo2="Avril 2020"

          titleInfo3="Catégories"
          descriptionInfo3="Développement web, UX/UI design"

          titleInfo4="Technologies"
          descriptionInfo4="Illustrator, XD, HTML5, CSS3"


          titleSection1="Recherche utilisateur_"
          textSection1="Les objectifs de cette recherche étaient de connaître l’appétence 
          de notre utilisateur pour les histoires terrifiantes, mais aussi son lien avec 
          la ville de Bordeaux."

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



export default HorryBord;