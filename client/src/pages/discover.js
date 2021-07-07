import React from "react";
import Disc from "../components/discover";
import Sidenav from "../components/NavBars/sidenav";
import Navbar from "../components/NavBars/mainNavbar";
import Footer from "../components/footer"

function Discover() {
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

export default Discover;
