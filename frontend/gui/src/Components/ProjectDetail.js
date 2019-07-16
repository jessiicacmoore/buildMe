import React from "react";
import "./styles/project-detail.scss";

const ProjectDetail = ({ project }) => {
  console.log("project detail", project)

  if (project.owner) {
    const splitParagraphs = project.description
      .split("\n")
      .map(paragraph => {
        return <p>{paragraph}</p>
      })

    return (
      <article className="project-detail">
        <div className="detail-header">
          <h1 className="project-title">{project.title}</h1>
          <div className="owner-details">
            <img
              src={project.owner.profile_picture}
              alt="{project.owner.username}"
            />
            <h2>{project.owner.username}</h2>
          </div>
        </div>

        <h3>Description</h3>
        {splitParagraphs}

        <a href="/" className="btn btn-full">
          Apply
        </a>
      </article>
    );
  } else {
    return <h1>hello</h1>;
  }
};

export default ProjectDetail;
