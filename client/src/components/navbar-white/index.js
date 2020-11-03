import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function navWhite() {
    return (
        <div className="container-fluid">
            <nav className="nav nav-fill navbar navbar-expand-lg justify-content-center pt-4">
                <div className="row navLinks nav-item">
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
                <div className="text-center nav-item">
                    <Link to="/">
                    <img src="../images/logo-white.svg" alt="logo" className="nav-logo" />
                    </Link>
                </div>
                <div className="row logins nav-item justify-content-end">
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

export default navWhite;