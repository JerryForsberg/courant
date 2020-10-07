import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";

function log() {

  // useState to grab the email and password from the form
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // capture email and password values —————————————————|
  const userEmailValue = (event) => {
    setEmail(event.target.value);
  };
    
  const userPasswordValue = (event) => {
    setPassword(event.target.value);
  };



    return (
        <div>
            
        </div>
    );
}

export default log;