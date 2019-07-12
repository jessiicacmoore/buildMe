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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// <CustomLayout {...props}>
// <BaseRouter />
// </CustomLayout>

// <HomepageLayout {...props}>
// <BaseRouter />
// </HomepageLayout>

// class App extends Component {
//   componentDidMount() {
//     this.props.onTryAutoSignup();
//   }

//   render() {
//     return (
//       <Router>
//         <CustomLayout {...this.props}>
//           <BaseRouter />
//         </CustomLayout>
//       </Router>
//     );
//   }
// }



// import React from 'react';
// import ProjectList from './Components/ProjectList';
// import { connect } from 'react-redux';
// import * as actions from './store/actions/auth';
// import ProjectForm from './Components/ProjectForm';
// import Landing from './Components/Landing';

// const App = () => {



//   return (
//     <div>
//       <Landing />
//     </div>
//   )
// };

// export default App;
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


  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }


// export default connect(mapStateToProps, mapDispatchToProps)(App);


// import 'antd/dist/antd.css';

  // useEffect(() => {
  //   axios
  //   .get('http://127.0.0.1:8000/api/projects')
  //   .then(response => {
  //     console.log(response.data);
  //     setProjects(response.data)
  //   })
  // }, [])
