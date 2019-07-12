import React, {useEffect} from "react";
import "./styles/project-detail.scss"

const ProjectDetail = ({project, owner}) => {



  if (project.owner) {
    const splitParagraphs = project.description.split("\n").map((paragraph) => <p>{paragraph}</p>)

    return (
      <article className="project-detail">
        <div className="detail-header">
          <h1 className="project-title">{project.title}</h1>
          <div className="owner-details">
            <img src={owner.profile_picture} alt="{owner.username}"/>
            <h2>{owner.username}</h2>
          </div>
        </div>

        <h3>Description</h3>
        {splitParagraphs}

        <a href="/" className="btn btn-full">Apply</a>
      </article>
    )
  } else {
    return (
      <h1>hello</h1>
    )
  }
};

export default ProjectDetail;
