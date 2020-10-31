import React , {useState} from "react";
import './Certificates.css';
import {Card,CardImg} from 'reactstrap';
import Reactcoursera from '../images/Reactcoursera.jpg';
import bootstrap4 from '../images/bootstrap4coursera.jpg';
import responsive from '../images/courserawebdesgin.jpg';
import coursera4 from '../images/coursera4.jpg';

const RenderCard=(props)=>{
    return(         
            <a>
                <Card className="cert_card">
                    <CardImg src={props.image}/>
                </Card> 
            </a>     
    );
}


function Certificates(){
    const [images] = useState([Reactcoursera,bootstrap4,responsive,coursera4])
    const certificates=images.map((image)=>{
        return(
            <div className="col-12 mb-5 col-md-4">
                <RenderCard image={image}/>
            </div>
        );
    })
    return(
        <section id="certificates">               
            <div className="container">
                <div className="row cert_row">
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className="cert_heading">My Certificates</h1>
                    </div>
                </div>
                <div className="row  cert__row">
                    {certificates}
                </div>    
            </div>
        </section>            
    );
}
export default Certificates;