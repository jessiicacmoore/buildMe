import React, { useState } from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ProjectViewContainer from "./Components/ProjectViewContainer";
import Landing from "./Components/Landing";
// import { useState } from "../../../../../Library/Caches/typescript/3.5/node_modules/@types/react";

const BaseRouter = ({ ...props }) => {
  return (
    <Hoc>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/projects" component={ProjectViewContainer} />
      <Route exact path="/" component={Landing} />;
    </Hoc>
  );
};

export default BaseRouter;
