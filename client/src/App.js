import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer";
import Account from "./components/account";
import Discover from "./components/discover";
import Feed from "./components/feed";
import Homepage from "./components/homepage";
import LoginForm from "./components/login";
import SignupForm from "./components/signup";
import Upload from "./components/uploadwork";
import Profile from "./components/ProfilePage";

import { CourantProvider } from "./utils/CourantContext";

function App() {

  return (
    <>
      <CourantProvider>
      
        <Route exact path="/" component={Homepage} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/profile" component={Profile}/>

      </CourantProvider>
      <Footer />
    
    </>
  );
}

export default App;
