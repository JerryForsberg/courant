import React, { useState } from "react";
import "./style.css";
// import API from "../../../utils/API";
import axios from "axios";

function log(props) {

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

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 login-form">
                        <div className="mt-5 text-center mb-5">
                            <img src="../images/logo.svg" alt="logo" className="login-logo" />
                        </div>
                        <form>
                            {/* EMAIL */}
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="login-label">Email address</label>
                                <input
                                    className="form-input form-control login-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="you@email.com"
                                    value={email}
                                    onChange={userEmailValue}
                                />
                            </div>
                            {/* PASSWORD */}
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="login-label">Password</label>
                                <input
                                    className="form-input form-control login-input"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={userPasswordValue}
                                />
                            </div>
                            {/* SUBMIT */}
                            <button type="submit"
                                onClick={handleSubmit}
                                className="btn btn-dark login-button">
                                Sign in
                            </button>
                            <div className="text-center mt-5 mb-3">
                                <p>Forgot Password ?</p>
                            </div>
                            <span className="line mb-5"></span>
                            <button type="submit" className="btn btn-secondary login-buttons">Create Account</button>
                        </form>
                    </div>
                    {/* <!--right side hero--> */}
                    <div className="col-6 login-hero">
                        <h1 className="login-hero-text">TELL YOUR<br />STORY</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default log;