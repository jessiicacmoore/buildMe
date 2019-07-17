import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProjectViewContainer from "./Components/ProjectViewContainer";
import Landing from "./Components/Landing";
// import ProjectViewContainer from "./Components/ProjectViewContainer"
import ProjectForm from "./Components/ProjectForm"
import RecaptchaForm from "./Components/RecaptchaForm"
import About from "./Components/About"
import ApplicationForm from "./Components/ApplicationForm"
import Donut from "./Components/Donut"

const BaseRouter = () => (

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

export default BaseRouter;