import React from "react"
import Lottie from "react-lottie";

import animationData from './waitingAnimation.json';

export default function waitingAnimation() {
  
  const defaultOptions = {
     
      animationData: animationData,
      
      rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
        
      }
      
    };
  
  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={300}
        width={300}
      />
    </div>
  );
}

