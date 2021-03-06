import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// pass in props for genres and popular
function nav() {
    return (
        <div className="nav col-2 flex-column sidee-nav">
            <div className="genre">
                <div className="label">Genre</div>
              
                    <Link className="nav-link info" to="/">
                        Romance
                    </Link>
                    <Link className="nav-link info" to="/">
                        Science Fiction
                    </Link>
                    <Link className="nav-link info" to="/">
                        Horror
                    </Link>
                    <Link className="nav-link info" to="/">
                        Poetry
                    </Link>
               
             <div className="label mt-5">Popular</div>
                
                    <Link className="nav-link info" to="/">
                    EXAMPLE
                    </Link>
                    <Link className="nav-link info" to="/">
                    EXAMPLE
                    </Link>
                    <Link className="nav-link info" to="/">
                    EXAMPLE
                    </Link>
                    <Link className="nav-link info" to="/">
                    EXAMPLE
                    </Link>
                    <Link className="nav-link info" to="/">
                    EXAMPLE
                    </Link>
                
            </div>
        </div>
    );
}

export default nav;