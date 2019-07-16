import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
import * as actions from "./store/actions/auth";
import "semantic-ui-css/semantic.min.css";
// import Landing from "./Components/Landing";

const App = props => {
  // console.log(props)

  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  return (
    <Router>
    
    <BaseRouter {...props}/>
    <footer className="root--body">
      &copy; Created by <a href="https://www.jessicacmoore.com/">Jessica Moore</a>, <a href="https://timkurbanov.ca/">Timur Kurbanov</a>, <a href="https://alexyang.ca/">Alexander Yang</a>
    </footer>
  
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);