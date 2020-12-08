import React from 'react';
import CorpsText from '../CorpsText';
import SousTitre from '../Subtitles';
import styles from "./ContactSection.module.css";
import MailIcon from '../ContactSection/img/mailIcon.svg'
import LinkedinIcon from '../ContactSection/img/linkedinIcon.svg'

import BehanceIcon from '../ContactSection/img/BehanceIcon.svg'

import TelephoneIcon from '../ContactSection/img/telephoneIcon.svg'


export default function ContactSection() {
  return (
    <div className={styles.ContactSectionContainer} id="Contact">
    <div className={styles.containerText}>
     
    <div className={styles.SubtitlesContact}>
          <SousTitre
          name='Get in touch_' 
          fontWeight= '600'
          fontSize= '65px'
          color= "#E0CF04"
          /> 
    
    </div> 



    <div className={styles.TextGeneral}>
          <CorpsText
          name="Un projet, une idée, une question ? N'hésitez pas à me contacter !"
          fontWeight= '400'
          fontSize= '17px'
          color= "#E0E0E0"
          /> 

    </div>
    
  </div>
  <div className={styles.ContainerNumeroMail}>
  <div className={styles.SubtitlesContact}>
          <SousTitre
          name='Travaillons ensemble_' 
          fontWeight= '600'
          fontSize= '30px'
          color= "#E0CF04"
          /> 
    
    </div> 
     
    <div className={styles.ContactInformation}>

             <div className={styles.icon}>
                    <img className={styles.icon} src={MailIcon} alt="Icon mail"/>

             </div>
    <div className={styles.TextCorps}>

        <a className={styles.mail} href="mailto:clairerieusset.pro@gmail.com">
          clairerieusset.pro@gmail.com
          </a>  

    </div>
    
    </div>
    <div className={styles.IconReseauSociaux}>
              <div className={styles.iconLinkedin}>
              <a href="https://www.linkedin.com/in/claire-rieusset-882633182/" target="blank">  <img className={styles.iconLinkedin} src={LinkedinIcon} alt="Icon Linkedin"/> </a>

             </div>


             <div className={styles.iconBehance}>
                   <a href="https://www.behance.net/clairerieusset1" target="blank"> <img className={styles.iconBehance} src={BehanceIcon} alt="Icon Behance"/></a>

             </div>
      </div>
      <div className={styles.ContactInformationTelephone}>

        <div className={styles.icon}>
              <img className={styles.icon} src={TelephoneIcon} alt="Icon téléphone"/>

        </div>
        <div className={styles.TextCorps}>

        <div className={styles.numeroTel} >
        <CorpsText
        name='06.02.03.03.20' 
        fontWeight= '400'
        fontSize= '20px'
        color= "#E0E0E0"
        /> 
        </div>  

        </div>

</div>
     </div>
  
  
  
  </div>
     

  );
}
