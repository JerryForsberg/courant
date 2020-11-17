import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import { useCourantContext } from "../../utils/CourantContext"
import StorySection from "../StorySection";

// This is our main page
function ProfilePage() {
    const {logout } = useCourantContext();

    const history = useHistory();

    const [storyInfo, setStoryInfo] = useState([])
    
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

          setStoryInfo(fetchStories.data)

        }
        catch (error) {
            console.log(error);
          }
    }

    useEffect(() => { 
        getInfo(); 
    }, []);

    return (
        <div className="col-10 content-area">
            {/* ---- NEED A NEW COMPONENT: STORIESCARD TO MAP THROUGH AND PUT ON PROFILE PAGE */}
            
            <StorySection 
              getInfo={getInfo}
              storyInfo={storyInfo}
            />
        </div>
    );
}

export default ProfilePage;