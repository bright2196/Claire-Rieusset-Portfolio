import React from 'react';
import SousTitre from '../Subtitles';
import Title from '../Title';
import styles from "./ProjectPageTemplate.module.css";
import PropTypes from 'prop-types';
// import Title from '../../components/Title';



const ProjectPageTemplate = () => {
  return (
    
  
    <div className={styles.containerGlobalLibow}>
    <div className={styles.background}></div>
        <div className={styles.contentContainer}>
            <section>
                <div className={styles.titleHeader}>
                    <div className={styles.title}>
                        <Title
                            name='Libow_' 
                            fontWeight= '600'
                            fontSize= '60px'
                            color= "#E0E0E0"
                        />
                      </div>

                    <div className={styles.designation}>
                        <SousTitre
                        name='{Stage_}' 
                        fontWeight= '400'
                        fontSize= '20px'
                        color= "#E0CF04"
                        
                        />
                    </div>

                </div>
                <div className={styles.headerImage}>
                    <p></p>
                    <img src={this.props.headerImage} alt=''/>
                </div>
          </section>

    </div>
   
       
    </div>
  
   
  );
};

ProjectPageTemplate.propTypes = {
  name: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string, 
  fontSize: PropTypes.string


}

export default ProjectPageTemplate;