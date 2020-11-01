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
                <div className="row about__row ">
                    <div className="col-12">
                        <h3 className="aboutme_heading">Timeline</h3>
                    </div>
                </div>  
                <div className="row about___row">
                    <div className="col-12 mb-5 col-md-6">
                        <ul class="timeline">
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid"/></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 className="text-muted">2018</h4>
                                        <h4 class="subheading">Higher Secondary School</h4>
                                        <div class="timeline-body"><p class="text-muted">During this time i was studying at SAPS Kanjirapally</p></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid"/></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 className="text-muted">July 2019 <span class="text-muted"> PRESENT</span></h4>
                                        <h4 class="subheading">College of Engineering Trivandrum (B-tech)</h4>
                                        <div class="timeline-body"><p class="text-muted"></p></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid"/></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 className="text-muted">June 2020 <span class="text-muted">COMPLETED</span></h4>
                                        <h4 class="subheading">Inmovidu (internship)-Machine Learning</h4>
                                        <div class="timeline-body"><p class="text-muted"></p></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid"/></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 className="text-muted"></h4>
                                        <h4 class="subheading"></h4>
                                        <div class="timeline-body"><p class="text-muted"></p></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        </section>
    );
}

export default Aboutme;