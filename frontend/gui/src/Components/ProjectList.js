import React, { useEffect, useState } from "react";
import ProjectListItem from "./ProjectListItem";

import "./styles/project-list.scss";

const ProjectList = ({allProjects, handleProjectDetail }) => {
  
  const projectRows = allProjects.map((project, i) => {
    return <ProjectListItem key={project.id} project={project} handleProjectDetail={handleProjectDetail}/>;
  });

  return <ul className="project-list">{projectRows}</ul>;
};

export default ProjectList;
