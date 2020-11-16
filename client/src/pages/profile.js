import React, { useEffect } from "react";
import Profnav from "../components/profnav";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import { useCourantContext } from "../utils/CourantContext"
import API from "../utils/API";
import { useHistory } from "react-router-dom"

function ProfilePage() {

    const { logout } = useCourantContext();
    const history = useHistory();

    async function getInfo() {
        try {
          const fetchUser = await API.getUser();
          const fetchStories = await API.getAllStories();

          if (
            fetchUser.data.isAuthenticated === false ||
            fetchStories.data.isAuthenticated === false
          ) {
            return logout(history);
          }

        }
        catch (error) {
            console.log(error);
          }
    }

    return (
        <div>
        <div className="row mb-5">
                <Navbar />
           <Profnav />
            <Profile />
            <Footer />
        
         </div>
        </div>
    );
}

export default ProfilePage;
