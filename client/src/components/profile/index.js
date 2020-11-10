import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import { useCourantContext } from "../../utils/CourantContext"


function profile() {
    const { logout } = useCourantContext();

    // Stores story info from the database
    const [profileStories, setProfileStories] = useState([]);

  // Sets up page redirect
  const history = useHistory();
   
    // API Call for retrieving story Info
    useEffect(() => {
        API.getAllStories()
        .then((res) => {
            if (res.data.isAuthenticated === false) {
              console.log(res.data);
            //   return logout(history);
            }
            setProfileStories(res.data);
          })
          .catch((err) => console.log(err));
      }, []);


    return (
        <div className="col-10 content-area">
            {/* ---- NEED A NEW COMPONENT: STORIESCARD TO MAP THROUGH AND PUT ON PROFILE PAGE */}
            
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