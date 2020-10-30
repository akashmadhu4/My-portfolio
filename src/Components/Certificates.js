import React from "react";
import {Card,CardImg} from 'reactstrap';
import myimage from '../images/myimage.png';
import pics from '../images/pics.jpg'

function Certificates(){
    return(
        <section id="certificates">
            <div className="cert__body">
                <h1 className="heading">Certificates</h1>     
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="my-card">
                                <img src={pics}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>            
    );
}
export default Certificates;