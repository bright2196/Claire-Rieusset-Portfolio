import React from "react"
import Lottie from "react-lottie";

import animationData from './scrollAnimation.json';

export default function ScrollAnimation() {
  const defaultOptions = {
     
      mode:"OnClick",
      animationData: animationData,
      
      rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
        
      }
      
    };
  
  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={180}
        width={180}
      />
    </div>
  );
}

