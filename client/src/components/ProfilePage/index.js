import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import { useCourantContext } from "../../utils/CourantContext"
import StorySection from "../StorySection";

// This is our main page that wraps around everything
function ProfilePage() {
    const {logout } = useCourantContext();

    const history = useHistory();
    const { id } = useParams();


    const [storyInfo, setStoryInfo] = useState([])

    // useEffect hook to display on page after render
    useEffect(() => {

      API.getUser(id)
        .then((res) => {
          if (res.data.isAuthenticated === false) {
            return logout(history);
          }
          console.log("Get User successful")
        })
        .catch((err) => console.log(err));

     
      }, []);
 
      


    return (
        <div className="col-10 content-area">
            {/* ---- NEED A NEW COMPONENT: STORIESCARD TO MAP THROUGH AND PUT ON PROFILE PAGE */}
            <StorySection />
        </div>
    );
}

export default ProfilePage;