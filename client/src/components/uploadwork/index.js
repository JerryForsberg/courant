import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

import { useCourantContext } from "../../utils/CourantContext"

// Setting the component's initial state
//   constructor(props) {
//     super(props);
//     this.state = { content: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(content, editor) {
//     this.setState({ content });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log("Text was submitted: " + this.state.content);

//     // redirect not working??
//     // const redirect = useHistory();

//     const storyInfo = this.state.content;

//     API.addStory(storyInfo)
//       .then((response) => {
//         if (!response.data.errmsg) {
//           console.log(response.data);
//         }
//       })
//       .catch((error) => {
//         console.log(`Post error: ${error}`);
//       });

//   }


//   render() {
//     return (
//       <div class="textEditor">
//         <form onSubmit={this.handleSubmit}>
//           <h3>Provide your story below!</h3>

//           <Editor
//             apiKey="gz4gdb5km889y8991tjektzc9div0z0d6l9h98wjbbepbd4c"
//             value={this.state.content}
//             initialValue="<p>Initial content</p>"
//             init={{
//               height: 400,
//               menubar: false,
//               plugins: [
//                 'advlist autolink lists link image',
//                 'charmap print preview anchor help',
//                 'searchreplace visualblocks code',
//                 'insertdatetime media table paste wordcount'
//               ],
//               toolbar:
//                 'undo redo | formatselect | bold italic | \
//                 alignleft aligncenter alignright | \
//                 bullist numlist outdent indent | help'
//             }}
//             onEditorChange={this.handleChange}
//           />

//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }


function UploadWork() {
  const { logout } = useCourantContext();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {

    API.getUser(id)
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        console.log("Get User successful")
      })
      .catch((err) => console.log(err));
  })

  // Setting our component's initial state
  const [formObject, setFormObject] = useState({});

 // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target
    setFormObject({...formObject, [name]: value})
  };


  const submitStory = (event) => {
    event.preventDefault();
 
    if (formObject.title && formObject.author) {
      API.addStory({
        author: formObject.author,
        title: formObject.title,
        textUpload: formObject.textUpload
      })
      .then((res) => {
        // if no error, redirect to profile
        history.push("/profile");
     
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
    }
    
  };

  return (
    <div>
      <form>
        <div className="col">
          <div className="form-group mt-5">
            <input 
              type="text" 
              name="title"
              className="form-control" 
              placeholder="Please title your work"
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="author"
              className="form-control" 
              placeholder="Author" 
              onChange={handleInputChange} 
            />
            <div className="textedit">
              {/* <CKEditor
                editor={ClassicEditor}
                name="textUpload"
                data="<p>Tell your story...</p>"
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={handleInputChange}
              /> */}

              <div>
                <form className="form">
                  <textarea
                    className="form-control"
                    type="text"
                    name="textUpload"
                    onChange={handleInputChange}
                    placeholder="Enter Story Here"
                  />
                </form>
              </div>

            </div>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" for="gridCheck1">
              By checking this box I am confirming I own the rights to publish this work
            </label>
          </div>
          <button 
              disabled={!(formObject.author && formObject.title)}
              type="submit" 
              onClick={submitStory} 
              className="btn btn-primary mt-2 mb-2">
            PUBLISH
            </button>
        </div>
      </form>
    </div>
  )
}

export default UploadWork;
