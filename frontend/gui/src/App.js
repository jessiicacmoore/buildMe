import React from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import ProjectViewContainer from "./Components/ProjectViewContainer";

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
    <ProjectViewContainer />
  )
};

// <ProjectForm {...this.props} />

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   }

export default App;



// export default connect(mapStateToProps, mapDispatchToProps)(App);