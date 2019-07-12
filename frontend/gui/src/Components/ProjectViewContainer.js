import React, { useState } from "react";
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

import "./styles/project-view-container.scss"

const ProjectContainer = ({}) => {
  const [selectedProject, setProject] = useState("")
  const [selectedProjectOwner, setProjectOwner] = useState("")

  
  const handleProjectDetail = (project, owner) => {
    setProject(project)
    setProjectOwner(owner)
    console.log("handline detail click")
  }

  return (
  <div className="wrapper project-container">
    <ProjectList handleProjectDetail={handleProjectDetail}/>
    <ProjectDetail project={selectedProject} owner={selectedProjectOwner} />
  </div>
  );
};

export default ProjectContainer;