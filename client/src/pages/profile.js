import React, { useEffect } from "react";
import Profnav from "../components/profnav";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Profile from "../components/ProfilePage"
import { useCourantContext } from "../utils/CourantContext"
import API from "../utils/API";
import { useHistory } from "react-router-dom"

function ProfilePage() {

    return (
        <div>
        <div className="row mb-5">
                <Navbar />
           <Profnav />
            <Profile />

         </div>
        </div>
    );
}

export default ProfilePage;
