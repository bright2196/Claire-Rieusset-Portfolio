import React from 'react';
import CorpsText from '../CorpsText';
import SousTitre from '../Subtitles';
import styles from "./ContactSection.module.css";
import MailIcon from '../ContactSection/img/mailIcon.svg'
import LinkedinIcon from '../ContactSection/img/linkedinIcon.svg'

// import BehanceIcon from '../ContactSection/img/behanceIcon.svg'

import TelephoneIcon from '../ContactSection/img/telephoneIcon.svg'


export default function ContactSection() {
  return (
    <div className={styles.ContactSectionContainer} id="Contact">
    <div className={styles.leftContent}>
    <div className={styles.containerText}>




    <div className={styles.TextGeneral}>
          <CorpsText
          name="Un projet, une idée, une question ? N'hésitez pas à me contacter !"
          fontWeight= '400'
          fontSize= '18px'
          color= "#E0E0E0"
          /> 

    </div>  
    
    <div className={styles.SubtitlesContact}>
          <SousTitre
          name='Travaillons ensemble_' 
          fontWeight= '700'
          fontSize= '25px'
          color= "#E0CF04"
          /> 
    
    </div> 
    <div className={styles.ContainerNumeroMail}>

    <div className={styles.containerMailTel}>
            <div className={styles.mailContact}>
                  <div className={styles.mailIcon}>
                        <img src={MailIcon} alt=''/>
                  </div>
                  <div className={styles.mailText}>
                        <a className={styles.mailText} href='mailto:clairerieusset.pro@gmail.com'>clairerieusset.pro@gmail.com</a>
                  </div>
            </div>
            <div className={styles.telContact}>
                  <div className={styles.telIcon}>
                        <img src={TelephoneIcon} alt=''/>
                  </div>
                  <div className={styles.telText}>
                        <p>06.02.03.03.20</p>
                  </div>
            </div>

    </div>

    
     
   
   
    <div className={styles.IconReseauSociaux}>
              <div className={styles.iconLinkedin}>
              <a href="https://www.linkedin.com/in/claire-rieusset-882633182/" target="blank">  <img className={styles.iconLinkedin} src={LinkedinIcon} alt="Icon Linkedin"/> </a>

             </div>


             <div className={styles.iconBehance}>
                   {/* <a href="https://www.behance.net/clairerieusset1" target="blank"> <img className={styles.iconBehance} src={BehanceIcon} alt="Icon Behance"/></a> */}

             </div>
            
      </div>
  
     </div>
  </div>
  </div>
  
  <div className={styles.rightContent}>
      <div className={styles.WordTitle}>
            <SousTitre
                  name='Contact_' 
                  fontWeight= '700'
                  fontSize= '120px'
                  color= "#E0CF04"
                  /> 
      </div>


  </div>
  
  
  
  </div>
     

  );
}
