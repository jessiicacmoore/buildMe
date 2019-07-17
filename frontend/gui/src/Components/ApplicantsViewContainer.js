import React, { useEffect, useState } from "react";

import InnerNav from "./InnerNav";
import ApplicationDetail from "./ApplicationDetail";

import "./styles/project-view-container.scss";
import "./styles/project-list.scss";
import "./styles/project-list-item.scss";


const ApplicationsViewContainer = () => {
  const [user, setUser] = useState("user");
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState("");

  const handleApplicationDetail = application => {
    setSelectedApplication(application);
  };

  const getUser = async () => {
    // get current user id
    const url = "http://localhost:8000/rest-auth/user/";
    const token = localStorage.getItem("token");

    let resp = await fetch(url, {
      headers: {
        authorization: "Token " + token
      }
    });
    let data = await resp.json();

    // get user data from api
    let apiUrl = `http://localhost:8000/api/profile/${data.pk}/`;
    let apiResp = await fetch(apiUrl);
    let apiData = await apiResp.json();
    setUser(apiData)
  };

  const getApplications = async (filter_criteria) => {
    getUser();

    let base_url = "http://localhost:8000/api/application/";

    if (filter_criteria === "all") {
      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();
      let filteredData = allData.filter(obj => obj.project.owner.id === user.id)
      setApplications(filteredData.reverse());
      setSelectedApplication(filteredData[0]);
    } else {
      let ownResponse = await fetch(base_url + `?applicant__id=${user.id}`);
      let ownData = await ownResponse.json();
      setApplications(ownData);
      setSelectedApplication(ownData[0]);
    }
  };

  const truncateDescription = str => {
    const maxLength = 100;
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    getApplications("all");
  }, []);

  return (
    <React.Fragment>
      <InnerNav />
      <main className="wrapper project-container">
        <div className="project-list">
          <div className="filters">
            <h2 onClick={() => getApplications("all")}>Applicants</h2>
            <h2 onClick={() => getApplications("owned")}>My Applications</h2>
          </div>
          <ul className="project-list">
            {applications.map((application, i) => {
              let applicant = application.applicant;
              let project = application.project;

              return (
                <li className="project-list-item" onClick={() => handleApplicationDetail(application)}>
                  <div className="img-container">
                    <img
                      src={applicant.profile_picture}
                      alt={applicant.username}
                    />
                  </div>
                  <article className="content-container">
                    <h2>{project.title}</h2>
                    <h3>
                      {applicant.username} - {applicant.profile}
                    </h3>
                    <p className="project-description">
                      {truncateDescription(applicant.description)}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
        <ApplicationDetail application={selectedApplication} user={user} setSelectedApplication={setSelectedApplication}/>
      </main>
    </React.Fragment>
  );
};

export default ApplicationsViewContainer;
