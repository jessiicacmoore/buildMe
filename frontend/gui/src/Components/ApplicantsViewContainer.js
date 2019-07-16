import React, {useEffect, useState} from "react";

import InnerNav from "./InnerNav";
// import ApplicantListItem from "./ApplicantListItem"
import ApplicantDetail from "./ApplicantDetail"

const ApplicationsViewContainer = ({ user  }) => {


  const [applications, setApplications] = useState([])
  const [selectedApplication, setSelectedApplication] = useState("")

  const handleApplicationDetail = application => {
    setSelectedApplication(application);
  };


  const getApplications = async(filter_criteria, user) => {
    // getUser();
    console.log("getApplicants: User", user)

    let base_url = "http://localhost:8000/api/application/";

    if (filter_criteria === "all") {

      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();

      // Need to find way to filter applicants now that i dont have access to nested relationships
      setApplications(allData.reverse())
      setSelectedApplication(allData[0])


    } else {
      let ownResponse = await fetch(base_url + `?applicant__id=${user.id}`);
      let ownData = await ownResponse.json();

      setApplications(ownData);
      setSelectedApplication(ownData[0]);
    }
  };

  useEffect(() => {
    getApplications("all", user);
  }, [])


  const truncateDescription = str => {
    const maxLength = 100;
    if (!str) {
      return ""
    }

    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };



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
            {
              applications.map((application, i) => {
                let applicant = application.applicant;
                let project = application.project
                return (
                  <li key={application.id}
                    className="project-list-item"
                  >
                    <div className="img-container">
                      <img src={applicant.profile_picture} alt={applicant.username}/>
                    </div>
                    <article className="content-container">
                      {/* <h2>{application.project.title}</h2> */}
                      <h3>{applicant.username} - {applicant.profile}</h3>
                      <p className="project-description">
                        {truncateDescription(project.description)}
                      </p>
                    </article>
                  </li>

                )
              })
            }
          </ul>

        </div>
        {/* <ApplicantDetail application={selectedApplicant} user={user}/> */}
      </main>
    </React.Fragment>
  );
};

export default ApplicationsViewContainer;
