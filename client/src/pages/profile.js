import React, { useEffect } from "react";
import Profnav from "../components/NavBars/profnav";
import Navbar from "../components/NavBars/mainNavbar";
import Footer from "../components/footer";
import Profile from "../components/ProfilePage";
import { useCourantContext } from "../utils/CourantContext";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import StorySection from "../components/StorySection";


function ProfilePage() {

    return (
        <div>
            <div className="row mb-5">
                <Navbar />
                <Profnav />
                <Profile />
                <StorySection />
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage;
