// import { event } from "jquery";
import React, { Component} from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Editor } from '@tinymce/tinymce-react';
import API from "../../utils/API";


class Up extends Component {

  // Setting the component's initial state
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(content, editor) {
    this.setState({ content });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Text was submitted: " + this.state.content);
  
    // redirect not working??
    // const redirect = useHistory();

    const storyInfo = this.state.content;

    API.addStory(storyInfo)
      .then((response) => {
        if (!response.data.errmsg) {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(`Post error: ${error}`);
      });

  }


  render() {
    return (
      <div class="textEditor">
        <form onSubmit={this.handleSubmit}>
          <h3>Provide your story below!</h3>

          <Editor
            apiKey="gz4gdb5km889y8991tjektzc9div0z0d6l9h98wjbbepbd4c"
            value={this.state.content}
            initialValue="<p>Initial content</p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help'
            }}
            onEditorChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

  // <form>
  //          <div className="container uploadtext">
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
  //                     </div>
  //                     <div className="col">
  //                         <form>
  //                             <div className="form-group">
  //                                 <label for="exampleInputPassword1">
  //                                     Title
  //                                 </label>
  //                                 <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Please title your work" onChange={this.handleChange}/>
  //                                 <div className="form-group mt-3">
  //                                     <label for="exampleFormControlSelect1">
  //                                         Please rate your work
  //                                     </label>
  //                                     <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleChange}>
  //                                         <option>G</option>
  //                                         <option>PG</option>
  //                                         <option>PG-13</option>
  //                                         <option>Mature</option>
  //                                         <option>R</option>
  //                                     </select>

  //                                     <div>
  //                                         <div>
  //                                         <label className="genrepick mt-3">
  //                                             Please select the genre that best fits your work
  //                                         </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios1" value="option1" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios1">
  //                                                 Fiction
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios2" value="option2" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios2">
  //                                                 Non-Fiction
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios3" value="option3" onChange={this.handleChange} />
  //                                             <label className="form-check-label" for="exampleRadios3">
  //                                                 Narrative
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios4" value="option4" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios4">
  //                                                 Mystery
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios5" value="option5" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios5">
  //                                                 Science Fiction
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios6" value="option6" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios6">
  //                                                 Children's Literature
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios7" value="option7" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios7">
  //                                                 Horror
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios8" value="option8" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios8">
  //                                                 Romance
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios9" value="option9" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios9">
  //                                                 Action Adventure
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios10" value="option10" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios10">
  //                                                 Fantasy
  //                                             </label>
  //                                         </div>
  //                                         <div className="form-check">
  //                                             <input className="form-check-input" type="radio" className="exampleRadios" id="exampleRadios11" value="option11" onChange={this.handleChange}/>
  //                                             <label className="form-check-label" for="exampleRadios11">
  //                                                 Biography
  //                                             </label>
  //                                         </div>
  //                                     </div>

  //                                     <div className="form-group mt-3">
  //                                         <label for="exampleFormControlTextarea1">
  //                                             Please write a brief synopsis
  //                                             </label>
  //                                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange}>
  //                                         </textarea>
  //                                     </div>
  //                                 </div>
  //                             </div>

  //                             <div className="form-check">
  //                                 <input className="form-check-input" type="checkbox" id="gridCheck1" />
  //                                 <label className="form-check-label" for="gridCheck1" onChange={this.handleChange}>
  //                                     By checking this box I am confirming I own the rights to publish this work
  //                                 </label>
  //                             </div>
  //                             <button className="btn btn-primary mt-2 mb-2">PUBLISH</button>
  //                         </form>
  //                     </div>
  //                 </div>
  //             </div> 
  //          </form >
  //     );
  // } 


  //------ THIS CODE WORKS: ----- //
  // <div>
  //     <div>
  //         <TextEditor />

  //     </div>
  // </div>


export default Up;
