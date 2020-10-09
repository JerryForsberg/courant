import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Account from "./pages/account";
import Discover from "./pages/discover";
import Feed from "./pages/feed";
import Home from "./pages/homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Upload from "./pages/uploadwork";


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/upload" component={Upload} />

      {/* <Route exact path="/" component={} /> */}
      
      <Footer />
    </Router>
  );
}

export default App;
