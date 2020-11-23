import React from "react";
import styles from './CorpsText.module.css';
import PropTypes from 'prop-types';



class CorpsText extends React.Component {
  
  render() {
    return (

      <p className={styles.text} 
      style={{
    
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      
      </p>
      
    );
  }
}


CorpsText.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string, 
    fontSize: PropTypes.string


  }
  export default CorpsText;