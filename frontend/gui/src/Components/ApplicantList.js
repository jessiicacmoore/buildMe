import React from "react";
import AppllicantListItem from "./ApplicantListItem";

import "./styles/project-list.scss";

const ProjectList = ({ applicants, handleApplicantDetail }) => {
  
  const applicationRows = applicants.map((applicant, i) => {
    return <AppllicantListItem key={applicant.id} applicant={applicant} handleApplicantDetail={handleApplicantDetail}/>;
  });

  return <ul className="project-list">{applicationRows}</ul>;
};

export default ProjectList;
