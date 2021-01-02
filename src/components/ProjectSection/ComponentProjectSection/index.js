import React from 'react';
import ButtonProject from '../../ButtonProject';
import styles from "./ComponentProjectSection.module.css";
import PropTypes from 'prop-types';




class ComponentProjectSection extends React.Component {
  
  render() {
  return (
    
  
    <div className={styles.containerGlobalLibow }>
   <div className={styles.leftSide}>
        <div className={styles.designation}>

              <p className={styles.SousTitre}> {this.props.desination} </p>
          
        </div>
      
      
        <div className={styles.titlePage}>
              <h2 className={styles.titlePage}> {this.props.projectName}</h2>
      
        </div>
        <div className={styles.TextAndButtonContainer}>
          <div className={styles.TextCorps}>
               <p className={styles.CorpsText}> {this.props.descriptionProject} </p>
            
          </div>

        
        <div className={styles.ButtonContainer}>
            <ButtonProject
            name="Découvrir le projet_" 
            fontWeight= '600'
            fontSize= '18px'
            color= "#E0E0E0"
            link={this.props.link}
            
            />
    
        </div>
        </div>
        
        </div>
       <div className={styles.rightSide}>
            <img src={this.props.projectImage} alt='' className={styles.libowImage}/>
       </div>
       
      </div>
     
       


  
   
  );
}};

ComponentProjectSection.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string, 


}

export default ComponentProjectSection;