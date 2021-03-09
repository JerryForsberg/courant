import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "../../button/Button";

function profnav() {
    const [button, setButton] = useState(true);

    return (

        <div className="col-2">
            <div className="sidenav flex-column">
                <div className="subs">
                    <div className="label">Submissions</div>
                    <ol>
                        <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>
                <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>                <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>                <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>                <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>
                    </ol>
                </div>

                <div className="library mt-5">
                    <div className="label">Library</div>
                    <ol>
                        <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>
                <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>                  <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>                  <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>                  <Link className="nav-link info" to="/">
                            EXAMPLE
                </Link>
                    </ol>
                </div>

                {/* <Link to="/upload">
                {button && <Button buttonStyle="btn--primary"></Button>}
                </Link> */}
            </div>
        </div>

    );
}

export default profnav;