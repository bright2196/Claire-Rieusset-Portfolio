import React from 'react';
import CorpsText from '../CorpsText';
import SousTitre from '../Subtitles';
import styles from "./AboutSection.module.css";
import MyPortrait from '../AboutSection/img/MyPortrait.jpg'
import { Link } from 'react-router-dom';


export default function AboutSection() {
  return (
    <div className={styles.AboutSectionContainer} id="About">

      <div className={styles.photoSection}>
      <div className={styles.Subtitles0}>
          <SousTitre
          name="About_"  
          fontWeight= '600'
          fontSize= '28px'
          color= "#E0CF04"
          /> 

  
    </div> 
    <div className={styles.MyPortrait}>
      <img src={MyPortrait} alt=""/>
    </div>
      </div>
    <div className={styles.topSectionContainer}>
      <div className={styles.Subtitles1}>
          <SousTitre
          name='Hi 👋 _' 
          fontWeight= '600'
          fontSize= '28px'
          color= "#E0CF04"
          /> 

  
    </div> 
    <div className={styles.containerText}>
     
  



    <div className={styles.ContainerTextCvLink} >
      <div className={styles.cvLink}>
        <Link className={styles.styleCvLink} to="/cv-claire-rieusset">Explore mon CV</Link>
      </div>
      <div className={styles.TextCorps}>
          <CorpsText
          name="Je me présente, je m’appelle Claire. Jeune étudiante en recherche d'alternance en UX/UI design pour l'année 2021/2022. Ma formation en DUT Métiers du multimédia et de l'internet m'a permis d'explorer des domaines très différents. Ces expériences ont enrichi mon point de vue autant en design qu'en développement web. Aujourd’hui, j’intègre l’ECV Bordeaux en bachelor Chef de projet digital pour me spécialiser en UX/UI, mais aussi en développement web." 
          fontWeight= '400'
          fontSize= '16px'
          color= "#E0E0E0"
          /> 
        </div>
    </div>
    
  </div>

 </div>
  <div className={styles.part1Education}>
  <div className={styles.Subtitles2}>
          <SousTitre
          name='Formations_' 
          fontWeight= '600'
          fontSize= '28px'
          color= "#E0CF04"
          /> 

  
    </div> 
    <div className={styles.texte1Formation}>
    <h3 className={styles.titleTexte1Formation}>DUT Métiers du multimédia et de l'internet</h3>
    <p className={styles.corpsTexte1Formation}>IUT Bordeaux-Montaigne, promo 2021</p>
    <p className={styles.corpsTexte1Formation}>Développement web, UX/UI design, gestion de projet, stratégie de communication, motion design, vidéo, photo </p>
    </div>

    <div className={styles.texte2Formation}>
    <h3 className={styles.titleTexte2Formation}>CPGE ENS Paris-Saclay D2</h3>
    <p className={styles.corpsTexte2Formation}>Lycée Jean-Mermoz, 2018/2019 (1 an)</p>
    <p className={styles.corpsTexte2Formation}>Analyse des faits économiques, Microéconomie, Macroéconomie, Contrôle de gestion</p>
    </div>
  </div>
  <div className={styles.part2Experience}>
  <div className={styles.Subtitles3}>
          <SousTitre
          name='Expériences_' 
          fontWeight= '600'
          fontSize= '28px'
          color= "#E0CF04"
          /> 

  
    </div> 
    <div className={styles.texte1Exp}>
    <h3 className={styles.titleTexte1Exp}>Stage en webdesign</h3>
    <p className={styles.subtitle1Exp}>Cityrideuz, Bordeaux, du 27 avril au 31 juillet 2021</p>
    <p className={styles.corpsTexte1Exp}>Refonte de certaines pages du site internet</p>
    <p className={styles.corpsTexte1Exp}>Création de contenus graphiques pour le site internet et les réseaux sociaux</p>
   
    </div>

    <div className={styles.texte1Exp}>
    <h3 className={styles.titleTexte1Exp}>Stage en rédaction web et création de contenus</h3>
    <p className={styles.subtitle1Exp}>Libow, Montpellier, du 25 mai au 28 août 2020 (3 mois)</p>
    <p className={styles.corpsTexte1Exp}>Rédaction d'articles pour le blog de l'entreprise</p>
    <p className={styles.corpsTexte1Exp}>Création et intégration de pages web sur le site de l'entreprise</p>
    <p className={styles.corpsTexte1Exp}>Création de logo et d'illustration pour le site</p>
    </div>
  </div>

  <div className={styles.part3Competences}>
  <div className={styles.Subtitles4}>
          <SousTitre
          name='Compétences_' 
          fontWeight= '600'
          fontSize= '28px'
          color= "#E0CF04"
          /> 

  
    </div> 
    <div className={styles.texte1Exp}>
    <h3 className={styles.titleTexte1Comp}>Skills</h3>
    <p className={styles.corpsTexte1Comp}>Développement web</p>
    <p className={styles.corpsTexte1Comp}>Création de prototype</p>
    <p className={styles.corpsTexte1Comp}>Création de storyboard</p>
    <p className={styles.corpsTexte1Comp}>Recherche utilisateur</p>
    <p className={styles.corpsTexte1Comp}>Questionnaire et entretien utilisateur</p>
    <p className={styles.corpsTexte1Comp}>Motion design & Montage vidéo</p>
    <p className={styles.corpsTexte1Comp}>Illustration & graphisme</p>
    <p className={styles.corpsTexte1Comp}>Photographie</p>
    </div>

    <div className={styles.texte1Exp}>
    <h3 className={styles.titleTexte1Comp}>Outils</h3>
    <p className={styles.corpsTexte2Comp}>Figma</p>
    <p className={styles.corpsTexte2Comp}>XD</p>
    <p className={styles.corpsTexte2Comp}>Wordpress</p>
    <p className={styles.corpsTexte2Comp}>Illustrator</p>
    <p className={styles.corpsTexte2Comp}>Photoshop</p>
    <p className={styles.corpsTexte2Comp}>Indesign</p>
    <p className={styles.corpsTexte2Comp}>After Effects</p>
    <p className={styles.corpsTexte2Comp}>Premiere Pro</p>
    </div>

    <div className={styles.texte1Exp}>
    <h3 className={styles.titleTexte1Comp}>Web</h3>
    <p className={styles.corpsTexte2Comp}>HTML</p>
    <p className={styles.corpsTexte2Comp}>CSS</p>
    <p className={styles.corpsTexte2Comp}>JS</p>
    <p className={styles.corpsTexte2Comp}>Wordpress</p>
    <p className={styles.corpsTexte2Comp}>ReactJS</p>
    <p className={styles.corpsTexte2Comp}>Github</p>
    <p className={styles.corpsTexte2Comp}>Divi</p>
    <p className={styles.corpsTexte2Comp}>Elementor</p>
    </div>

    <div className={styles.texte1Exp}>
    <h3 className={styles.titleTexte1Comp}>Langues</h3>
    <p className={styles.corpsTexte2Comp}>Anglais (C1)</p>
    <p className={styles.corpsTexte2Comp}>Espagnol</p>

    </div>
 
  </div>
  </div>
     

  );
}
