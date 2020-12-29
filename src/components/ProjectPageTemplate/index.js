import React from 'react';

import Popup from 'reactjs-popup';
import styles from "./ProjectPageTemplate.module.css";
import PropTypes from 'prop-types';
import 'reactjs-popup/dist/index.css';
const contentStyle = { background: '#e0ce044d', width: '75%', height: '96%', display:'flex', justifyContent:'center', alignItems:'center', border:'none'  };
const overlayStyle = { background: 'rgba(0,0,0,0.5)' };


class ProjectPageTemplate extends React.Component {
  
  render() {
    return (
    
  
    <div className={styles.containerGlobalLibow}>
    <div className={styles.background}></div>
        <div className={styles.contentContainer}>
            <div className={styles.headerContent}>
                <div className={styles.titleHeader}>
                    <div className={styles.title}>
                        <h1 className={styles.projectName}> 
                          {this.props.projectName}
          
                      </h1>
                      </div>

                    <div className={styles.designation}>
                    <h3 className={styles.Poste}> 
                          {this.props.desinationPoste}
          
                      </h3>
                    </div>

                </div>
                <div className={styles.labelHeader}>
                <p>{this.props.roleProject}</p>
                </div>
                <div className={styles.headerImage}>
                    
                    <img src={this.props.headerImage} alt=''/>
                </div>
          </div>
          <div className={styles.ProjectDescription}>
              <div className={styles.description1}>
                  <p>
                  {this.props.description1}
                  </p>
              </div>
              <div className={styles.description2}>
                  <p>
                  {this.props.description2}
                  </p>
              </div>
          </div>

          <div className={styles.SketchSection}>
              <div className={styles.SketchAndIdeation}>
                  <h2 className={styles.SketchAndIdeation}>
                  Ideation_
                  </h2>
              </div>
              <div className={styles.descriptionSketch}>
                  <p className={styles.descriptionSketch}>
                  {this.props.descriptionSketch}
                  </p>
              </div>
              <div className={styles.SketchImage}>
                    
                    <img src={this.props.sketchImage} alt=''/>
                </div>
             
          </div>

          <div className={styles.UXSection}>
              <div className={styles.Ux}>
                  <h2 className={styles.Ux}>
                  Recherche utilisateur_
                  </h2>
              </div>
              <div className={styles.descriptionUX}>
                  <p className={styles.descriptionUX}>
                  {this.props.descriptionUX}
                  </p>
              </div>
              <div className={styles.PdfUX}>
                  <div className={styles.leftSide}>
                  <div className={styles.modalContainer}>
                    <Popup
                            className={styles.modalContainer}
                            trigger={<img class ={styles.item} src={this.props.ImageUx1} alt=''  />}
                            modal
                            nested
                            contentStyle= {contentStyle}
                            overlayStyle= {overlayStyle}
                            position= 'center center'
                     >
                        {close => (
                            <div className={styles.modal}>
                                <button className={styles.close} onClick={close}>
                                &times;
                                </button>
                                <div className={styles.content}>
                            
                                <img class ={styles.itemPU} src={this.props.ImageUx1PU} alt=''  />
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>
                    
                    <div className={styles.modalContainer}>
                    <Popup
                            trigger={<img class ={styles.item} src={this.props.ImageUx3} alt=''  /> }
                            modal
                            nested
                            contentStyle= {contentStyle}
                            overlayStyle= {overlayStyle}
                            repositionOnResize={true}
                            position= 'center center'
                            className={styles.modalContainer}
                     >
                        {close => (
                            <div className={styles.modal}>
                                <button className={styles.close} onClick={close}>
                                &times;
                                </button>
                                <div className={styles.content}>
                                <img class ={styles.itemPU} src={this.props.ImageUx1PU} alt=''  />
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>

                    <div className={styles.modalContainer}>
                    <Popup
                            trigger={ <img class ={styles.item}src={this.props.ImageUx5} alt=''/> }
                            modal
                            nested
                            contentStyle= {contentStyle}
                            overlayStyle= {overlayStyle}
                            position= 'center center'
                            className={styles.modalContainer}
                     >
                        {close => (
                            <div className={styles.modal}>
                                <button className={styles.close} onClick={close}>
                                &times;
                                </button>
                                <div className={styles.content}>
                                <img class ={styles.itemPU} src={this.props.ImageUx1PU} alt=''  />
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>
                   
                  </div>

                  <div className={styles.rightSide}>
                  <div className={styles.modalContainer}>
                  <Popup
                            trigger={ <img class = {styles.item} src={this.props.ImageUx2} alt='' /> }
                            modal
                            nested
                            contentStyle= {contentStyle}
                            overlayStyle= {overlayStyle}
                            position= 'center center'
                            className={styles.modalContainer}
                     >
                        {close => (
                            <div className={styles.modal}>
                                <button className={styles.close} onClick={close}>
                                &times;
                                </button>
                                <div className={styles.content}>
                                <img class ={styles.itemPU} src={this.props.ImageUx1PU} alt=''  />
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>


                    <div className={styles.modalContainer}>
                    <Popup
                            trigger={ <img class ={styles.item} src={this.props.ImageUx4} alt=''  /> }
                            modal
                            nested
                            contentStyle= {contentStyle}
                            overlayStyle= {overlayStyle}
                            repositionOnResize='true'
                            position= 'center center'
                            className={styles.modalContainer}
                     >
                        {close => (
                            <div className={styles.modal}>
                                <button className={styles.close} onClick={close}>
                                &times;
                                </button>
                                <div className={styles.content}>
                                <img class ={styles.itemPU} src={this.props.ImageUx1PU} alt=''  />
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>

                     <div className={styles.modalContainer}>
                    <Popup
                            trigger={ <img class ={styles.item} src={this.props.ImageUx6} alt='' /> }
                            modal
                            nested
                            contentStyle= {contentStyle}
                            overlayStyle= {overlayStyle}
                            className={styles.modalContainer}
                            repositionOnResize='true'
                            position= 'center center'
                     >
                        {close => (
                            <div className={styles.modal}>
                                <button className={styles.close} onClick={close}>
                                &times;
                                </button>
                                <div className={styles.content}>
                                <img class ={styles.itemPU} src={this.props.ImageUx1PU} alt=''  />
                                </div>
                            </div>
                        )}
                    </Popup>
                    </div>
                    
           
                  </div>
                  
                           
                   
                    
              </div>
             
             
          </div>
          <div className={styles.colorSection}>
              <div className={styles.color}>
                  <h2 className={styles.color}>
                  Couleurs_
                  </h2>
              </div>
              <div className={styles.descriptionColor}>
                  <p className={styles.descriptionColor}>
                  {this.props.descriptionColor}
                  </p>
              </div>
              <div className={styles.bubbles}>
                  <div className={styles.bubbles1}>
                      <img src={this.props.color1} alt='' className={styles.bubble}/>
                  </div>
             
                  
                  <div className={styles.bubbles1}>
                      <img src={this.props.color2} alt='' className={styles.bubble}/>
                  </div>

                  <div className={styles.bubbles1}>
                      <img src={this.props.color3} alt='' className={styles.bubble}/>
                  </div>
              </div>
             
             
          </div>

    </div>
   
       
    </div>
  
   
  );
    }
};

ProjectPageTemplate.propTypes = {
  projectName: PropTypes.string,
  roleProject: PropTypes.string,
  color: PropTypes.string, 
  fontSize: PropTypes.string


}

export default ProjectPageTemplate;