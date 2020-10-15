import React from "react";
import Profile from "../components/profile";
import Profnav from "../components/profnav";
import Navbar from "../components/navbar";

function profile() {
    return (
        <div>
             <Navbar />
            <Profnav />
            <Profile />
        </div>
    );
}

export default profile;
