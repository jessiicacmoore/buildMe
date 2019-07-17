import React, { useEffect, useState } from "react";

import InnerNav from "./InnerNav";
import ProjectDetail from "./ProjectDetail";

import "./styles/project-view-container.scss";
import "./styles/project-list.scss"
import "./styles/project-list-item.scss"

const ProjectContainer = () => {
  const [user, setUser] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");

  const handleProjectDetail = project => {
    setSelectedProject(project);
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
    let apiUrl = `http://localhost:8000/api/profile/${data.pk}/`;
    let apiResp = await fetch(apiUrl);
    let apiData = await apiResp.json();

    setUser(apiData);
  };


  const getProjects = async (filter_criteria, user) => {
    getUser();
    
    let base_url = "http://localhost:8000/api/project/";

    if (filter_criteria === "all") {
      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();
      setProjects(allData.reverse());
      setSelectedProject(allData[0]);
    } else {
      let ownResponse = await fetch(base_url + `?owner__id=${user.id}`);
      let ownData = await ownResponse.json();
      console.log("OWN DATA:")
      console.log(user)
      setProjects(ownData);
      setSelectedProject(ownData[0]);
    }
  };

  const truncateDescription = str => {
    const maxLength = 100;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    getProjects("all",);
  }, []);

  return (
    <React.Fragment>
      <InnerNav />
      <main className="wrapper project-container">
        
        <div className="project-list">
          <div className="filters">
            <h2 onClick={() => getProjects("all")}> All Projects </h2>
            <h2 onClick={() => getProjects("owned")}> My Projects </h2>
          </div>
          <ul className="project-list">
            {
              projects.map((project, i) => {
                let owner = project.owner
                return (
                  <li className="project-list-item" onClick={() => handleProjectDetail(project)}>
                    <div className="img-container">
                      <img src={owner.profile_picture} alt={owner.username}/>
                    </div>
                    <article className="content-container">
                      <h2>{project.title}</h2>
                      <h3>{owner.username}</h3>
                      <p className="project-description">
                        {truncateDescription(project.description)}
                      </p>
                      <div className="date">{project.creation_date}</div>
                    </article>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <ProjectDetail project={selectedProject} user={user}/>
      </main>
    </React.Fragment>
  );
};

export default ProjectContainer;
