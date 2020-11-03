import React, {useEffect} from "react";
import Profile from "../components/profile";
import Profnav from "../components/profnav";
import Navbar from "../components/navbar";
import api from '../utils/API';
import axios from 'axios'

function profile(props) {
    // useEffect(() => {
    //     //call api route to check if logged in, if logged in is true 
    //     api.isLoggedin().then((res) => {
    //         props.setIsLoggedin(res.data.isAuthenticated);
    //     });
    // }, [])

    return (
        <div>
            <Navbar />
            <Profnav />
            <Profile />
        </div>
    );
}

export default profile;
