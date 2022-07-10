import React, {useState} from 'react'
import "../styles/Resume.css";

function Resume() {
    const [embedURL]=useState("https://giozaarour.github.io/resume/Giovanni%20Zaarour%20Resume.pdf")
  return (
    <div className="resume">
        <object data={embedURL} type="application/pdf" width="100%" height="800px">
          <embed src={embedURL} width="100%" height="800px"/> 
        </object>
    </div>
  )
}

export default Resume