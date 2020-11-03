import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import StateManager from "react-select";

function profile() {
    const [state, setState] = useState([]);

    const getAllStories = () => {
        API.getAllStories()
            .then(res => {
                setState(res.data);
            }).catch(err => {
                console.log(err);
            }
            )
    }

    useEffect(() => {
        getAllStories();
    }, []);

    return (
        <div className="col-8 content-area">
            <div>
                {/* map through works from db call props */}
                {state.map((data) => (
            <Link to={"/api/story/" + data.id}>
            <img src={data.imageUpload}>
            </img>
            </Link>
            ))}
            </div>
        </div>
    );
}

export default profile;