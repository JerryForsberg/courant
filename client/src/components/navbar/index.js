import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function nav() {
    return (
        <div className="container-fluid">
            <nav className="nav navbar navbar-expand-lg justify-content-center mt-2 mb-5">
                <div className="row navLinks">
                    <a>
                        <Link className="nav-link" to="/discover">
                            DISCOVER
                        </Link>
                    </a>
                    <a>
                        <Link className="nav-link" to="/about">
                            ABOUT
                            </Link>
                    </a>
                </div>
                <div className="text-center">
                    <Link to="/">
                    <img src="../images/logo.svg" alt="logo" className="login-logo" />
                    </Link>
                </div>
                <div className="row logins">
                    <a>
                        <Link className="nav-link" to="/login">
                            SIGN IN
                            </Link>
                    </a>
                    <a>
                        <Link className="nav-link" to="/signup">
                            SIGN UP
                            </Link>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default nav;