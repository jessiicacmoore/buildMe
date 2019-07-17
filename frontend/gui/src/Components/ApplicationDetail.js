import React, {useState} from "react";
import "./styles/project-detail.scss";
import axios from "axios";

const ApplicationDetail = ({ application, user, setSelectedApplication }) => {

  if (application) {
    let applicant = application.applicant
    let project = application.project

    const handleAcceptClick = async () => { 
      const url = `http://localhost:8000/api/application/${application.id}/`
      const data = {
        "cover_letter": application.cover_letter,
        "is_hired": true 
      }

      let resp = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(resp => {
        console.log(resp)
      })
    }

    const handleAssembleTeamClick = async () => { 
      const url = `http://localhost:8000/api/project/${project.id}/`
      const data = {
        "title": project.title,
        "description": project.description,
        "applications": project.applications,
        "team_assembled": true
      }

      let resp = await fetch(url, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(resp => return resp)
    }

    const returnApplicableButton = () => {
      if (application.is_hired) {
        return (
        <a href="#" className="btn btn-full" onClick={() => handleAssembleTeamClick()}>
            Team Member Added - Assemble Workspace?
        </a>
        )
      } else if (user.id !== applicant.id) {
        return (
          <a href="#" className="btn btn-full" onClick={() => handleAcceptClick()}>
            Accept?
          </a>
        )
      } else {return ""}
    }

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

        { returnApplicableButton() } 
      </article>
    );
  } else {
    return <h1>Select Which applications you want to display</h1>;
  }
};

export default ApplicationDetail;
