import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../Grid";
import API from "../../utils/API";
import Navbar from "../navbar-white"
import "./style.css";

function StoriesCard() {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  const {id} = useParams()
  useEffect(() => {
    API.getStory(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <>
      <Navbar />
      <Container fluid>
        <div className="storyStyle">
        
              <h1>
                {book.title}
              </h1>
              <h4>{book.author}</h4>
          
          <br/>
          <br/>

            <article>
              <p>
                {book.textUpload}
              </p>
            </article>
          
            <Link to="/profile">
            <button className="profile-button">
                ← Back to My Stories
            </button>
            </Link>
        
        </div>
        <br/>
        <br/>
      </Container>
      </>
    );
  }


export default StoriesCard;
