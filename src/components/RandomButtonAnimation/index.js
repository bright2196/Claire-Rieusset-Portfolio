import React from "react"
import Lottie from "react-lottie";
import styles from "./RandomButton.module.css";

import animationData from './randomButtonAnimation.json';

export default function RandomAnimation() {
  const defaultOptions = {
     
      mode:"OnClick",
      animationData: animationData,
      
      rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
        
      }
      
    };
  
  return (
    <div className={styles.ButtonContainer}>
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}