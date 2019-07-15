import React, {useEffect, useState} from "react";
import axios from "axios";

import InnerNav from "./InnerNav";
import ApplicantList from "./ApplicantList"
import ApplicantDetail from "./ApplicantDetail"

const ApplicationsViewContainer = ({...props}) => {


  // const filter = props.match.params["projectfilter"]
  // const [user, setUser] = useState("");
  const [applicants, setApplicants] = useState([])
  const [selectedApplicant, setApplicant] = useState("")

  const handleApplicantDetail = applicant => {
    setApplicant(applicant);
  };


  // const getUser = async () => {
  //   // get current user id
  //   const url = "http://localhost:8000/rest-auth/user/";
  //   const token = localStorage.getItem("token");

  //   let resp = await fetch(url, {
  //     headers: {
  //       authorization: "Token " + token
  //     }
  //   });
  //   let data = await resp.json();

  //   // get user data from api
  //   let apiUrl = `http://localhost:8000/api/profile/${data.pk}/`

  //   axios.get(apiUrl).then(response => {
  //     setUser(response.data)
  //     console.log(user)
  //   })
  // };
  

  const getApplicants = async filter_criteria => {
    // const base_url=`http://localhost:8000/api/application/`
    // let resp;
    // let data;

    // if (!filter) {
    //   console.log("running with all filter")
    //   resp = await fetch(base_url);
    //   data = await resp.json();
    //   console.log(data)
    //   setApplicants(data);
    //   setApplicant(data[0])
    // } else {
    //   console.log("running with project id filter")
    //   resp = await fetch(base_url + `?project__id=${filter}`);
    //   data = await resp.json();
    // }

    let base_url = "http://localhost:8000/api/application/";

    if (filter_criteria === "all") {
      let allResponse = await fetch(base_url);
      let allData = await allResponse.json();
      setApplicants(allData.reverse());
      setApplicant(allData[0]);
    } else {
      let ownResponse = await fetch(base_url);
      let ownData = await ownResponse.json();
      setApplicant(ownData);
      setApplicants(ownData[0]);
    }
  };

  useEffect(() => {
    // getUser();
    console.log(props)
    getApplicants("all");

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
