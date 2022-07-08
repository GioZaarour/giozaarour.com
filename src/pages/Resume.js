import React, {useState} from 'react'
import "../styles/Resume.css";

function Resume() {
    const [embedURL]=useState("https://giozaarour.github.io/resume/Giovanni%20Zaarour%20Resume.pdf")
  return (
    <div className="resume">
        <object data={embedURL} type="application/pdf" width="100%" height="600px"> 
            <p>It appears you don't have a PDF plugin for this browser.
            No biggie... you can <a href={embedURL}>click here to
            view the PDF file.</a></p>  
        </object>
    </div>
  )
}

export default Resume