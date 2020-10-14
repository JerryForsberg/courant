import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// pass in props for genres and popular
function nav() {
    return (
        <div className="nav flex-column">
            <div className="genre">
                <div className="label">Genre</div>
                <a>
                    <Link className="nav-link info" to="/">
                        EXAMPLE
                    </Link>
                </a>
             <div className="label mt-5">Popular</div>
                <a>
                    <Link className="nav-link info" to="/">
                    EXAMPLE
                    </Link>
                </a>
            </div>
        </div>
    );
}

export default nav;