import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// pass in props for genres and popular
function nav() {
    return (
        <div className="container-fluid">

        <div className="col-4 sidenav ">
            <div className="genre">
                <div className="label">Genre</div>
                <ol>
                    <Link className="info" to="/">
                        example
                    </Link>
                </ol>
            </div>

            <div className="popular mt-5">
                <div className="label">Popular</div>
                <ol>
                    <Link className="info" to="/">
                        example
                    </Link>
                </ol>
            </div>
        </div>
        </div>
    );
}

export default nav;