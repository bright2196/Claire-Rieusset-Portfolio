import React from 'react';
import styles from "./ProjectPageTemplate.module.css";
import PropTypes from 'prop-types';
import WorkElementButton from '../WorkElementButton';
import { Link } from 'react-router-dom';
import ButtonProject from '../ButtonProject';



class ProjectPageTemplate extends React.Component {
  
  render() {
    return (
    
  
    <div className={styles.containerGlobalLibow}>
                <div className={styles.fullscreenHeader}>
                <img src={this.props.headerImage} alt='' width='100%'/>
                </div>

        <div className={styles.contentContainer}>
            <div className={styles.headerContent}>
               <h1 className={styles.projectName}>{this.props.projectName}</h1>
               <p className={styles.labelHeader}>{this.props.designationProject}</p>
          </div>
        

         
         
          <div className={styles.colorSection}>
              <div className={styles.color}>
                  <h2 className={styles.color}>
                  Couleurs_
                  </h2>
              </div>
             
              <div className={styles.bubbles}>
                  <div className={styles.bubbles1}>
                      <img src={this.props.color1} alt='' className={styles.bubble}/>
                  </div>
             
                  
                  <div className={styles.bubbles1}>
                      <img src={this.props.color2} alt='' className={styles.bubble}/>
                  </div>

                  <div className={styles.bubbles1}>
                      <img src={this.props.color3} alt='' className={styles.bubble}/>
                  </div>
              </div>
             
             
          </div>

          <div className={styles.typoSection}>
              <div className={styles.typo}>
                  <h2 className={styles.typo}>
                  Typographie_
                  </h2>
              </div>
              
              <div className={styles.TypoImage}>
                    <img src={this.props.typoImg} alt='' className={styles.typoImage}/>
              </div> 
          </div>

          <div className={styles.otherSection}>
              <div className={styles.other}>
                  <h2 className={styles.other}>
                        Explorez mes autres projets_
                  </h2>
              </div>
              <div className={styles.otherContainerButton}>
                     
                    <Link to='/Libow' className={styles.LinkContainer}>
                        <div className={styles.ElementL}>
        
                                <WorkElementButton
                            name= 'ADAPT_'
                            backgroundColor={this.props.backgroundColorOtherButton}/>
        
                        </div>
                    </Link>
                    
                        
                    <Link to='/Libow' className={styles.LinkContainer}>
                         <div className={styles.ElementR}>
        
                            <WorkElementButton
                        name= 'HORRY BORD_'
                        backgroundColor={this.props.backgroundColorOtherButton}/>
    
                        </div>
                    </Link>
                                        
              </div>
              
          </div>

          <div className={styles.ContactSection}>
              <div className={styles.contact}>
                  <h2 className={styles.other}>
                       Restons en contact_
                  </h2>
              </div>
              <div className={styles.buttonContainer}>
                     
                    <Link to='/Libow' className={styles.linkCV}>
                        <div className={styles.myCV}>
        
                                <ButtonProject
                                name='Explorez mon CV'
                                fontWeight= '600'
                                fontSize= '18px'
                                color= "#E0E0E0"
                                />
        
                        </div>
                    </Link>
                    
                        
                    <Link to='/Libow' className={styles.linkCV}>
                        <div className={styles.myCV}>
        
                                <ButtonProject
                                name='Contactez-moi'
                                fontWeight= '600'
                                fontSize= '18px'
                                color= "#E0E0E0"
                                />
        
                        </div>
                    </Link>
                                        
              </div>
              
          </div>

    </div>
   
       
    </div>
  
   
  );
    }
};

ProjectPageTemplate.propTypes = {
  projectName: PropTypes.string,
  roleProject: PropTypes.string,
  color: PropTypes.string, 
  fontSize: PropTypes.string


}

export default ProjectPageTemplate;