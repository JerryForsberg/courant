import React, { useEffect } from "react";
import Profile from "../components/profile";
import Profnav from "../components/profnav";
import Navbar from "../components/navbar";
import api from '../utils/API';
import axios from 'axios'
import Footer from "../components/footer"
function profile(props) {
    // useEffect(() => {
    //     //call api route to check if logged in, if logged in is true 
    //     api.isLoggedin().then((res) => {
    //         props.setIsLoggedin(res.data.isAuthenticated);
    //     });
    // }, [])

    return (
        <div>
            <div className="row mb-5">
                <Navbar />
                <Profnav />
                <Profile />

            </div>
            <Footer />
        </div>
    );
}

export default profile;
