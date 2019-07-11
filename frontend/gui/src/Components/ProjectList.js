import React from "react";
import ProjectListItem from "./ProjectListItem";
import axios from "axios"

import "./styles/project-list.scss";

const ProjectList = () => {
  // temporary project until we have cors figured out
  const url = "http://localhost:8000/api/project/"
  const allProjects = axios.get(url).then(response => {
    console.log(response.data)
  });

  return (
    <div className="project-listing-container">
      <ul className="project-list">
        
      </ul>
    </div>
  );
};


export default ProjectList;