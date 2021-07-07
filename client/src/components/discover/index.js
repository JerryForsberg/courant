import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useHistory, useParams, Link } from "react-router-dom";
import { useCourantContext } from "../../utils/CourantContext";

function Discover() {

    const [stories, setStories] = useState([]);
    const { logout } = useCourantContext();

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        findAllStories()
    }, []);

    function findAllStories() {
        API.findAllStories()
            .then(function (res) {
                console.log(res.data);
                return setStories([]);
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="row">
            <div className="col-1g-10">
                <div className="row">
                    <div className="col-5 d-flex">
                        {stories.map(story => {
                            return (
                                <div className="card">
                                    <img className="card-img-top" src={story.imageUpload}>
                                        <Link to={"/api/story/" + story.id}>
                                        </Link>
                                    </img>
                                    <div class="card-body">
                                        <h5 class="card-title">{story.title}</h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discover;

{/* <div>
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
</div> */}

// try to get text on discover page in a card leave space for photo. add data to local database and try to map through it to see if map function works. 
