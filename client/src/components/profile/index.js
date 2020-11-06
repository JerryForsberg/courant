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
        <div className="col-8 content-area">
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
        </div>
    );
}

export default profile;