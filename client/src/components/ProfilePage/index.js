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

// no story info so far
        // API.findAllStories()
        // .then((res) => {
        //   if (res.data.isAuthenticated === false) {
        //     return logout(history);
        //   }
        //   if (res.data.length === 0) {
        //     history.push("/profile");
        //   }
        //   setStoryInfo(res.data);
        // })
        //   .catch((err) => console.log(err));
      }, []);
 
      const getLatestStories = () => {
        API.findAllStories()
        .then((res) => {
          if (res.data.isAuthenticated === false) {
            return logout(history);
          }
          if (res.data.length === 0) {
            history.push("/profile");
          }
          setStoryInfo(res.data);
        })
          .catch((err) => console.log(err));
      }


    return (
        <div className="col-10 content-area">
            {/* ---- NEED A NEW COMPONENT: STORIESCARD TO MAP THROUGH AND PUT ON PROFILE PAGE */}
    
            {storyInfo.map((story) => {
              return (
                <StorySection
                  key={story._id}
                  storyID={story._id}
                  author={story.author}
                  title={story.title}
                  getLatestStories={getLatestStories}
                />
              );
            })}
        </div>
    );
}

export default ProfilePage;