import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 hero-top-home">
            <p>HOMEPAGE</p>
            </div>
            </div>
        <div className="container">
            <p>HOMEPAGE buttons</p>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/account">
                    ACCOUNT
            </Link>
            </button>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/discover">
                    DISCOVER
            </Link>
            </button>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/feed">
                    FEED
            </Link>
            </button>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/login">
                    LOGIN
                </Link>
            </button>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/signup">
                    SIGNUP
                </Link>
            </button>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/upload">
                    UPLOAD
                </Link>
            </button>

            <button type="button" className="btn btn-dark btn-lg btn-block">
                <Link className="info" to="/profile">
                    PROFILE
                </Link>
            </button>
        </div>
        </div>
    );
}

export default home;