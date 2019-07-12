import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProjectViewContainer from "./Components/ProjectViewContainer";
import Landing from "./Components/Landing";

// import 'antd/dist/antd.css';

  // useEffect(() => {
  //   axios
  //   .get('http://127.0.0.1:8000/api/projects')
  //   .then(response => {
  //     console.log(response.data);
  //     setProjects(response.data)
  //   })
  // }, [])

const App = () => {

  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }

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


