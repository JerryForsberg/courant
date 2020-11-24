import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar-white";
import { Button } from "../button/Button";

function Homepage() {

    const [button, setButton] = useState(true);

    return (
        <>
            {/* hero area */}

            <div className="hero-home">
                <Navbar />
                <div className="text-area-top-home w-75">
                    <div>
                        <h1 className="header-top">Everybody has</h1>
                        <h1 className="header-top2">A story to tell...</h1>
                    </div>
                    <div>
                        <p className="p-top">
                            Share, Read, and help artist <br />Realize their dreams of publishing <br /> there stories
                    </p>
                    </div>
                    <div>
                        <Link to="/discover">
                            {button && <Button buttonStyle="btn--outline">
                                DISCOVER
                            </Button>}
                        </Link>
                    </div>
                </div>
            </div>

            {/* share lady section*/}

            <div className="d-flex">
                <div className="col-6">
                    <img className="share-lady" src="./images/sharelady.svg" alt="girl reading a book" />
                </div>

                <div className="col-6 mt-5">
                    <h1 className="header-mid">Share your story</h1>
                    <p className="p-mid">Publish your work to gain exposure for your writing from a network of peers, and build a loyal reader base.
                    </p>
                </div>
            </div>

            {/* apsire dude section */}

            <div className="d-flex">

                <div className="col-6 mt-5">
                    <h1 className="header-mid">Aspiring Writers</h1>
                    <p className="p-mid">Refine your craft with feedback from other writers, and earn acclaim for your work while publishing on your own schedule.
                    </p>
                </div>

                <div className="col-6">
                    <img className="aspire-dude" src="./images/aspiringdude.svg" alt="aspiring writer at a laptop writing" />
                </div>
            </div>

            {/* idea section */}

            <div className="d-flex idea-section">

                <div className="col-6 mt-5">
                    <h1 className="idea-mid">Get your ideas</h1>
                    <h2 className="header2-mid">CROWD FUNDED</h2>
                    <p className="p2-mid">The creative process takes time, and it can be difficult to put that time in when it’s not followed by (financial) compensation. Your readers can choose to support your creative process by crowdfunding your stories.
                    </p>
                </div>

                <div className="col-6">

                </div>
            </div>
        </>

        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-lg-12 hero-top-home">
        //     <p>HOMEPAGE</p>
        //     </div>
        //     </div>
        // <div className="container">
        //     <p>HOMEPAGE buttons</p>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/account">
        //             ACCOUNT
        //     </Link>
        //     </button>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/discover">
        //             DISCOVER
        //     </Link>
        //     </button>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/feed">
        //             FEED
        //     </Link>
        //     </button>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/login">
        //             LOGIN
        //         </Link>
        //     </button>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/signup">
        //             SIGNUP
        //         </Link>
        //     </button>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/upload">
        //             UPLOAD
        //         </Link>
        //     </button>

        //     <button type="button" className="btn btn-dark btn-lg btn-block">
        //         <Link className="info" to="/profile">
        //             PROFILE
        //         </Link>
        //     </button>
        // </div>
        // </div>
    );
}

export default Homepage;