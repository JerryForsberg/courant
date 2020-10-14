import React from "react";
import "./style.css";

function up() {
    return (
        <div>
            <div className="container uploadtext">
                Upload your work
                <div className="row">
                    <div className="col">
                        <div class="card">
                            <img src="../images/cover.jpg" class="card-img-top" alt="Illustration" />
                            <form>
                                <div class="form-group">
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputPassword1">
                                    Title
                                </label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please title your work" />
                                <div class="form-group mt-3">
                                    <label for="exampleFormControlSelect1">
                                        Please rate your work
                                    </label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>G</option>
                                        <option>PG</option>
                                        <option>PG-13</option>
                                        <option>Mature</option>
                                        <option>R</option>
                                    </select>
                                </div>
                            </div>
                                <a href="#" class="btn btn-primary">PUBLISH</a>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default up;