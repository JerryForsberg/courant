import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { useCourantContext } from "../../utils/CourantContext";
import DeleteBtn from "../DeleteBtn"
import { List, ListItem } from "../List";

// This is where the stories wil display
function StorySection() {
  
  const [stories, setStories] = useState();
  const {logout } = useCourantContext();
  const [storyError, setStoryError] = useState(false);

  const history = useHistory();
  const { id } = useParams();

  // if no stories, display error

  // Loads all stories and sets them to stories
  useEffect(() => {

    grabUser()
    loadStories()

  }, []);
  
  function grabUser() {
    API.getUser(id)
        .then((res) => {
          if (res.data.isAuthenticated === false) {
            return logout(history);
          }
        })
        .catch((err) => console.log(err));
  }

  function loadStories() {
    API.findAllStories()
        .then((res) => {
            setStories(res.data)
            console.log("loaded stories")
          // else {
          //   // redirect to 404 page
          //   history.push("/notfound")
          // }
        })
        .catch(err => console.log(err));
    }

  function deleteButton(id) {
    API.deleteStory(id)
      .then(res => 
        loadStories()
        )
      .catch(err => console.log(err));
  }

 
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          {/* populated stories will go in here */}
          <h1>My Stories</h1>
          
{/* if user not logged in, says stories.map is not a function */}
{/* redirect if not logged in */}
{/* add isAuthenticated for login for every page */}

          {Array.isArray(stories) ? (
            <List>
              {stories.map(story => (
                <ListItem key={story._id}>
                  <Link to={"/story/" + story._id}>
                    <button className="btn">
                      <strong>
                        {story.title} by {story.author}
                      </strong>
                    </button>
                  </Link>
                  <DeleteBtn onClick={() => deleteButton(story._id)} />
                  </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3> 
            )}

         </Col>
       </Row>
    </Container>
  )
}

export default StorySection;