import React from 'react';
import styles from './Libow.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerImage.png'
import sketchImage from '../Libow/img/sketchImage.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import imageUX1 from '../Libow/img/imageUx1.png'
import imageUX2 from '../Libow/img/imageUx2.png'
import imageUX3 from '../Libow/img/imageUx3.png'
import imageUX4 from '../Libow/img/imageUx4.png'
import imageUX5 from '../Libow/img/ImageUx5.png'




const Libow = () => {
  return (
    

    <section>
    <div className={styles.background}></div>
        <ProjectPageTemplate
          projectName='Libow_'

          desinationPoste= 'Stage_'

          headerImage={HeaderImage}

          roleProject='Rédaction web | Design Graphique | Motion design'

          description1='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'

          description2='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy'

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

          imageUX1={imageUX1}

          imageUX2={imageUX2}

          imageUX3={imageUX3}

          imageUX4={imageUX4}

          imageUX5 ={imageUX5}

        />
    </section>

  
  
   
  );
};



export default Libow;