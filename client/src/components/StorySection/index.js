import React from "react";
import API from "../../utils/API";
import "./style.css";
import { useHistory } from "react-router-dom";
import StoriesPopulated from "../StoriesPopulated";
import StoriesCard from "../StoriesPopulated"

// Stories Card ==================================== |
function StorySection({ getInfo, storyInfo, story }) {


    return (
        <div>
            {/* populated stories will go in here */}

        <StoriesPopulated
            story={story}
        />
        < StoriesCard
            runStory={getInfo}
            storyInfo={storyInfo}
        />
        </div>
    )
}

export default StorySection;