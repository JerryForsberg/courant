import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";


function profile() {
    // Stores story info from the database
    const [profileStories, setProfileStories] = useState([]);

    // Sets up page redirect
    const history = useHistory();

    // API Call for story Info
    useEffect(() => {
        API.getAllStories()
            .then((res) => {
                // if (res.data.isAuthenticated === false) {
                //   return logout(history);
                // }
                // if (res.data.length === 0) {
                //   history.push("/add-vehicle");
                // }
                setProfileStories(res.data);
            })
            .catch((err) => console.log(err));
    }, []);


    const getLatestStories = () => {
        API.getAllStories()
            .then((res) => {
                // if (res.data.isAuthenticated === false) {
                //   return logout(history);
                // }
                setProfileStories(res.data);
            })
            .catch((err) => console.log(err));
    }

    return (

        <div className="row">
            <div className="col-1g-10">
                <div className="row">
                    <div className="col-10 d-flex mx-auto">
                    <div className="mx-auto">
                        <button className="profile-button" ><i class="fas fa-plus"></i></button>
                        <button className="profile-button"><i class="fas fa-user"></i></button>
                        <button className="profile-button"><i class="fas fa-shopping-bag"></i></button>
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

    );
}

export default profile;

{/* ---- NEED A NEW COMPONENT: STORIESCARD TO MAP THROUGH AND PUT ON PROFILE PAGE */ }

{/* <button>
                {profileStories.map((data) => {
                    return (
                    <img src={data.imageUpload}>
                        <Link to={"/api/story/" + data.id}>
                        </Link>
                    </img>
                    )
                })}
            </button> */}