import React from "react";
import "./styles/project-detail.scss";

const ProjectDetail = ({ applicant, user }) => {



  if (applicant) {
    const splitParagraphs = applicant.cover_letter
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);
    const splitDesc = applicant.applicant.description
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);

    return (
      <article className="project-detail">
        <div className="detail-header">
          <h1 className="project-title">{applicant.applicant.username}</h1>
          <div className="owner-details">
            <img
              src={applicant.applicant.profile_picture}
              alt="{project.owner.username}"
            />
            <h2>{applicant.applicant.profile}</h2>
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

        {applicant.applicant.id === user.id ? 
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

export default ProjectDetail;
