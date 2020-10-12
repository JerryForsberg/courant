import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function nav() {
    return (
        <div className="container-fluid">
            <div className="nav mx-auto mt-2 mb-5">
                <div className="row navLinks">
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
                    <Link to="/">
                    <img src="../images/logo.svg" alt="logo" className="login-logo" />
                    </Link>
                </div>
                <div className="row logins">
                    <div >
                        <Link className="navlink" to="/login">
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
    );
}

export default nav;