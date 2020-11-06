import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

function dis() {
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
        <div>
            <div className="col-8 content-area">
                <button>
                    {state.map((data) => (
                        <img src={data.imageUpload}>
                            <Link to={"/api/story/" + data.id}>
                            </Link>
                        </img>
                    ))}
                </button>
            </div>
        </div>
    );
}

export default dis;