import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { useHistory, useParams } from "react-router-dom";
import { useCourantContext } from "../../utils/CourantContext";

function StoryCard(props) {
  const { logout } = useCourantContext();
  const [story, setStory] = useState({})
  const { id } = useParams();

  const history = useHistory();

  // When this component mounts, grab the book with the _id of props.match.params.id
  useEffect(() => {
    API.getStory(id)
      .then(res => setStory(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>
            {story.title} by {story.author}
          </h1>
        </Col>
      </Row>

      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <p>
              {story.textUpload}
            </p>
          </article>
        </Col>
      </Row>
    </Container>
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