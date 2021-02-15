import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Link, useHistory, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { useCourantContext } from "../../utils/CourantContext";
import DeleteBtn from "../DeleteBtn"
import { List, ListItem } from "../List";

{/* if user not logged in, or has no stories, says stories.map is not a function */ }
{/* redirect if not logged in */ }
{/* add isAuthenticated for login for every page */ }


// This is where the stories wil display
function StorySection() {

  const history = useHistory();
  const { id } = useParams();

  const [stories, setStories] = useState([]);
  const { logout } = useCourantContext();
  const { storyError, setStoryError } = useState(false);

  function noStories() {
    if (stories === 0 || stories === undefined) {
      setStoryError(true);
      logout(history);
    } else {
      loadStories();
    }
  }


  // Loads all stories and sets them to stories
  // useEffect loops twice
  useEffect(() => {
    grabUser();
    noStories();

  }, [stories]);

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
          
          {/* Error Validation */}
          {storyError ? (
            <h2>
              You don't have a story yet! Add one here.
            </h2>
          ) : null}


          {console.log(stories)}

          {stories.length ? (
            <List>
              {stories.map(story => (
                <ListItem key={story._id}>
                  <Link to={"/story/" + story._id}>
                    <strong>
                      {story.title} by {story.author}
                    </strong>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}


export default StorySection;