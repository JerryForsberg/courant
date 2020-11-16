import React from "react";
import "./style.css";
import Sidenav from "../sidenav";
import Navbar from "../navbar";
import Footer from "../footer"

function Discover() {

    return (
        <div>
            {/* <div className="col-8 content-area"> */}
                {/* <button>
                    {state.map((data) => (
                        <img src={data.imageUpload}>
                            <Link to={"/api/story/" + data.id}>
                            </Link>
                        </img>
                    ))}
                </button> */}

            <Navbar />
            <Sidenav />
            {/* </div> */}
            <Footer />

            </div>
        
    );
}

export default Discover;