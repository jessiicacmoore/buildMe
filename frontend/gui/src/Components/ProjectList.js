import React, { useEffect, useState } from "react";
import ProjectListItem from "./ProjectListItem";
import axios from "axios";

import "./styles/project-list.scss";

const ProjectList = () => {
  
  const url = "http://localhost:8000/api/project/"
  const [allProjects, setAllProjects] = useState([]);
  // const [displayProjects, setDisplayProjects] = useState([]);

  useEffect(() => {
    getAllProjects()  // const ListItem = ({ item }) => (
      //   <li>
      //     <div>{item.title}</div>
      //   </li>
      // );;
    // setDisplayProjects(allProjects);
  }, [])

  const getAllProjects = async (filter_criteria) => {
    const base_url = "http://localhost:8000/api/project/"
    const url = base + filter_criteria // "?tags=asdf,asdfads,asdfds"

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setAllProjects(data);
  }

  const projectRows = allProjects.map((project, i) => {
    console.log("Looping.....", project)
    return (
      <h1>Eyyyy {project.title}</h1>  
    )
  }); 

  // const ListItem = ({ item }) => (
  //   <li>
  //     <div>{item.title}</div>
  //   </li>
  // );

  return (
    <div className="project-listing-container">
      <ul className="project-list" >
        <h1>Yoso</h1>
        {projectRows}
        {/* {allProjects.map(item => (
            <ListItem key={item.id} item={item} />
        ))} */}
      </ul>
    </div>
  );
};

export default ProjectList;
