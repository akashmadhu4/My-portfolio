import React from 'react';
import './Aboutme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mongodbpng from '../images/mongodb.png'
import { faHtml5,faCss3Alt,faBootstrap,faReact,faJs,faNode} from '@fortawesome/free-brands-svg-icons';

function Aboutme(){
    return(
        <section id="aboutme">
            <div className="container">
                <div className="row about_row">
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className="aboutme_heading">About Me</h1>
                    </div>
                </div>
                <div className="row about__row">
                    <div className="col-12">
                        <p className="paragraph2">Hi Iam Akash ,Full stack web developer.I create successful websites that are fast, easy to use, and built with best practices.
                           My main experience is in front-end development but I also have a passion for backend especially using nodejs,express and mongodb.
                           I use HTML, CSS,JavaScript and React to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.
                           Building a future-proof and easy-to-maintain website is achieved by breaking down a web page into its smallest pieces, often called components, and building them in a way that exists outside the context of the design they first appear in. This allows for components that can be re-used in other areas of a website as it grows and makes the intention easier for other developers to understand and test.
                           I am also experienced in building systems that implement business logic and interact with server-side technology via APIs and tools such as React and Redux. 
                        </p>
                    </div>
                </div>
                <div className="row about__row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="aboutme_heading d-flex justify-content-center ">Skills</h3>
                            </div> 
                        </div> 
                        <div className="row about___row">
                            <div className="col-12 mb-5">
                                <h3 className="skills_sub_heading d-flex justify-content-center">Front-End Technology</h3>
                            </div>
                        </div>
                        <div className="row skills_frontend_row">
                            <div className="col-12 d-flex justify-content-center">
                                <span className="skill_back_list">
                                    <FontAwesomeIcon className="p-3" icon={faHtml5} color="#E44D26" size="5x" inside="white"/>
                                    <FontAwesomeIcon className="p-3" icon={faCss3Alt} color="#2862E9" size="5x"/>  
                                    <FontAwesomeIcon className="p-3" icon={faBootstrap} color="#533B78" size="5x"/>
                                    <FontAwesomeIcon className="p-3" icon={faJs} color="#F7E018" size="5x"/>
                                    <FontAwesomeIcon className="p-3" icon={faReact} color="#61DAFB" size="5x" spin/>
                                </span>    
                            </div>   
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3 className="skills_sub_heading d-flex justify-content-center">Back-end Technology</h3>
                            </div>
                        </div>
                        <div className="row skills_backend_row">
                            <div className="col-12">
                                <span className="skill_back_list">
                                    <FontAwesomeIcon className="p-3" icon={faNode} color="#70A861" size="5x" inside="white"/>
                                    <img src={mongodbpng} height="200px" width="200px" text-align="center" className="mongoimage p-3"></img> 
                                </span>  
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="aboutme_heading d-flex justify-content-center">Timeline</h3>
                            </div> 
                        </div>    
                        <div className="row about___row">
                            <div className="col-12 mb-5">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-image"><img className="rounded-circle img-fluid"/></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="subheading">Higher Secondary School</h3>
                                                <h5 className="text-muted">2018</h5>
                                                <div className="timeline-body"><p className="text-muted"></p></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image"><img className="rounded-circle img-fluid"/></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="subheading">College of Engineering Trivandrum (B-tech)</h3>
                                                <h5 className="text-muted">July 2019 <span className="text-muted"> PRESENT</span></h5>
                                                <div className="timeline-body"><p class="text-muted"></p></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image"></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="subheading">Inmovidu (internship)-Machine Learning</h3>
                                                <h5 className="text-muted">June 2020 <span class="text-muted">COMPLETED</span></h5>
                                                <div className="timeline-body"><p className="text-muted"></p></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-image"><img className="rounded-circle img-fluid"/></div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h3 className="text-muted"></h3>
                                                <h5 className="subheading"></h5>
                                                <div className="timeline-body"><p className="text-muted"></p></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>    
        </section>
    );
}

export default Aboutme;