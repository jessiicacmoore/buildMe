import React, { useState } from "react";
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

import "./styles/project-view-container.scss"

const ProjectContainer = ({}) => {
  const [allProjects, setAllProjects] = useState([]);

  const [selectedProject, setProject] = useState("")
  const [selectedProjectOwner, setProjectOwner] = useState("")

  
  const handleProjectDetail = (project, owner) => {
    setProject(project)
    setProjectOwner(owner)
    console.log("handline detail click")
  }

  const handleFilterClick =  filter => {
    
  }

  return (
  <div className="wrapper project-container">
    <div className="project-list">
      <div className="filters">
        <h2>All Projects</h2>
        <h2>My Projects</h2>
      </div>
      <ProjectList handleProjectDetail={handleProjectDetail}/>
    </div>
    <ProjectDetail project={selectedProject} owner={selectedProjectOwner} />
  </div>
  );
};

export default ProjectContainer;