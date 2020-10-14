import React from "react";
import "./style.css";

function up() {
    return (
        <div>
            <div className="container uploadtext">
                Upload your work
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="../images/cover.jpg" className="card-img-top" alt="Illustration" />
                            <form>
                                <div className="form-group">
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputPassword1">
                                    Title
                                </label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Please title your work" />

                                <div className="form-group mt-3">
                                    <label for="exampleFormControlSelect1">
                                        Please rate your work
                                    </label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>G</option>
                                        <option>PG</option>
                                        <option>PG-13</option>
                                        <option>Mature</option>
                                        <option>R</option>
                                    </select>

                                    <div class="form-group mt-3">
                                        <label for="exampleFormControlTextarea1">
                                            Please write a brief synopsis
                                            </label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                <label class="form-check-label" for="gridCheck1">
                                    By checking this box I am confirming I own the rights to publish this work
                                </label>
                            </div>
                            <a href="#" class="btn btn-primary mt-2">PUBLISH</a>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default up;