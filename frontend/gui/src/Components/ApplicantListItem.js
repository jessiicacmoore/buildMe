import React from "react";
import "./styles/project-list-item.scss";

const ApplicantListItem = ({ applicant, handleApplicantDetail }) => {

  const truncateDescription = str => {
    const maxLength = 100;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  console.log(applicant)

  return (
    <li
      className="project-list-item"
      onClick={() => handleApplicantDetail(applicant)}
    >
      <div className="img-container">
        <img src={applicant.applicant.profile_picture} />
      </div>
      <article className="content-container">
        <h2>{applicant.project.title}</h2>
        <h3>{applicant.applicant.username} - {applicant.applicant.profile}</h3>
        <p className="project-description">
          {truncateDescription(applicant.applicant.description)}
        </p>
      </article>
    </li>
  );
};

export default ApplicantListItem;
