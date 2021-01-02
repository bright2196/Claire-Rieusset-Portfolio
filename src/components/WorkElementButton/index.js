
import React from "react";
import styles from './WorkElementButton.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



class WorkElementButton extends React.Component {
  
  render() {
    return (
        <Link className={styles.ProjectElement} to={this.props.link}>
        <div className={styles.containerElement }>
        
        <h2 className={styles.ProjectName}>{this.props.name} </h2>
        
        <div className={styles.ButtonContainer}>
        <Link className={styles.DiscoverButton} to={this.props.link}>Découvrez le projet</Link>
        <div className={styles.WhiteTrait}></div>
        </div>
        </div>
        </Link>
    
           
    );
  }
}


WorkElementButton.propTypes = {
    name: PropTypes.string,
  


  }
  export default WorkElementButton;