import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./style.css"

export default function TextEditor() {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content: any) => {
    setCode(content);
  };
  return (
    <>
    <div className="mt-4">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
        className="w-full border-none"
      />
    </div>
    </>
  );
}
