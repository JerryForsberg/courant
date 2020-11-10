import React from "react";
import Disc from "../components/discover";
import Sidenav from "../components/sidenav";
import Navbar from "../components/navbar";
import Footer from "../components/footer"

function discover() {
    return (
        <div>
            <div className="row mb-5">
            <Navbar />
            <Sidenav />
            < Disc />
            </div>
            <Footer />
        </div>
    );
}

export default discover;
