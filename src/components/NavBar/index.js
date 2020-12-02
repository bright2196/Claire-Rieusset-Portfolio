import React from 'react'

import styles from "./NavBar.module.css";


const NavBar = () => {
  return (
    <div className={styles.containerLinkBar}>   
       
   
     
            <div className='itemHome'>
            
                <a  href="#Home" id="HomeContent"><div className={styles.circleHome}></div></a>
            </div>


            <div className='itemWork'>
               
                <a  href="#Work" id="WorkContent" > <div className={styles.circleWork}></div></a>

            </div>


            <div className='itemAbout'>

                <a href="#About" id="AboutContent">  <div className={styles.circleAbout}></div></a>
            </div>


            <div className='itemRandom'>

                <a  href="#Random" id="RandomContent"> <div className={styles.circleRandom}></div></a>
            </div>


            <div className='itemContact'>
        
                <a  href="#Contact" id="ContactContent"> <div className={styles.circleContact}></div></a>
            </div>
       

        
    </div>
  );
};

export default NavBar;
