import React from 'react';
import styles from './N2G.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import imageUx1 from '../Libow/img/imageUx1.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'



import typo from '../Libow/ressources/typographie.png'






const N2G = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Nilk2Go_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Description"
          description1="Semaine intensive pour produire une recommandation publicitaire à l’entreprise MyMuesli 
          pour lancer leur nouvelle filiale Nilk2go en France. Cette boisson végétale a 
          déjà conquis le marché allemand, mais reste encore discrète dans l’hexagone. 
          Notre objectif était de proposer une campagne publicitaire digitale pour lancer ce produit."

        
          description2="Nous étions six pour mener à bien ce projet. Au cours de cette semaine, 
          j’ai pu réaliser différentes missions. Tout d’abord, j’ai réalisé un audit de l’existant 
          pour savoir comment l’améliorer au mieux. Et ensuite, nous avons réfléchi en groupe 
          pour proposer une solution digitale innovante pour cette entreprise."

          titleInfo1="Client"
          descriptionInfo1="IUT Bordeaux-Montaigne x Nilk2Go"

          titleInfo2="Date du projet"
          descriptionInfo2="Novembre 2020"

          titleInfo3="Catégories"
          descriptionInfo3="Rebranding, UX research, communication digital
          "

          titleInfo4="Technologies"
          descriptionInfo4="Illustrator, XD, Photoshop
          "


          titleSection1="Recherche utilisateur_"
          textSection1="Les objectifs de cette recherche étaient de connaître le positionnement
           et l’avis de notre cible sur les commerces locaux. Mais aussi de se renseigner 
           sur ses habitudes de consommation. "

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



export default N2G;