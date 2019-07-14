import React, { useEffect, useState } from "react";
import "./styles/project-detail.scss";

const ProjectDetail = ({ project }) => {
  const [projectOwner, setProjectOwner] = useState("");

  const getOwner = async () => {
    const base_url = `http://localhost:8000/api/profile/${project.owner}/`;
    const response = await fetch(base_url);
    const data = await response.json();
    setProjectOwner(data);
  };

  useEffect(() => {
    getOwner();
    console.log(projectOwner);
  }, [project]);

  if (project.owner) {
    const splitParagraphs = project.description
      .split("\n")
      .map(paragraph => <p>{paragraph}</p>);

    return (
      <article className="project-detail">
        <div className="detail-header">
          <h1 className="project-title">{project.title}</h1>
          <div className="owner-details">
            <img
              src={projectOwner.profile_picture}
              alt="{projectOwner.username}"
            />
            <h2>{projectOwner.username}</h2>
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
