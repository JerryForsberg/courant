import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { useCourantContext } from "../../utils/CourantContext";
import { List, ListItem } from "../List";

// This is where the stories wil display
function StorySection() {

  const [stories, setStories] = useState([]);
  const { logout } = useCourantContext();
  const id = useParams();

  const history = useHistory();

  function grabUser() {
    API.getUser(id)
    .then((res) => {
      if (res.data.isAuthenticated === false) {
        return logout(history);
      }
    })
    .catch((err) => console.log(err));

  }

  function getStories() {
    API.findAllStories()
    .then((res) => {
      if (res.data.isAuthenticated === false) {
        return logout(history);
      }
      else {
        setStories(res.data);
      }
    })
    .catch(err => console.log(err));
  }

  // Loads all stories and sets them to stories
  useEffect(() => {
    grabUser();
    getStories();   

  }, []);

  console.log(stories.length);

  // renders return before above JS
  return (
    <>
      {/* populated stories will go in here */}
      <h1>My Stories</h1>
      {stories.length ? (
        <row>
          {/* map () does not execute the function for array elements without values. */}

          {stories.map(story => (
            <Link to={"/story/" + story._id}>
              <button className="btn">
                <strong>
                  {story.title} by {story.author}
                </strong>
              </button>
            </Link>
          ))}
        </row>
      ) : (
          <h3>No Stories to Display</h3>
        )}

      {/* </Col>
       </Row>
    </Container> */}
    </>
  )
}

export default StorySection;