import React from "react";
import Home from "../components/homepage";
import Navbar from "../components/navbar";
import { useHistory } from "react-router-dom";
import API from "../utils/API"

function home() {
  // Sets redirects to other pages
  const redirect = useHistory();

  //  Routes the user back to the user dashboard if logged in
  API.homeLoginCheck().then((res) => {
    if (res.data.isAuthenticated === true) {
      redirect.push("/profile");
    } else {
      return;
    }
  })

    return (
        <div>
            {/* <Navbar /> */}
            < Home />
        </div>
    );
}

export default home;
