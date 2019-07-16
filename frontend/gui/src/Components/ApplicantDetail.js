import React, {useEffect, useState} from "react";
import "./styles/project-detail.scss";

const ApplicationDetail = ({ application, user }) => {
  console.log("Application Detail", application, user )
  
  if (application.applicant.id) {
    const splitParagraphs = application.cover_letter
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);

    const splitDesc = application.applicant.description
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);

    return (
      <article className="project-detail">
        <div className="detail-header">
          <h1 className="project-title">{application.applicant.username}</h1>
          <div className="owner-details">
            <img
              src={application.applicant.profile_picture}
              alt="{project.owner.username}"
            />
            <h2>{application.applicant.profile}</h2>
          </div>
        </div>

        <div className="row">
          <h3>Application Message</h3>
          {splitParagraphs}
        </div>
        <div className="row">
          <h3>About Applicant</h3>
          {splitDesc}
        </div>

        {application.applicant.id === user.id ? 
          ""
         :
          <a href="/" className="btn btn-full">
            Accept?
          </a>
        } 
      </article>
    );
  } else {
    return <h1>No applications to display</h1>;
  }
};

export default ApplicationDetail;
