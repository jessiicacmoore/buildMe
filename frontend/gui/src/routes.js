import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProjectViewContainer from "./Components/ProjectViewContainer";
import ApplicantsViewContainer from "./Components/ApplicantsViewContainer";
import Landing from "./Components/Landing";
// import ProjectViewContainer from "./Components/ProjectViewContainer"
import ProjectForm from "./Components/ProjectForm"
import RecaptchaForm from "./Components/RecaptchaForm"
import About from "./Components/About"
import ApplicationForm from "./Components/ApplicationForm"
import Donut from "./Components/Donut"

// import { useState } from "../../../../../Library/Caches/typescript/3.5/node_modules/@types/react";

  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/projects" component={ProjectViewContainer} />
    <Route path="/recaptcha" component={RecaptchaForm} />
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/project-form" component={ProjectForm} />
    <Route path="/application-form" component={ApplicationForm} />
    <Route path="/donut" component={Donut} />
  </Hoc>
  
);

const BaseRouter = ({ ...props }) => {

  // const getUser = async () => {
  //   console.log("Getting user from routes")
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
  //   let userResp = await fetch(`http://localhost:8000/api/profile/${data.pk}/`);
  //   let userData = await userResp.json();

  //   // console.log("userData", userData)
  //   // return to variable
  //   return userData
  // };

  // const user = getUser();


  return (
    <Hoc>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/projects/" component={ProjectViewContainer} />
      <Route exact path="/applicants/" component={ApplicantsViewContainer} />
      <Route exact path="/" component={Landing} />
    </Hoc>
  );
};

export default BaseRouter;
