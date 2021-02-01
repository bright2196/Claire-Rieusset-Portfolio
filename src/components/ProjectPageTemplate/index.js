import React from 'react';
import styles from "./ProjectPageTemplate.module.css";
import PropTypes from 'prop-types';
import WorkElementButton from '../WorkElementButton';
import { Link } from 'react-router-dom';
import ButtonProject from '../ButtonProject';
import Carousel from 'react-bootstrap/Carousel'



class ProjectPageTemplate extends React.Component {
  
  render() {
  
    return (
    
  
    <div className={styles.containerGlobalLibow}>
                <div className={styles.fullscreenHeader}>
                <img src={this.props.headerImage} alt='' width='100%'/>
                </div>

        <div className={styles.contentContainer}>
            <div className={styles.headerContent}>
                <div className={styles.titleHeader}>
               <h1 className={styles.projectName}>{this.props.projectName}</h1>
               <p className={styles.labelHeader}>{this.props.designationProject}</p>
               </div>

            <div className={styles.containerDescriptionProject}>
                <div className={styles.leftSideDescription}>
                    <h3 className={styles.descriptionTitle1}>{this.props.descriptionTitle1}</h3>
                    <p className={styles.description1}>{this.props.description1}</p>
                </div>
                <div className={styles.rightSideDescription}>
                    <h3 className={styles.descriptionTitle2}>{this.props.descriptionTitle2}</h3>
                    <p className={styles.description2}>{this.props.description2}</p>
                </div>
            </div>
            <div className={styles.infoProjectContainer}>
                <div className={styles.containerInfo1}>
                    <h3 className={styles.titleInfo1}>{this.props.titleInfo1}</h3>
                    <p className={styles.descriptionInfo1}>{this.props.descriptionInfo1}</p>
                </div>

                <div className={styles.containerInfo2}>
                    <h3 className={styles.titleInfo2}>{this.props.titleInfo2}</h3>
                    <p className={styles.descriptionInfo2}>{this.props.descriptionInfo2}</p>
                </div>

                <div className={styles.containerInfo3}>
                    <h3 className={styles.titleInfo3}>{this.props.titleInfo3}</h3>
                    <p className={styles.descriptionInfo3}>{this.props.descriptionInfo3}</p>
                </div>

                <div className={styles.containerInfo4}>
                    <h3 className={styles.titleInfo4}>{this.props.titleInfo4}</h3>
                    <p className={styles.descriptionInfo4}>{this.props.descriptionInfo4}</p>
                </div>
            </div>

            <div className={styles.section1}>
                  
                        <h2 className={styles.titleSection1}>{this.props.titleSection1}</h2>
                        <p className={styles.textSection1}>{this.props.textSection1}</p>
                       
                    <div className={styles.carouselContainer}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx1}
                            alt="First slide"
                            />
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx2}
                            alt="Third slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx3}
                            alt="Third slide"
                            />

                           
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx4}
                            alt="4 slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx5}
                            alt="5slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx6}
                            alt="6slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx7}
                            alt="7slide"
                            />

                           
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={this.props.imageUx8}
                            alt="8slide"
                            />

                           
                        </Carousel.Item>
                    </Carousel>
                    </div>

                   
            </div>



          </div>

          <div className={styles.sectionPrototype}>
                  <h2 className={styles.titlePrototype}>
                  Prototype_
                  </h2>
              
              <div className={styles.ProtoVideo}>
              <iframe title="proto" width={this.props.widthProto} height={this.props.heightProto} src={this.props.linkProto} frameborder="0" allowfullscreen></iframe>
              </div> 
          </div>

          <div className={styles.section2}>
              
                  <h2 className={styles.section2Title}>
                  {this.props.section2Title}
                  </h2>
             
              
              <div className={styles.imageContainer}>
                    <img src={this.props.wireframeImage1} alt='' className={styles.wireframeImage1} width="100%"/>
                    <img src={this.props.wireframeImage2} alt='' className={styles.wireframeImage2} width="100%"/>
                    <img src={this.props.wireframeImage3} alt='' className={styles.wireframeImage3} width="100%"/>
                    <img src={this.props.wireframeImag4} alt='' className={styles.wireframeImage4} width="100%"/>

              </div> 
          </div>
        

         
         
          <div className={styles.colorSection}>
              <div className={styles.color}>
                  <h2 className={styles.color}>
                  {this.props.sectionTitle3}
                  </h2>
              </div>
              
            
              <div className={styles.bubbles}>
               <a href={this.props.linkArticle1} >     
                    <div className={styles.bubbles1}>
                    <img src={this.props.color1} alt='' className={styles.bubble}/>
                  </div>
                </a>
            
                <a href={this.props.linkArticle2} > 
                  <div className={styles.bubbles1}>
                      <img src={this.props.color2} alt='' className={styles.bubble}/>
                  </div>
                </a>

                <a href={this.props.linkArticle3} > 
                  <div className={styles.bubbles1}>
                      <img src={this.props.color3} alt='' className={styles.bubble}/>
                  </div>
                  </a>
              </div>
             
             
          </div>

          <div className={styles.typoSection}>
              <div className={styles.typo}>
                  <h2 className={styles.typo}>
                  Typographie_
                  </h2>
              </div>
              
              <div className={styles.TypoImage}>
                    <img src={this.props.typoImg} alt='' className={styles.typoImage} />
              </div> 
          </div>

        


          <div className={styles.otherSection}>
              <div className={styles.other}>
                  <h2 className={styles.other}>
                        Explorez mes autres projets_
                  </h2>
              </div>
              <div className={styles.otherContainerButton}>
                     
                    <Link to={this.props.linkOtherProject1} className={styles.LinkContainer}>
                        <div className={styles.ElementL}>
        
                                <WorkElementButton
                            name= {this.props.nameProjectOther1}
                            backgroundColor={this.props.backgroundColorOtherButton}
                            link={this.props.linkOtherProject1}/>
        
                        </div>
                    </Link>
                    
                        
                    <Link to={this.props.linkOtherProject2} className={styles.LinkContainer}>
                         <div className={styles.ElementR}>
        
                            <WorkElementButton
                        name= {this.props.nameProjectOther2}
                        backgroundColor={this.props.backgroundColorOtherButton}
                        link={this.props.linkOtherProject2}/>
    
                        </div>
                    </Link>
                                        
              </div>
              
          </div>

          <div className={styles.ContactSection}>
              <div className={styles.contact}>
                  <h2 className={styles.other}>
                       Restons en contact_
                  </h2>
              </div>
              <div className={styles.buttonContainer}>
                     
                    <Link to='/Libow' className={styles.linkCV}>
                        <div className={styles.myCV}>
        
                                <ButtonProject
                                name='Explorez mon CV'
                                fontWeight= '600'
                                fontSize= '18px'
                                color= "#E0E0E0"
                                />
        
                        </div>
                    </Link>
                    
                        
                    <Link to='/Libow' className={styles.linkCV}>
                        <div className={styles.myCV}>
        
                                <ButtonProject
                                name='Contactez-moi'
                                fontWeight= '600'
                                fontSize= '18px'
                                color= "#E0E0E0"
                                />
        
                        </div>
                    </Link>
                                        
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