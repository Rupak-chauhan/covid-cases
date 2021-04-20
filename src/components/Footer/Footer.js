import React from 'react';
import './footer.css';

function FooterComponent(props){
    return (
        <div className="footer" >
            <div className="container">
                <div className="row">
                <div className="col-4 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="aboutus.html">Symptopms & Preventions</a></li>
                        
                        <li><a href="contactus.html">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col-7 col-sm-5">
                    
                    
                </div>

                <div className="col-12 offset-1 col-sm-4">
                    <div className="text-center">
                        <a className= "btn btn-social-icon btn-google"href="http://google.com/+"><i className="fa fa-google-plus fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-lg"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o fa-lg"></i>Mail</a>
                    </div>
                </div>

                
                </div>

            </div>
        </div>
    );
}

export default FooterComponent;
