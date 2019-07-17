import React, {useState} from "react";
import "./styles/project-detail.scss";
import axios from "axios";

const ApplicationDetail = ({ application, user }) => {

  if (application) {
    let applicant = application.applicant

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
      }).then(resp => console.log(resp))
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

        {applicant.id === user.id ? 
          ""
         :
          <button href="/" className="btn btn-full" onClick={() => handleAcceptClick()}>
            Accept?
          </button>
        } 
      </article>
    );
  } else {
    return <h1>Select Which applications you want to display</h1>;
  }
};

export default ApplicationDetail;
