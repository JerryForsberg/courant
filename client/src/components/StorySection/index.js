import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { useCourantContext } from "../../utils/CourantContext";
import { List, ListItem } from "../List";

// This is where the stories wil display
function StorySection() {

  const [stories, setStories] = useState([]);
  const {logout } = useCourantContext();

  const history = useHistory();


  // Loads all stories and sets them to stories
  useEffect(() => {
    API.findAllStories()
    .then((res) => {
      if (res.data.isAuthenticated === false) {
        return logout(history);
      }
      setStories(res.data);
    })
      .catch(err => console.log(err));
  }, []);

  console.log(stories.length)

  return (
    <>
          {/* populated stories will go in here */}
          <h1>My Stories</h1>
          {stories.length ? (
            <Row>
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
              </Row>
           
          ) : (
              <h3>No Results to Display</h3>
            )}

         {/* </Col>
       </Row>
    </Container> */}
    </>
  )
}

export default StorySection;