import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function footer() {
    return (
        <>
            <div className="keyboard-footer">

                <img src="./images/footer-banner.svg" alt="close up of typewriter keyboard" className="img-fluid"></img>

            </div>
            <div className="footer-container">
                <div className="row">
                    <div className="col-3">
                        <Link to="/">
                            <img src="./images/logo-white.svg" alt="logo for Courant" className="logo-footer"></img>
                        </Link>
                    </div>

                    <div className=" col-3 footer-links-items">
                    <Link to="/"><h1 className="footer-header">Site Map</h1></Link>
                    <Link to="/"><h1 className="footer-header">Contact</h1></Link>
                    <Link to="/"><h1 className="footer-header">Terms and Conditions</h1></Link>
                    <Link to="/"><h1 className="footer-header">Careers</h1></Link>
                    <Link to="/"><h1 className="footer-header">Help</h1></Link>
                    </div>

                    <div className=" col-3 footer-links-items">
                    <Link to="/"><h1 className="footer-header">Discover</h1></Link>
                    <Link to="/"><h1 className="footer-header">Sign in</h1></Link>
                    <Link to="/"><h1 className="footer-header">Login</h1></Link>
                    <Link to="/"><h1 className="footer-header">About</h1></Link>
                    <Link to="/"><h1 className="footer-header">Sponsers</h1></Link>
                    </div>

                    <div className=" col-3 footer-links-items">
                    <Link to="/"><i className="fab fa-twitter footer-icons"></i></Link>
                    <Link to="/"><i className="fab fa-instagram footer-icons"></i></Link>
                    <Link to="/"><i className="fab fa-youtube footer-icons"></i></Link>
                    <Link to="/"><i className="fab fa-facebook-square footer-icons"></i></Link>


                    </div>

                </div>
            </div>

            {/* 
<div className="footer-area">

</div> */}
        </>
    );
}

export default footer;