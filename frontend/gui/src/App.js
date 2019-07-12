import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
// import Landing from "./Components/Landing";

const App = props => {

  useEffect(() => {
    props.onTryAutoSignup();
  });

  return (
    <Router>
    
    <BaseRouter {...props}/>
  
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/projects" exact component={ProjectViewContainer}/>
        </Switch>
      </div>
    </Router>
  )
};

export default App;


