import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";
import "./styles/project-view-container.scss";

const ProjectContainer = ({}) => {
  const [selectedProject, setProject] = useState("");
  const [selectedProjectOwner, setProjectOwner] = useState("");
  const [filter, setFilter] = useState("all")

  const handleProjectDetail = (project) => {
    setProject(project);
    console.log("handling detail click");
  };

  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    getAllProjects("all");
  }, []);

  const getAllProjects = async filter_criteria => {
    let base_url = "http://localhost:8000/api/project/";

    if (filter_criteria === "all") {
      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();
      setAllProjects(allData.reverse());
      setProject(allData[0]);
    } else {
      let ownResponse = await fetch(base_url + "?owner__id=2");
      let ownData = await ownResponse.json();
      setAllProjects(ownData.reverse());
      setProject(ownData[0]);
  }
    }


 

  return (
    <div className="wrapper project-container">
      <div className="project-list">
        <div className="filters">
          <h2 onClick={() => getAllProjects("all")}>All Projects</h2>
          <h2 onClick={() => getAllProjects("owned")}>My Projects</h2>
        </div>
        <ProjectList
          allProjects={allProjects}
          handleProjectDetail={handleProjectDetail}
        />
      </div>
      <ProjectDetail project={selectedProject}/>
    </div>
  );
};

export default ProjectContainer;
