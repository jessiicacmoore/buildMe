import React from "react";
import "./styles/project-list-item.scss";

const ProjectListItem = ({project}) => {

  // temp user until we can make api calls
  const owner = {
    "username": "tammy.warren68",
    "profile_picture": "https://randomuser.me/api/portraits/women/73.jpg"
  }

  const truncateDescription = (str) => {
    const maxLength = 100;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }

  return (
    <li className="project-list-item">
      <div className="img-container">
        <img src={owner.profile_picture}/> 
      </div>
      <article className="content-container">
        <h2>{project.title}</h2>
        <h3>{owner.username}</h3>
        <p className="project-description">
          {truncateDescription(project.description)}
        </p>
          <div className="date">
            {project.date}
          </div>
      </article> 
  </li>

  );
};


export default ProjectListItem;