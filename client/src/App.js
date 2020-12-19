import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer";
import Account from "./pages/account";
import Discover from "./pages/discover";
import Feed from "./pages/feed";
import Home from "./pages/homepage";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Upload from "./pages/uploadwork";
import Profile from "./pages/profile";
import Book from "./pages/book";
import StoriesCard from "./components/StoriesCard";

import { CourantProvider } from "./utils/CourantContext";

function App() {
  return(
  <>
    <CourantProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/story/:id">
            <StoriesCard /> 
        </Route>
        <Route exact path="/book" component={Book} />

      </Router>
    </CourantProvider>
    {/* <Footer /> */}
  </>
  );
}

export default App;
