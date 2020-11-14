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
       
            <div className="row">
                <div className="col-1g-10">
                    <div className="row">
                        <div className="col-5 d-flex">
                            <img src="../images/example-img1.jpg" alt="book cover" className="discover-img" />
                            <img src="../images/example-img2.jpg" alt="book cover" className="discover-img" />
                            <img src="../images/example-img3.jpg" alt="book cover" className="discover-img" />
                            <img src="../images/example-img4.jpg" alt="book cover" className="discover-img" />

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-5 d-flex">
                            <img src="../images/example-img5.jpg" alt="book cover" className="discover-img" />
                            <img src="../images/example-img6.jpg" alt="book cover" className="discover-img" />
                            <img src="../images/example-img7.jpg" alt="book cover" className="discover-img" />
                            <img src="../images/example-img8.jpg" alt="book cover" className="discover-img" />

                        </div>

                    </div>
                    
                </div>
            </div>
       


    );
}

export default dis;


                {/* <button>
                    {state.map((data) => (
                        <img src={data.imageUpload}>
                            <Link to={"/api/story/" + data.id}>
                            </Link>
                        </img>
                    ))}
                </button> */}