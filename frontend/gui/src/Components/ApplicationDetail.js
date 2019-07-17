import React from "react";
import "./styles/project-detail.scss";

const ApplicationDetail = ({ application, user }) => {
  
  if (application) {
    let applicant = application.applicant

    const splitMessage = application.cover_letter
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);

    const splitDesc = applicant.description
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);

    return (
      <article className="project-detail">
        <div className="detail-header">
          <h1 className="project-title">{applicant.username}</h1>
          <div className="owner-details">
            <img
              src={applicant.profile_picture}
              alt="{project.owner.username}"
            />
            <h2>{applicant.profile}</h2>
          </div>
        </div>

        <div className="row">
          <h3>Application Message</h3>
          {splitMessage}
        </div>
        <div className="row">
          <h3>About Applicant</h3>
          {splitDesc}
        </div>

        {applicant.id === user.id ? 
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
