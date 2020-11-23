import React from "react";
import styles from './Subtitles.module.css';
import PropTypes from 'prop-types';



class SousTitre extends React.Component {
  
  render() {
    return (

      <h3 className={styles.text} 
      style={{
    
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      
      </h3>
      
    );
  }
}


SousTitre.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string, 
    fontSize: PropTypes.string


  }
  export default SousTitre;