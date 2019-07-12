import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Components/Landing";
import ProjectViewContainer from "./Components/ProjectViewContainer"
import ProjectForm from "./Components/ProjectForm"

const BaseRouter = () => (

  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/project" component={ProjectViewContainer} />
    <Route path="/project-form" component={ProjectForm} />
    <Route exact path="/" component={Landing} />;
  </Hoc>
  
);

export default BaseRouter;