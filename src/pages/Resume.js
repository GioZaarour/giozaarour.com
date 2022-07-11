import React/*, {useState}*/ from 'react'
import "../styles/Resume.css";
import PdfResume from "../assets/resume.pdf";

function Resume() {
    //const [embedURL]=useState("https://giozaarour.github.io/resume/Giovanni%20Zaarour%20Resume.pdf")
  return (
    <div className="resume">
        <object data={PdfResume} type="application/pdf" width="100%" height="800px">
          <embed src={PdfResume} width="100%" height="800px"/> 
        </object>
    </div>
  )
}

export default Resume