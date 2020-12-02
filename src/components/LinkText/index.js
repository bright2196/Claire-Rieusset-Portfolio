import React from "react";
import styles from './LinkText.module.css';
import PropTypes from 'prop-types';


class AText extends React.Component {
  
  render() {
    return (

        <a className={styles.LinkText}
        href={this.props.urlLink}>
            <p className={styles.text}>
            
             {this.props.name}  

             </p>
        </a>
  
    );
  }
}


AText.propTypes = {
    name: PropTypes.string,
    urlLink: PropTypes.string,
    color: PropTypes.string


  }
  export default AText;