import React, {Component} from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import API from "../utils/API"
import { useHistory } from "react-router-dom";


class textEditor extends Component {

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
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(`Post error: ${error}`);
      });

  }

render() {
    return (
        <div className="App">
            <form >
            <CKEditor
                editor={ClassicEditor}
                // save this data:
                value={this.state.content}
                data="<p>Hello from CKEditor 5!</p>"
                onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={this.handleChange}
                />

            <input type="submit" value="Submit" onClick={this.handleSubmit} /> 
            </form> 
        </div>
    )};
}

export default textEditor;
