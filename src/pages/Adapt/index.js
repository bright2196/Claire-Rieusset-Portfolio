import React from 'react';
import styles from './Adapt.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Adapt/img/headerImage.png'
import imageUx1 from '../Adapt/img/img_ux/adapt.png'
import imageUx2 from '../Adapt/img/img_ux/adapt1.png'
import imageUx3 from '../Adapt/img/img_ux/adapt2.png'
import imageUx4 from '../Adapt/img/img_ux/adapt3.png'
import imageUx5 from '../Adapt/img/img_ux/adapt4.png'
import imageUx6 from '../Adapt/img/img_ux/adapt5.png'
import imageUx7 from '../Adapt/img/img_ux/adapt6.png'
import imageUx8 from '../Adapt/img/img_ux/adapt7.png'
import color1 from '../Adapt/img/color1.png'
import color2 from '../Adapt/img/color2.png'
import color3 from '../Adapt/img/color3.png'
import color4 from '../Adapt/img/color4.png'
import wireframeImage1 from '../Adapt/img/wireframeAdapt.png'
import wireframeImage2 from '../Adapt/img/maquetteAdapt.png'
import typo from '../Adapt/img/typo.png'






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


          section2Title="Wireframes et maquettes_"
          wireframeImage1={wireframeImage1}
          wireframeImage2={wireframeImage2}
          
          titlePrototypeSection="Prototype de l'application sur XD_"

          sectionTitle3="Couleurs_"

          color1={color1}

          color2={color2}

          color3={color3}

          color4={color4}

          

          
          typoSectionTitle="Typographie_"
          typoImg={typo}

          width="auto"
          heightProto="812"
      
          linkProto="https://xd.adobe.com/embed/ada916b1-159b-4ee9-aa7a-ed3f63eca12d-f8fa/?fullscreen&hints=off"

          
          linkOtherProject1="/libow-project"
          linkOtherProject2="/theorie-animee"
          nameProjectOther1="LIBOW_"
          nameProjectOther2="THÉORIE ANIMÉE_"
          
          backgroundColorOtherButton='RGBA(252,173,145,0.39)'

        />
        
    </section>

  
  
   
  );
};



export default Adapt;