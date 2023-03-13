import React from 'react'
import { useNavigate } from "react-router-dom";

function ProjectItem({image, name, id, short}) {

    const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
        window.scrollTo(0,0);
      }}
    >
        <div style={{backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name}</h1>
        <p>{short}</p>
    </div>
  )
}

export default ProjectItem