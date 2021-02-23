import React from "react";
import Profnav from "../components/profnav";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProfilePage from "../components/ProfilePage";

function Profile() {

    return (
        <div>
            <div className="row mb-5">
                <Navbar />
                <Profnav />
                <ProfilePage />
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
