import React from 'react';
import styles from './RV.module.css'
import ProjectPageTemplate from '../../components/ProjectPageTemplate';
import HeaderImage from '../Libow/img/headerTest.png'
import imageUx1 from '../Libow/img/imageUx1.png'
import color1 from '../Libow/img/color1.svg'
import color2 from '../Libow/img/color2.svg'
import color3 from '../Libow/img/color3.svg'
import wireframeImage1 from '../Libow/img/sketchImage.png'
import wireframeImage2 from '../Libow/img/ImageUx5.png'
import typo from '../Libow/ressources/typographie.png'






const RV = () => {
  return (
    

    <section className={styles.LibowPageContainer}>  
      
        <ProjectPageTemplate
          

          headerImage={HeaderImage}
          projectName="Rêve et ville_"
          designationProject="Projet Étudiant_"
          descriptionTitle1="Description"
          description1="Imaginer, écrire et produire une histoire interactive
           en seulement deux semaines. C’est ce que nous avons fait pour 
           le Musée des Beaux-Arts de Bordeaux. Notre objectif ?
          "

        
          description2=" Créer une expérience interactive pour mettre en avant
           les oeuvres du musée. Répondre à cet appel d’offres nous a permis de 
           mettre en oeuvre des compétences d’écriture, de direction artistique, 
           mais aussi de développement web. 
          "

          titleInfo1="Client"
          descriptionInfo1="Musée des Beaux-Arts de Bordeaux x IUT Bordeaux-Montaigne"

          titleInfo2="Date du projet"
          descriptionInfo2="Février 2021"

          titleInfo3="Catégories"
          descriptionInfo3="Développement web, UX/UI design, écriture"

          titleInfo4="Technologies"
          descriptionInfo4="Illustrator, XD, HTML5, CSS3, ReactJS"


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



export default RV;