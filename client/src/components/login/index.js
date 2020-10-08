import React, { useState } from "react";
import "./style.css";
import API from "../../../utils/API";
import axios from "axios";

function log() {

    // useState to grab the email and password from the form
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // capture email and password target values —————————————————|
    const userEmailValue = (event) => {
        setEmail(event.target.value);
    };

    const userPasswordValue = (event) => {
        setPassword(event.target.value);
    };

    // function to login the user
    function loginUser(email, password) {
        // post data to login route
        axios.post("/api/login", { email, password })
            .then((data) => {
                props.setIsLoggedin(true)
                props.history.push("/gallery")//how to route to the page
            })
            // If there's an error, log the error
            .catch(function (err) {
                console.log(err);
            });
    }

    //  when user hits submit login
    const handleSubmit = (event) => {
        event.preventDefault();

        let userData = { email, password };
        if (!userData.email || !userData.password) {
            return;
        }
        // If there IS an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        setEmail("");
        setPassword("");
    }

    //******* need to stylize the look of this, but MVP for now
    return (
        <div className="container">
            <form>
                <h2>Login</h2>
                <div className="label-group">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>

                    <input
                        className="form-input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="you@email.com"
                        value={email}
                        onChange={userEmailValue}
                    />
                </div>

                <div className="label-group">
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={userPasswordValue}
                    />
                </div>

                <button
                    className="btn form-submit-btn"
                    onClick={handleSubmit}
                    type="submit"
                >
                    Login
                </button>
            </form>

        </div>
    );
}

export default log;