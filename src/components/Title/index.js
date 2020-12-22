import React from "react";
import styles from './Title.module.css';
import PropTypes from 'prop-types';



class Title extends React.Component {
  
  render() {
    return (

      <h1 className={styles.text} 
      style={{
    
        color: this.props.color,
        fontWeight: this.props.fontWeight,
        fontSize: this.props.fontSize}}
      >

      {this.props.name} 
      
      </h1>
      
    );
  }
}


Title.propTypes = {
    name: PropTypes.string,
    fontWeight: PropTypes.string,
    color: PropTypes.string, 
    fontSize: PropTypes.string


  }
  export default Title;