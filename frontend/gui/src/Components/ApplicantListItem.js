import React, {useEffect, useState} from "react";
import "./styles/project-list-item.scss";

const ApplicationListItem = ({ applicant, application }) => {


  const truncateDescription = str => {
    const maxLength = 100;
    if (!str) {
      return ""
    }

    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };


  return (
    <li
      className="project-list-item"
    >
      <div className="img-container">
        <img src={applicant.profile_picture} alt={applicant.username}/>
      </div>
      <article className="content-container">
        {/* <h2>{application.project.title}</h2> */}
        <h3>{applicant.username} - {applicant.profile}</h3>
        <p className="project-description">
          {truncateDescription(application.project.description)}
        </p>
      </article>
    </li>
  );
};

export default ApplicationListItem;
