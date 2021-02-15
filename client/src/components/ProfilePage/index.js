import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import StorySection from "../StorySection";
import Profile from "../profile";

// This is our main page that wraps around everything --------------
function ProfilePage() {
   
        return (

            <>
                <Profile>
                    <StorySection />
                </Profile>
            </>

            // <div className="col-10 content-area">
            //     <div className="row">
            //         <div className="col-1g-10">
            //             <div className="row">
            //                 <div className="col-10 d-flex mx-auto">
            //                     <div className="mx-auto">
            //                         <button className="profile-buttons" ><i class="fas fa-plus"></i></button>
            //                         <button className="profile-buttons"><i class="fas fa-user"></i></button>
            //                         <button className="profile-buttons"><i class="fas fa-shopping-bag"></i></button>
            //                     </div>
            //                 </div>

            //             </div>
            //             <div className="row">
            //                 <div className="col-5 d-flex">
            //                     <img src="../images/profile-example1.jpg" alt="book cover" className="discover-img" />
            //                     <img src="../images/profile-example2.jpg" alt="book cover" className="discover-img" />
            //                     <img src="../images/profile-example3.jpg" alt="book cover" className="discover-img" />
            //                     <img src="../images/profile-example4.jpg" alt="book cover" className="discover-img" />

            //                 </div>

            //             </div>

            //             <div className="row">
            //                 <div className="col-5 d-flex">
            //                     <img src="../images/profile-example5.jpg" alt="book cover" className="discover-img" />
            //                     <img src="../images/profile-example6.jpg" alt="book cover" className="discover-img" />
            //                     <img src="../images/profile-example7.jpg" alt="book cover" className="discover-img" />
            //                     <img src="../images/profile-example8.jpg" alt="book cover" className="discover-img" />

            //                 </div>

            //             </div>

            //         </div>
            //     </div>
            // </div>
        );
}

export default ProfilePage;
