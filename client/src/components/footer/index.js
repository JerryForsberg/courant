import React from "react";
import "./style.css";


function footer() {
    return (
        <>
            <div className="keyboard-footer">
                <img src="./images/footer-banner.svg" alt="close up of typewriter keyboard" className="img-fluid"></img>
            </div>
            <div className="footer-container">
                <div className="row">
                <div className="col-3">
                    <img src="./images/logo-white.svg" alt="logo for Courant" className="logo-footer"></img>
                </div>

                    <div className=" col-3 footer-links-items">
                        <h1 className="footer-header">Site Map</h1>
                        <h1 className="footer-header">Contact</h1>
                        <h1 className="footer-header">Terms and Conditions</h1>
                        <h1 className="footer-header">Careers</h1>
                        <h1 className="footer-header">Help</h1>
                    </div>

                    <div className=" col-3 footer-links-items">
                        <h1 className="footer-header">Discover</h1>
                        <h1 className="footer-header">Sign in</h1>
                        <h1 className="footer-header">Login</h1>
                        <h1 className="footer-header">About</h1>
                        <h1 className="footer-header">Sponsers</h1>
                    </div>

                    <div className=" col-3 footer-links-items">
                    <i className="fab fa-twitter footer-icons"></i>
                    <i className="fab fa-instagram footer-icons"></i>
                    <i className="fab fa-youtube footer-icons"></i>
                    <i className="fab fa-facebook-square footer-icons"></i>


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