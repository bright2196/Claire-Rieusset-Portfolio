import React from "react";
import styles from './ButtonProject.module.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";



class ButtonProject extends React.Component {
  
  render() {
    return (
    <div className= {styles.ContainerButton}>
      <a href={this.props.linkExterne}>
      <Link className={styles.Button} to = {this.props.link}
      style={{
    
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      <div className={styles.circleButton}></div>
      </Link>
      </a>
    
      </div>
   
     
      
    );
  }
}


ButtonProject.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string, 
    fontSize: PropTypes.string


  }
  export default ButtonProject;