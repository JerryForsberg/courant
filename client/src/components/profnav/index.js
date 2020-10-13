import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function profnav() {
    return (
        <div className="sidenav flex-column">
            <div className="subs">
                <div className="label">Submissions</div>
                <ol>
                    <Link className="info" to="/">
                        EXAMPLE
                </Link>
                </ol>
            </div>

            <div className="library mt-5">
                <div className="label">Library</div>
                <ol>
                    <Link className="info" to="/">
                        EXAMPLE
                </Link>
                </ol>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-dark btn-lg btn-block">
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profnav;