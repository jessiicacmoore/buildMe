import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";
import "./styles/project-view-container.scss";
import axios from "axios";

const ProjectContainer = () => {
  const [selectedProject, setProject] = useState("");
  const [selectedProjectOwner, setProjectOwner] = useState("");
  const [filter, setFilter] = useState("all");
  const [user, setUser] = useState("");

  const handleProjectDetail = project => {
    setProject(project);
  };

  const getUser = async () => {
    // get current user id
    const url = "http://localhost:8000/rest-auth/user/";
    const token = localStorage.getItem("token");

    let resp = await fetch(url, {
      headers: {
        authorization: "Token " + token
      }
    });
    let data = await resp.json();

    // get user data from api
    let userResp = await fetch(`http://localhost:8000/api/profile/${data.pk}/`);
    let userData = await userResp.json();
    setUser(userData);
  };

  const [allProjects, setAllProjects] = useState([]);

  const getAllProjects = async filter_criteria => {
    let base_url = "http://localhost:8000/api/project/";

    if (filter_criteria === "all") {
      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();
      setAllProjects(allData.reverse());
      setProject(allData[0]);
      setFilter(filter_criteria);
    } else {
      let ownResponse = await fetch(base_url + `?owner__id=2`);
      let ownData = await ownResponse.json();
      setAllProjects(ownData);
      setProject(ownData[0]);
      setFilter(filter_criteria);
    }
  };

  useEffect(() => {
    getAllProjects("all");
    getUser();
    console.log(user);
  }, []);

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
      <ProjectDetail project={selectedProject} />
    </div>
  );
};

export default ProjectContainer;
