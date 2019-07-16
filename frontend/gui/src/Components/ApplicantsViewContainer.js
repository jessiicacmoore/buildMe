import React, {useEffect, useState} from "react";

import InnerNav from "./InnerNav";
import ApplicantList from "./ApplicantList"
import ApplicantDetail from "./ApplicantDetail"

const ApplicationsViewContainer = (props) => {


  const [user, setUser] = useState("");
  const [applicants, setApplicants] = useState([])
  const [selectedApplicant, setApplicant] = useState("")

  const handleApplicantDetail = applicant => {
    setApplicant(applicant);
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
    let apiUrl = `http://localhost:8000/api/profile/${data.pk}/`
    let apiResp = await fetch(apiUrl)
    let apiData = await apiResp.json();
    // console.log("DATA:")
    // console.log(apiData)
    // console.log(props.foo)
    setUser(apiData);
  };
  

  const getApplicants = async filter_criteria => {

    getUser();

    let base_url = "http://localhost:8000/api/application/";

    if (filter_criteria === "all") {
      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();
      let filteredData = allData.filter(obj => obj.project.owner.id === user.id)
      // console.log(user)
      // console.log(filteredData)
      // console.log(allData);
      setApplicants(filteredData.reverse());
      setApplicant(allData[0]);
    } else {
      let ownResponse = await fetch(base_url + `?applicant__id=${user.id}`);
      let ownData = await ownResponse.json();
      setApplicants(ownData);
      setApplicant(ownData[0]);
    }
  };

  useEffect(() => {
    // getUser();
    getApplicants("all");
    // console.log("Props", props)
    // console.log("Props user", props.user)
  }, [])

  return (
    <React.Fragment>
      <InnerNav />
      <main className="wrapper project-container">
        <div className="project-list">
          <div className="filters">
            <h2 onClick={() => getApplicants("all")}> Applicants </h2>
            <h2 onClick={() => getApplicants("owned")}> My Applications </h2>
          </div>
          <ApplicantList
            applicants={applicants}
            handleApplicantDetail={handleApplicantDetail}
          />
        </div>
        <ApplicantDetail applicant={selectedApplicant} />
      </main>
    </React.Fragment>
  );
};

export default ApplicationsViewContainer;
