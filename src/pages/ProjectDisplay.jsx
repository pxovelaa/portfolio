import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1>{project.name} </h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills: </b> {project.skills}
      </p>
      <div className="projectDisplay-buttons">
        <a target="_blank" href={project.link}>
          <GitHubIcon />
        </a>
        <a target='_blank' href={project.website} className="web-button" > Visit Website</a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
