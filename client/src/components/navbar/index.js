import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function nav() {
    return (
        <div className="container-fluid">
            <div className="row mt-5 mb-5">
                <div className="nav">
                    <div className="navLinks">
                        <div >
                            <Link className="navlink" to="/discover">
                                DISCOVER
                            </Link>
                        </div>
                        <div >
                            <Link className="navlink" to="/about">
                                ABOUT
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src="../images/logo.svg" alt="logo" className="login-logo" />
                    </div>
                    <div className="logins">
                        <div >
                            <Link className="navlink"to="/login">
                                SIGN IN
                            </Link>
                        </div>
                        <div >
                            <Link className="navlink" to="/signup">
                                SIGN UP
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default nav;