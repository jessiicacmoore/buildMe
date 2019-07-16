import React, {useEffect, useState } from "react";
import "./styles/project-list-item.scss";


const ProjectListItem = ({ project, handleProjectDetail, user }) => {

  const [owner, setOwner] = useState("");

  const truncateDescription = str => {
    const maxLength = 100;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  const getOwner = async () => {
    const url = `http://localhost:8000/api/profile/${project.owner}/`;
    let resp = await fetch(url);
    let data = await resp.json();
    setOwner(data);
  };

  useEffect(() => {
    getOwner();
  }, [])


  return (
    <li
      className="project-list-item"
      onClick={() => handleProjectDetail(project)}
    >
      <div className="img-container">
        <img src={owner.profile_picture} />
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
  );
};

export default ProjectListItem;
