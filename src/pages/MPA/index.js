import React from 'react';
import styles from './MPA.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../MPA/img/headerMPA.png'
import imageUx1 from '../MPA/img/imgUX/MPA1.png'
import imageUx2 from '../MPA/img/imgUX/MPA2.png'
import imageUx3 from '../MPA/img/imgUX/MPA3.png'
import imageUx4 from '../MPA/img/imgUX/MPA4.png'
import imageUx5 from '../MPA/img/imgUX/MPA5.png'
import imageUx6 from '../MPA/img/imgUX/MPA6.png'
import imageUx7 from '../MPA/img/imgUX/MPA7.png'
import imageUx8 from '../MPA/img/imgUX/MPA8.png'
import color1 from '../MPA/img/color1.png'
import color2 from '../MPA/img/color2.png'
import color3 from '../MPA/img/color3.png'
import wireframeImage1 from '../MPA/img/MPAImg1.png'
import wireframeImage2 from '../MPA/img/MPAImg2.png'



import typo from '../MPA/img/typoImg.png'






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
          imageUx2={imageUx2}
          imageUx3={imageUx3}
          imageUx4={imageUx4}
          imageUx5={imageUx5}
          imageUx6={imageUx6}
          imageUx7={imageUx7}
          imageUx8={imageUx8}


          titlePrototypeSection="Wireframe"
          widthProto="90%"
          heightProto="516"
          linkProto="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfL5s3XKMZVGUbQwHA8GTTz%2FArborescence%3Fnode-id%3D33%253A22%26viewport%3D3234%252C3262%252C0.12817013263702393%26scaling%3Dscale-down-width"

          
          section2Title="Identité visuelle_"
          wireframeImage1={wireframeImage1}
          wireframeImage2={wireframeImage2}
          


          sectionTitle3="Couleurs_"

          color1={color1}

          color2={color2}

          color3={color3}

          typoSectionTitle="Typographie_"
         
          typoImg={typo}

          linkOtherProject1="/adapt-project"
          linkOtherProject2="/horrybord-project"
          nameProjectOther1="ADAPT_"
          nameProjectOther2="HORRYBORD_"
          backgroundColorOtherButton='RGBA(244,134,52,0.44)'

        />
        
    </section>

  
  
   
  );
};



export default MPA;