import React, { useEffect, useState, Card } from "react";
// import { useParams, useHistory } from "react-router-dom";
import "./style.css";
// import API from "../../utils/API";


function title() {
    return (
        <div>
            <Card.Body>
                <input id="title">Title</input>
                <input id="author">Author</input>
                {/* future: allow user it input tags */}
            </Card.Body>
        </div>
    )
}

export default title;
