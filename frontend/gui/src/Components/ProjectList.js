import React, { useEffect, useState } from "react";
import ProjectListItem from "./ProjectListItem";

import "./styles/project-list.scss";

const ProjectList = ({handleProjectDetail}) => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async filter_criteria => {
    const base_url = "http://localhost:8000/api/project/";
    // const url = base_url + filter_criteria;
    const response = await fetch(base_url);
    const data = await response.json();
    setAllProjects(data);
  };

  const projectRows = allProjects.map((project, i) => {
    return <ProjectListItem key={project.id} project={project} handleProjectDetail={handleProjectDetail}/>;
  });

  return <ul className="project-list">{projectRows}</ul>;
};

export default ProjectList;
