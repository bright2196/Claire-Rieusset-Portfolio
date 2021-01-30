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
import wireframeImage3 from '../Libow/img/sketchImage.png'
import wireframeImage4 from '../Libow/img/imageUx2.png'


import typo from '../Libow/ressources/typographie.png'






const Libow = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Libow_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Le concept"
          description1="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"$

          descriptionTitle2="Le concept"
          description2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"

          titleInfo1="Client"
          descriptionInfo1="Nilk2go"

          titleInfo2="Project date"
          descriptionInfo2="December 2020"

          titleInfo3="Category"
          descriptionInfo3="UX design, strategy com"

          titleInfo4="Logiciels"
          descriptionInfo4="After Effects, Illustrator"


          titleSection1="Recherche utilisateur_"
          SubtitleSection1="Personas and empathy map_"
          textSection1="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
          voluptua. "

          imageUx1={imageUx1}
          imageUx2={imageUx1}
          imageUx3={imageUx1}


          section2Title="Wireframe et prototype_"
          wireframeImage1={wireframeImage1}
          wireframeImage2={wireframeImage2}
          wireframeImage3={wireframeImage3}
          wireframeImage4={wireframeImage4}




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