import React from "react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import API from "../utils/API"
import { useHistory } from "react-router-dom";


// function textEditor() {

// // saving data using editor
//     ClassicEditor
//         .create( document.querySelector( '#editor' ), console.log("save successful"))
//         .catch( error => {
//             console.error( error );
//         } 
//     );

//     // getting data 
//     const submitStory = (event) => {
//         // cannot read property getData of undefined
//         let editor;
//         event.preventDefault();

//         const editorData = editor.getData();

//         console.log(editorData);

//     };

//     // enable or disable a “Save” button and block the user from leaving the page without saving the data.

//     return (
//         <div>
//             <form action="[URL]" method="post">
//             <textarea name="content" id="editor">
//                 This is some sample content.
//             </textarea>
//             <input type="submit" value="Submit" onClick={submitStory} />
//             </form>
//         </div>
//     );
// }




function textEditor() {

    const redirect = useHistory();
 
    // const submitStory = (event) => {
    //     event.preventDefault();

    // };

   
    return (
        <div className="App">
            <CKEditor
                editor={ClassicEditor}
                // save this data:
                data="<p>Hello from CKEditor 5!</p>"
                onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                // onChange saves every single time text changes, which can be 10 times if not copied and pasted
                onChange={(event, editor) => {
                    
                    const storyInfo = editor.getData();
                     console.log(storyInfo)

                      API.addStory(storyInfo)
                        .then((response) => {
                            if (!response.data.errmsg) {
                                redirect.push("/profile");
                            }
                        })
                        .catch((error) => {
                            console.log(`login error: ${error}`);
                        });
                    
                }}
               

                />

            <input type="submit" value="Submit" />  
        </div>
    );
}

export default textEditor;
