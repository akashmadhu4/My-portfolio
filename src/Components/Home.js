import React from 'react';
import './Home.css';
import myimage from '../images/myimage.png'


function Home(){
    return(
        <section id="home">
                <div className="container">
                    <div className="row home_row">
                        <div className="col-12 col-md-6 home-content">
                            <h1 className="heading">Hi!</h1>
                            <h1 className="heading">I'm Akash Madhu</h1>
                            <h2 className="heading">Web Developer</h2>
                            <p className="paragraph">I am a web developer from India, Kerala. I enjoy building everything from small website to interactive web apps.if you are an employer looking to hire,you can get in touch with me here.</p>
                        </div>
                        <div className="col-12 col-md-5 d-flex justify-content-center">
                            <img src={myimage} className="photo_adjust"></img>
                        </div>
                    </div>
                </div>
        </section>    
    );
}
export default Home;
