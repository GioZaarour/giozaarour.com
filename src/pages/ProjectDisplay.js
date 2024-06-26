import React from 'react';
import {useParams} from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project"> 
        <h1>{project.name}</h1> 
        <a href={project.github} target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <p>{project.description}</p>
        <div className="note">{project.note}</div>
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <img src={project.image} alt="ProjectImage" />
    </div>
  )
}

export default ProjectDisplay