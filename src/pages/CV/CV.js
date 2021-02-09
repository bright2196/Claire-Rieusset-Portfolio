import styles from './CV.module.css'
import React from 'react';
import CVimg from "../CV/CV.pdf"

const CV = () => {
  return (
    <div className={styles.containerCV}>
      <iframe title="CV" src={CVimg}  type="application/pdf" width="100%" height="600px"></iframe>
    </div>
  );
};

export default CV;
