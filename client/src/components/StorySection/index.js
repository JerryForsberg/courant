import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import {useCourantContext} from "../../utils/CourantContext";

function StoriesCard(props) {
    const {logout } = useCourantContext();
    const [story, setStory] = useState({})
    const {id} = useParams();

    useEffect(() => {
      API.getBook(id)
        .then(res => setBook(res.data))
        .catch(err => console.log(err));
    }, [])

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



    // option to delete story
    const submitDeleteStory = () => {
        API.deleteStory(props.storyID)
        .then((response) => {
            props.getLatestStories();
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
function StorySection() {
    const [stories, setStories] = useState({});

    // Loads all stories and sets them to stories
    useEffect(() => {
        API.findAllStories()
        .then(res => 
            setStories(res.data)
        )
            .catch(err => console.log(err)); 
    }, []);


    return (
        <div>
            {/* populated stories will go in here */}

            {stories.length ? (
                <li>
                {stories.map(story => (
                  <ul key={story._id}>
                    <Link to={"/story/" + story._id}>
                      <strong>
                        {story.title} by {story.author}
                      </strong>
                    </Link>
                  </ul>
                ))}
              </li>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    )
}

export default StorySection;