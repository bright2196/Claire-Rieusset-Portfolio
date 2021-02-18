import styles from './WaitingPage.module.css'
import React from 'react';
import waitingAnimation from '../../components/waitingAnimation';

const WaitingPage = () => {
  return (
    <div className={styles.containerWaitingPage}>
      <h1 className={styles.title} >En cours de construction_</h1>
       <div className={styles.Animation}>
        <waitingAnimation/>
    </div>
    </div>
  );
};

export default WaitingPage;
