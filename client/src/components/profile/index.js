import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
<<<<<<< HEAD
import Footer  from "../footer/index";
=======
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
>>>>>>> 9c54e622d8d90ed75d34ae89848272e3be37ba48

    return (
<<<<<<< HEAD
        // <div className="col-8 content-area">
        //     <div>
        //         {/* map through works from db call props
        //         <Link to="/">
        //         <img />
        //         </Link> */}
        //     </div>
            
        // </div>

<>
<Footer />
</>
        
=======
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
>>>>>>> 9c54e622d8d90ed75d34ae89848272e3be37ba48
    );
}

export default profile;