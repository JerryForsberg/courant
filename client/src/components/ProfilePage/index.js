import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import { useCourantContext } from "../../utils/CourantContext"
import StorySection from "../StorySection";

// This is our main page that wraps around everything
function ProfilePage() {
    const {logout } = useCourantContext();

    const history = useHistory();
    const { id } = useParams();

    // useEffect hook to display on page after render
    useEffect(() => {

      API.getUser(id)
        .then((res) => {
          if (res.data.isAuthenticated === false) {
            return logout(history);
          }
          console.log("Get User successful")
        })
        .catch((err) => console.log(err));

      }, []);
 
      


    return (
        <div className="col-10 content-area">
            {/* ---- NEED A NEW COMPONENT: STORIESCARD TO MAP THROUGH AND PUT ON PROFILE PAGE */}
            <div className="row">
            <div className="col-1g-10">
                <div className="row">
                    <div className="col-10 d-flex mx-auto">
                    <div className="mx-auto">

                    <Link to="/upload">
                    <button className="profile-buttons" ><i class="fas fa-plus"></i></button>
                   </Link>
                        <button className="profile-buttons"><i class="fas fa-user"></i></button>
                        <button className="profile-buttons"><i class="fas fa-shopping-bag"></i></button>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-5 d-flex">
                        <img src="../images/profile-example1.jpg" alt="book cover" className="discover-img" />
                        <img src="../images/profile-example2.jpg" alt="book cover" className="discover-img" />
                        <img src="../images/profile-example3.jpg" alt="book cover" className="discover-img" />
                        <img src="../images/profile-example4.jpg" alt="book cover" className="discover-img" />

                    </div>

                </div>

                <div className="row">
                    <div className="col-5 d-flex">
                        <img src="../images/profile-example5.jpg" alt="book cover" className="discover-img" />
                        <img src="../images/profile-example6.jpg" alt="book cover" className="discover-img" />
                        <img src="../images/profile-example7.jpg" alt="book cover" className="discover-img" />
                        <img src="../images/profile-example8.jpg" alt="book cover" className="discover-img" />

                    </div>

                </div>

            </div>
        </div>
            <StorySection />
        </div>
    );
}

export default ProfilePage;