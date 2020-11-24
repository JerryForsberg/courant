import React, { useState } from "react";
import "./style.css";
import { useHistory, Link } from "react-router-dom";
import API from "../../utils/API";

function Login() {

    // useState to grab the username and password from the form
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const [loginFail, setLoginFail] = useState(false);

    // Sets up page redirect
    const history = useHistory();

    // capture username and password target values —————————————————|
    const usernameValue = (event) => {
        setUsername(event.target.value);
    };

    const userPasswordValue = (event) => {
        setPassword(event.target.value);
    };

    //  when user hits submit login
    const handleSubmit = (event) => {
        event.preventDefault();

        API.login(username, password)
            .then((response) => {
                // if successful
                if (response.status === 200) {

                    console.log(response.data)
                    
                    setUsername(response.data.email);

                    history.push("/profile");
                }
            })
            .catch((error) => {
                // setLoginFail(true)
                console.log(`login error: ${error}`);
            });
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 login-form">
                        <div className="mt-5 text-center mb-5">
                            <img src="../images/logo.svg" alt="logo" className="login-logo" />
                        </div>

                        {/* {loginFail ? (
                            <p className="text-center text-danger">
                                Oops, login did not work. Please check you used the correct info and have an account set up already.</p>
                        ) : null} */}

                        <form>
                            {/* USERNAME */}
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="login-label">Username</label>
                                <input
                                    className="form-input form-control login-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={username}
                                    onChange={usernameValue}
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
                            {/* Sign in */}
                            <button type="submit"
                                onClick={handleSubmit}
                                className="btn btn-dark login-button">
                                Sign in
                            </button>
                            {/* Forgot Password */}
                            <div className="text-center mt-5 mb-3">
                                Forgot Password ?
                                </div>
                            <span className="line mb-5"></span>
                            {/* Create Account */}
                            <Link to="/signup">
                                <button type="submit" className="btn btn-secondary login-buttons">
                                    Create Account
                            </button>
                            </Link>
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

export default Login;