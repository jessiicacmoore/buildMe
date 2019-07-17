import React from "react";
import "./styles/project-detail.scss";
import { Link } from "react-router-dom";


const ProjectDetail = ({ project, user }) => {

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

        {project.owner.id === user.id ? 
          <Link to="/applicants">
          <a href="/applicants" className="btn btn-full">
            See Applicants
          </a>
          </Link>

         :
          <a href="/" className="btn btn-full">
            Apply
          </a>
        }
      </article>
    );
  } else {
    return <h1>No Projects To Show</h1>;
  }
};

export default ProjectDetail;
