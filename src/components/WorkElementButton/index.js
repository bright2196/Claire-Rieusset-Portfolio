
import React from "react";
import styles from './WorkElementButton.module.css';
import PropTypes from 'prop-types';



class WorkElementButton extends React.Component {
  
  render() {
    return (
        <div className={styles.containerElement }>
    
        <h2 className={styles.ProjectName}>{this.props.name} </h2>
        
        <div className={styles.ButtonContainer}>
        <button className={styles.DiscoverButton}>Discover the project</button>
        <div className={styles.WhiteTrait}></div>
        </div>
        </div>
           
    );
  }
}


WorkElementButton.propTypes = {
    name: PropTypes.string,
  


  }
  export default WorkElementButton;