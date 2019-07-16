import React from "react";
import ProjectListItem from "./ProjectListItem";


import "./styles/project-list.scss";

const ProjectList = ({allProjects, handleProjectDetail, user }) => {
  
  const projectRows = allProjects.map((project, i) => {
    return <ProjectListItem key={project.id} project={project} handleProjectDetail={handleProjectDetail} user={user}/>;
  });

  return <ul className="project-list">{projectRows}</ul>;
};

export default ProjectList;
