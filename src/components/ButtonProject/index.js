import React from "react";
import styles from './ButtonProject.module.css';
import PropTypes from 'prop-types';



class ButtonProject extends React.Component {
  
  render() {
    return (
    <div className= {styles.ContainerButton}>
       
      <button className={styles.Button} 
      style={{
    
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      
      </button>
    
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