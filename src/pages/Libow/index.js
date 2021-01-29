import React from 'react';
import styles from './Libow.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import sketchImage from '../Libow/img/sketchImage.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import uxImage1 from '../Libow/ressources/uxImage1.png'
import uxImage2 from '../Libow/ressources/uxImage2.png'
import uxImage3 from '../Libow/ressources/uxImage3.png'
import uxImage4 from '../Libow/ressources/uxImage4.png'
import uxImage5 from '../Libow/ressources/uxImage5.png'
import uxImage6 from '../Libow/ressources/uxImage6.png'
import uxImage2PU from '../Libow/ressources/uxImage2PU.png'
import typo from '../Libow/ressources/typographie.png'






const Libow = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}

          roleProject='Rédaction web | Design Graphique | Motion design'

          description1='Une semaine, six étudiants, une marque. 
          Le concept de « Ma ville, mon shopping » est simple : 
          permettre aux commerçants locaux d’évoluer avec leur temps 
          et d’avoir une présence en ligne. La crise sanitaire actuelle 
          a permis à cette entreprise de se développer.' 

          description2='Notre objectif était de trouver une nouvelle charte graphique 
          ainsi qu’un axe de positionnement intéressant pour que 
          « Ma ville, mon shopping » prenne une plus grande ampleur. 
          Dans ce projet, j’avais le rôle d’UX designer. 
          Ainsi, j’ai eu l’occasion de suivre la recherche utilisateur de A à Z.'

          descriptionSketch='Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores 
          et ea rebum'

          sketchImage={sketchImage}

          descriptionColor='Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores 
          et ea rebum'

          color1={color1}

          color2={color2}

          color3={color3}

          descriptionUX='Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut 
          labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores 
          et ea rebum'

          ImageUx1={uxImage1}

          ImageUx2={uxImage2}

          ImageUx3={uxImage3}

          ImageUx4={uxImage4}

          ImageUx5={uxImage5}

          ImageUx6={uxImage6}

          ImageUx1PU={uxImage2PU}

          ImageUx2PU={uxImage2PU}

          ImageUx3PU={uxImage2PU}

          ImageUx4PU={uxImage2PU}

          ImageUx5PU={uxImage2PU}

          ImageUx6PU={uxImage2PU}
         
          typoImg={typo}

          linkOther1='/Home'
          linkOther2='/Home'
          backgroundColorOtherButton='rgba(2, 52, 42, 0.70)'

        />
        
    </section>

  
  
   
  );
};



export default Libow;