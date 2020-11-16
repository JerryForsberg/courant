import React, { useState, useEffect } from "react";
import "./style.css"
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useCourantContext } from "../../utils/CourantContext"

function storiesCard(props) {
    const {logout } = useCourantContext();

    // States
    const [title, setStoryTitle] = useState();



}





function StoriesPopulated({ storiesCard, story }) {
    
    // empty array to store Stories at
    const renderStories = [];

    // for each Story, create this format
    story.forEach((element) => {
        renderStories.push(
            <div>
                <h4>{element.title}</h4>
                <p>{element.details}</p>
            </div>
        );
    });

    return (
        <div>

            {renderStories}

            <button onClick={storiesCard}>
                Upload Story
            </button>

        </div>
    );
}

export default StoriesPopulated;