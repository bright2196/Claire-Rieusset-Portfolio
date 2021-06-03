import React from 'react';
import styles from './VitrineVerte.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../VitrineVerte/img/headerImage.png'
import imageUx1 from '../VitrineVerte/img/VitrineVerte1.png'
import imageUx2 from '../VitrineVerte/img/VitrineVerte2.png'
import imageUx3 from '../VitrineVerte/img/VitrineVerte3.png'
import imageUx4 from '../VitrineVerte/img/VitrineVerte4.png'
import imageUx5 from '../VitrineVerte/img/VitrineVerte5.png'
import imageUx6 from '../VitrineVerte/img/VitrineVerte6.png'
import imageUx7 from '../VitrineVerte/img/VitrineVerte7.png'
import imageUx8 from '../VitrineVerte/img/VitrineVerte8.png'
import color1 from '../VitrineVerte/img/color1.png'
import color2 from '../VitrineVerte/img/color2.png'
import color3 from '../VitrineVerte/img/color3.png'
import wireframeImage1 from '../VitrineVerte/img/wireframe1.png'
import wireframeImage2 from '../VitrineVerte/img/wireframe2.png'
import typo from '../VitrineVerte/img/typo.png'






const VitrineVerte = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Vitrine Verte_"
          designationProject="Workshop_"
          descriptionTitle1="Description"
          description1="Notre objectif ? Créer une organisation bénévole permettant 
          d’aider des acteurs de notre société. Après une rencontre avec un maraîcher, 
          nous avons décidé de réaliser un outil de gestion de commandes pour aider les producteurs 
          à s’organiser et à gagner du temps. 
          "

        
          description2="Le projet se repartit sur deux semaines dans l’année. 
          Ces semaines sont particulièrement intensives. Nous sommes une équipe de dix personnes 
          avec des profils diversifiés. 
          Durant ce projet, j’ai eu l’occasion de travailler en tant qu’UX/UI designer, 
          mais aussi en tant que chef de projet.
          "

          titleInfo1="Client"
          descriptionInfo1="IUT Bordeaux-Montaigne"

          titleInfo2="Date du projet"
          descriptionInfo2="Mars 2021"

          titleInfo3="Catégories"
          descriptionInfo3="Développement web, UX/UI design, écriture"

          titleInfo4="Technologies"
          descriptionInfo4="Illustrator, Figma, HTML5, CSS3, Bootstrap"


          titleSection1="Recherche utilisateur_"
          

          imageUx1={imageUx1}
          imageUx2={imageUx2}
          imageUx3={imageUx3}
          imageUx4={imageUx4}
          imageUx5={imageUx5}
          imageUx6={imageUx6}
           imageUx7={imageUx7}
           imageUx8={imageUx8}


           titlePrototypeSection="Maquette du projet_"
           widthProto="90%"
           heightProto="516"
           linkProto="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZih6RajUxOlwDWbIbnYOCS%2FPortfolio-Contenu%3Fnode-id%3D10%253A1184%26viewport%3D1659%252C1345%252C0.32232022285461426%26scaling%3Dmin-zoom"
           
           
           
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
          linkOtherProject2="/en-travaux"
          nameProjectOther1="ADAPT_"
          nameProjectOther2="RÊVE & VILLE_"
          backgroundColorOtherButton='rgba(112, 194, 135, 0.60)'

        />
        
    </section>

  
  
   
  );
};



export default VitrineVerte;