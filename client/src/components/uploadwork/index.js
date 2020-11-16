// import { event } from "jquery";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import TextEditor from "../TextEditor"
import API from "../../utils/API";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

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


function Up() {

  const [upload, setUpload] = useState("");
  const [storyError, setStoryError] = useState(false);

  // Sets input values into State
  const createStoryValue = (res) => {
    console.log(res.currentTarget.value)
    setUpload(res.currentTarget.value);
  };
  
  const submitStory = (event) => {
    event.preventDefault();

    // adding upload info from above structure
    API.addStory(upload)
      .then(() => {
        // if no error, redirect to profile
        
          console.log(upload)

      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  };

  return (
    // <div>
    //   <form>
    //     <div className="col">
    //       <div className="form-group mt-5">
    //         <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Please title your work" />
    //         <div className="textedit">
    //           <CKEditor
    //             editor={ClassicEditor}
    //             // save this data:
    //             value={upload}
    //             data="<p>Tell your story...</p>"
    //             onInit={editor => {
    //               // You can store the "editor" and use when it is needed.
    //               console.log('Editor is ready to use!', editor);
    //             }}
    //             onChange={createStoryValue}
    //           />
    //         </div>
    //       </div>
    //       <div className="form-check">
    //         <input className="form-check-input" type="checkbox" id="gridCheck1" />
    //         <label className="form-check-label" for="gridCheck1">
    //           By checking this box I am confirming I own the rights to publish this work
    //         </label>
    //       </div>
    //       <button type="submit" value={upload} onClick={submitStory} className="btn btn-primary mt-2 mb-2">PUBLISH</button>
    //     </div>
    //   </form>
    // </div>
//   )
// }

// ------ THIS CODE WORKS: ------- //
    <div>
      <form className="form">
        <input
          value={upload}
          type="text"
          onChange={createStoryValue}
          placeholder="Enter Story Here"
        />
        <button onClick={submitStory}>Submit</button>
      </form>
    </div>
  )
}

export default Up;
