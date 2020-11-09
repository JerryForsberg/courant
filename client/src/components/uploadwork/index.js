// import { event } from "jquery";
import React, { useState } from "react";
import "./style.css";
import TextEditor from "../TextEditor";


function Up() {
    // const Up = () => {

    //     const [upload, setUpload] = useState({
    //         author: username,
    //         title: "",
    //         textUpload: "",
    //         imageUpload: "",
    //         rating: "",
    //         genre: "",
    //         confirm: false
    //     });

    //     const onChange = (e) => {
    //         setUpload({
    //             ...upload, 
    //             [e.target.author]: e.target.value,
    //             [e.target.title]: e.target.value,
    //             [e.target.textUpload]: e.target.value,
    //             [e.target.imageUpload]: e.target.value,
    //             [e.target.rating]: e.target.value,
    //             [e.target.genre]: e.target.value,
    //             [e.target.confirm]: e.target.value,
    //         });
    //     };

    //     const onSubmit = e => {
    //         event.preventDefault();
    //         if(value===null){

    //         }
    //     }

    return (

        //         <form>
        //              <div className="container uploadtext">
        //                 Upload your work
        //                 <div className="row">
        //                     <div className="col">
        //                         <div className="card">
        //                             <img src="../images/cover.jpg" className="card-img-top" alt="Illustration" />
        //                             <form>
        //                                 <div className="form-group">
        //                                     <input type="file" className="form-control-file" id="exampleFormControlFile1" 
        //                                     value={}
        //                                     onChange={onChange}/>
        //                                 </div>
        //                             </form>
        //                         </div>
        <div>
            <form>
                <div className="col">
                    <div className="form-group mt-5">
                        <label for="exampleInputPassword1">
                            Title
                                 </label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Please title your work" />
                        <div className="textedit">
                <TextEditor></TextEditor>
            </div>

                        <div className="form-group mt-3">
                            <label for="exampleFormControlSelect1">
                                Please rate your work
                                     </label>
                            <select className="form-control" id="exampleFormControlSelect1" >
                                <option>G</option>
                                <option>PG</option>
                                <option>PG-13</option>
                                <option>Mature</option>
                                <option>R</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <label className="genrepick mt-3">
                                    Please select the genre that best fits your work
                                         </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label" for="exampleRadios1">
                                    Fiction
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" for="exampleRadios2">
                                    Non-Fiction
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios3" value="option3" />
                                <label className="form-check-label" for="exampleRadios3">
                                    Narrative
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios4" value="option4" />
                                <label className="form-check-label" for="exampleRadios4">
                                    Mystery
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios5" value="option5" />
                                <label className="form-check-label" for="exampleRadios5">
                                    Science Fiction
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios6" value="option6" />
                                <label className="form-check-label" for="exampleRadios6">
                                    Children's Literature
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios7" value="option7" />
                                <label className="form-check-label" for="exampleRadios7">
                                    Horror
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios8" value="option8" />
                                <label className="form-check-label" for="exampleRadios8">
                                    Romance
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios9" value="option9" />
                                <label className="form-check-label" for="exampleRadios9">
                                    Action Adventure
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios10" value="option10" />
                                <label className="form-check-label" for="exampleRadios10">
                                    Fantasy
                                             </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios11" value="option11" />
                                <label className="form-check-label" for="exampleRadios11">
                                    Biography
                                             </label>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label for="exampleFormControlTextarea1">
                                Please write a brief synopsis about this work
                                            </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">
                            </textarea>
                        </div>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1">
                            By checking this box I am confirming I own the rights to publish this work
                                </label>
                    </div>
                    <button href="#" className="btn btn-primary mt-2 mb-2">PUBLISH</button>
                </div>
            </form>
        </div>
    );
}

export default Up;

