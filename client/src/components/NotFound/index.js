import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
 
  return (
    <>
      <header>
        <h1>404</h1>
        <h3>
          Looks like you don't have any stories!
          <Link to="/upload">
          <button>Start uploading!</button>
          </Link>
          
          <Link to="/discover">
              <button>
                Go back to home page
              </button>
          </Link >
        </h3>
      </header>
    </>
    
  );
}

export default NotFound;
