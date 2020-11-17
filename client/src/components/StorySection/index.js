import React, {useState} from "react";
import API from "../../utils/API";
import "./style.css";
import { useHistory } from "react-router-dom";
import {useCourantContext} from "../../utils/CourantContext";

function StoriesCard(props) {
    const {logout } = useCourantContext();

    // Sets up page redirect
    const history = useHistory();
    
    // option to delete story
    const submitDeleteStory = () => {
        API.deleteStory(props.storyID)
        .then((response) => {
            if (response.data.isAuthenticated === false) {
                return logout(history);
              }

            props.getLatestStories()  
        })
        .catch((error) => {
            console.log(error);
          });
    }

    return (

        <div>
            <h2>Delete {props.title}</h2>
            <p >Are you sure you want to permanently delete this story? This action can not be undone!</p>
            <button onClick={submitDeleteStory}>Yes, Delete story</button>
        </div>
    )

}




// Stories Card ==================================== |
// This is where the stories wil display
function StorySection({ storyID, getLatestStories, author, title }) {
    const { logout } = useCourantContext();

    //redirect to vehicle dashboard
    const history = useHistory();


    return (
        <div>
            {/* populated stories will go in here */}

              <div >
                <h4 >{title}</h4>
                <h3>{author}</h3>
              </div>
            
              <StoriesCard
                getLatestStories={getLatestStories}
                storyID={storyID}
                title={title}
            />
        </div>
    )
}

export default StorySection;