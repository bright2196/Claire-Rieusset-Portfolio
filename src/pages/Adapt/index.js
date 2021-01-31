import React from 'react';
import styles from './Adapt.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import imageUx1 from '../Adapt/img/img_ux/adapt.png'
import imageUx2 from '../Adapt/img/img_ux/adapt1.png'
import imageUx3 from '../Adapt/img/img_ux/adapt2.png'
import imageUx4 from '../Adapt/img/img_ux/adapt3.png'
import imageUx5 from '../Adapt/img/img_ux/adapt4.png'
import imageUx6 from '../Adapt/img/img_ux/adapt5.png'
import imageUx7 from '../Adapt/img/img_ux/adapt6.png'
import imageUx8 from '../Adapt/img/img_ux/adapt7.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'



import typo from '../Libow/ressources/typographie.png'






const Adapt = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Adapt_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Description"
          description1="À l’instar de Spotify, Deezer ou encore Apple Music, 
          notre objectif était de créer une plateforme de streaming audio. 
          Cependant, nous avions une consigne : innover. Nous avons choisi de créer Adapt. "

        
          description2=" Le service de streaming audio en lien avec votre planning. 
          Vous avez prévu de faire du sport de 10h à 11h ? 
          Très bien, Adapt vous lance votre playlist sport. Notre application web 
          est développée sous ReactJs. "

          titleInfo1="Client"
          descriptionInfo1="IUT Bordeaux-Montaigne"

          titleInfo2="Date du projet"
          descriptionInfo2="Décembre 2020"

          titleInfo3="Catégories"
          descriptionInfo3="Développement web, UX/UI design"

          titleInfo4="Technologies"
          descriptionInfo4="Illustrator, XD, HTML5, CSS3, ReactJs"


          titleSection1="Recherche utilisateur_"
          textSection1="Les objectifs de cette recherche étaient de connaître la relation de 
          notre utilisateur avec les plateformes de streaming audio. Nous voulions savoir 
          comment il utilise des applications comme Spotify, Deezer…"

          imageUx1={imageUx1}
          imageUx2={imageUx2}
          imageUx3={imageUx3}
          imageUx4={imageUx4}
          imageUx5={imageUx5}
          imageUx6={imageUx6}
          imageUx7={imageUx7}
          imageUx8={imageUx8}


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



export default Adapt;