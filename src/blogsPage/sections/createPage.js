import React, { useEffect, useState } from 'react'
import QuillEditor from './quill';
import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { BACKEND_URL } from '../../edunomics_backend_url';

const { Title } = Typography;

export default function CreatePage(props) {
    
    // const user = useSelector(state => state.user);
    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setContent(value)
    }

    const onFilesChange = (files) => {
        setFiles(files[0].name)
        console.log(files)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setContent("");
        const variables = {
            content: content,
            files: files
            
        }
        console.log(variables)
        axios.post(BACKEND_URL + '/core/blog/createPost', variables)
            .then(response => {
                if (response) {
                    alert('Post Created!');

                    setTimeout(() => {
                        props.history.push('/blogs')
                    }, 2000);
                }
            })
    }


    return (
        <div>
            <div style={{ maxWidth: '900px', margin: '2rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <Title level={2} > Editor</Title>
                </div>
                <QuillEditor
                    placeholder={"Start Posting Something"}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                />

                <form onSubmit={onSubmit}>
                    <div style={{ textAlign: 'center', margin: '2rem', }}>
                        <button
                            size="large"
                            htmlType="submit"
                            className="btn btn-primary"
                            onSubmit={onSubmit}
                        >
                            Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
























































// import React, { Component } from 'react';
// import SunEditor, {buttonList} from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
// import Header from '../../header/header';
// import plugins from 'suneditor/src/plugins'


// class MyComponent extends Component{
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(content){
//         console.log(content); //Get Content Inside Editor
//     }

//     render() {
//         return (
//             <div>
//               <Header></Header>
//               <div className = "container">
//                 <SunEditor  
//                     lang="en" 
//                     name = "sample" 
//                     height = "100" 
//                     placeholder = "Please type here..."
//                     buttonList = ""
//                     autoFocus = { true }
//                     setDefaultStyle="font-family: times-new-roman; font-size: 20px;"
//                     onChange = {this.handleChange}
//                 />
//               </div>
//             </div>
//           );
//     }
    
// }
// export default MyComponent;