import React from "react";
import styles from './LinkText.module.css';
import PropTypes from 'prop-types';


class LinkText extends React.Component {
  
  render() {
    return (

        <a className={styles.LinkText}
        href={this.props.urlLink}>
            <p>
            
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