import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function profile () {
    return (
        <div className="col-8 content-area">
            <div>
                {/* map through works from db call props */}
                <Link to="/">
                <img />
                </Link>
            </div>
        </div>
    );
}

export default profile;