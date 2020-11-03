import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

function Signup() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const redirect = useHistory();

    // START Input setStates ——————————————————————————|
    const signupNameValue = (event) => {
        setUsername(event.target.value)
    }

    const signupPasswordValue = (event) => {
        setPassword(event.target.value)
    }

    // WHEN SUBMITTING
    const submitUserSignup = (event) => {
        event.preventDefault();
        // set user info
        const userInfo = {
            username: username,
            password: password
        };

        //request to server to add a new username/password
        API.signup(userInfo)
            .then((response) => {
                if (!response.data.errmsg) {
                    redirect.push("/profile");
                }
            })
            .catch((error) => {
                console.log(`login error: ${error}`);
            });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 sign-up-hero">
                    <h1 className="sign-up-hero-text">SHARE</h1>
                    <h2 className="sign-up-hero-text2">Your story</h2>
                </div>

                {/* <!--right side form--> */}
                <div className="col-6 sign-up-form">
                    <div className="mt-5 text-center">
                        <img src="../images/logo.svg" alt="logo" className="login-logo" />
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <p>Already have an account? 
                        <a>
                        <Link to="/login">
                        Login 
                        </Link>
                    </a>
                        </p>
                    </div>
                    <button type="submit" className="btn btn-primary login-buttons">Join using Google</button>
                    <form className="">
                        <div className="form-group">
                            <label for="exampleInputUser" className="login-label">Username</label>
                            <input type="username" className="form-control login-input" id="exampleInputusername" aria-describedby="userHelp" 
                            onChange={signupNameValue}
                            required
                            />
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1" className="login-label">Password</label>
                            <input type="password" className="form-control login-input" id="exampleInputPassword1" 
                            onChange={signupPasswordValue}
                            required
                            />
                        </div>

                        <button 
                        type="submit" 
                        className="btn btn-dark login-button"
                        onClick={submitUserSignup}
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Signup;