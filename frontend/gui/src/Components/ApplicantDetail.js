import React from "react";
import "./styles/project-detail.scss";

const ProjectDetail = ({ applicant }) => {



  if (applicant) {
    const splitParagraphs = applicant.applicant.description
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

        <h3>Description</h3>
        {splitParagraphs}

        <a href="/" className="btn btn-full">
          Accept?
        </a>
      </article>
    );
  } else {
    return <h1>No applications to display</h1>;
  }
};

export default ProjectDetail;
