import React from "react";
import styles from './LinkText.module.css';
import PropTypes from 'prop-types';


class LinkText extends React.Component {
  
  render() {
    return (

        <a 
        href={this.props.urlLink}>
            <p classname={styles.LinkText} >
            
             {this.props.name}  

             </p>
        </a>
  
    );
  }
}


LinkText.propTypes = {
    name: PropTypes.string,
    urlLink: PropTypes.string,
    color: PropTypes.string


  }
  export default LinkText;