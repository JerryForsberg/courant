import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";


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
        <div className="col-10 content-area">
            <button>
                {state.map((data) => (
                    <img src={data.imageUpload}>
                        <Link to={"/api/story/" + data.id}>
                        </Link>
                    </img>
                ))}
            </button>

      

        </div>

    );
}

export default profile;