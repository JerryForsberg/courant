import React from "react";
import Home from "../components/homepage";
import Navbar from "../components/navbar";
import Sidenav from "../components/sidenav";

function home() {
    return (
        <div>
            <Navbar />
            <Sidenav />
            < Home />
        </div>
    );
}

export default home;
