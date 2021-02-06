import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import { useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { useCourantContext } from "../../utils/CourantContext";


function StorySection() {
  // Setting our component's initial state
  const { logout } = useCourantContext();
  const { id } = useParams();
  const history = useHistory();

  const [stories, setStories] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all stories and set them to stories
  useEffect(() => {
    grabUser()
    loadStories()
  }, [])


function grabUser() {
    API.getUser(id)
    .then((res) => {
        if (res.data.isAuthenticated === false) {
            return logout(history);
        }
    })
    .catch((err) => console.log(err));
}

  // Loads all books and sets them to books
  function loadStories() {
    API.findAllStories()
      .then((res) => {
        console.log(res.data)
        setStories(res.data)
        console.log("loaded stories")
      })
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteButton(id) {
    API.deleteStory(id)
      .then(res => loadStories())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.addStory({
        title: formObject.title,
        author: formObject.author,
        textUpload: formObject.textUpload
      })
        .then(res => loadStories())
        .catch(err => console.log(err));
    }
  };

  
  console.log(stories)


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <jumbotron>
              <h1>What Books Should I Read?</h1>
            </jumbotron>
            <form>
              <input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <textarea
                onChange={handleInputChange}
                name="textUpload"
              />
              <btn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </btn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <jumbotron>
              <h1>Books On My List</h1>
            </jumbotron>
            {stories.length ? (
              <List>
                {stories.map(story => (
                  <ListItem key={story._id}>
                    <Link to={"/books/" + story._id}>
                      <strong>
                        {story.title} by {story.author}
                      </strong>
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
    );
  }


export default StorySection;
