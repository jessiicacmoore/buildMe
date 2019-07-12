import React, { useEffect, useState } from "react";
import "./styles/project-list-item.scss";

const ProjectListItem = ({ project }) => {
  const [proJectOwner, setProjectOwner] = useState("");

  useEffect(() => {
    getOwner();
    console.log(proJectOwner);
  }, []);

  const getOwner = async filter_criteria => {
    const base_url = `http://localhost:8000/api/profile/${project.owner}/`;
    // const url = base_url + filter_criteria;
    const response = await fetch(base_url);
    const data = await response.json();
    setProjectOwner(data);
  };

  const truncateDescription = str => {
    const maxLength = 100;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  return (
    <li className="project-list-item">
      <div className="img-container">
        <img src={proJectOwner.profile_picture} />
      </div>
      <article className="content-container">
        <h2>{project.title}</h2>
        <h3>{proJectOwner.username}</h3>
        <p className="project-description">
          {truncateDescription(project.description)}
        </p>
        <div className="date">
        {project.creation_date}
        </div>
      </article>
    </li>
  );
};

export default ProjectListItem;
