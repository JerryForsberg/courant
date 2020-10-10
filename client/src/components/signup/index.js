import React from "react";
import "./style.css";

function  sign() {
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
                    <img src="../images/logo.svg" alt="logo" className="login-logo"/>
                </div>
                <div className="text-center mt-5 mb-5">
                    <p>Already have an account? Login </p>
                </div>
                <button type="submit" className="btn btn-primary login-buttons">Join using Google</button>
                <form className="">
                    <div className="form-group">
                        <label for="exampleInputEmail1" className="login-label">Email address</label>
                        <input type="email" className="form-control login-input" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                    </div>
                    <div className="form-group">
                        <label for="exampleInputUser" className="login-label">Username</label>
                        <input type="username" className="form-control login-input" id="exampleInputusername" aria-describedby="userHelp"/>

                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1" className="login-label">Password</label>
                        <input type="password" className="form-control login-input" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-dark login-button">Join</button>

                   

                </form>
            </div>
        </div>
    </div>

    );
}

export default sign;