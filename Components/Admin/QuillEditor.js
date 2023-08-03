import { useState } from "react";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video',],
    ['clean']                                         // remove formatting button
  ];

const modules = {
    toolbar: toolbarOptions ,
    // [
    //     [{ header: '1' }, { header: '2' }, { font: [] }],
    //     [{ size: [] }],
    //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //     [
    //         { list: 'ordered' },
    //         { list: 'bullet' },
    //         { indent: '-1' },
    //         { indent: '+1' },
    //     ],
    //     ['link', 'image', 'video',],
    //     ['clean'],
    // ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];

const QuillEditor = () => {
    const [value, setValue] = useState('');
    return (
        <ReactQuill
            modules={modules}
            formats={formats}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    )
}

export default QuillEditor

