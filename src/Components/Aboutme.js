import React from 'react';
import './Aboutme.css';

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