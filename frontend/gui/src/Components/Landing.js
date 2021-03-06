// import PropTypes from "prop-types";
import React from "react";
import hero from "./hero.jpg";
import "./styles/landing.scss";
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Responsive,
//   Segment,
//   Sidebar,
//   Visibility
// } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";


const HomepageLayout = props => {
  const { authenticated } = props;

  return (
    <React.Fragment>
      <header className="app splash-page-header wrapper">
        <nav className="splash-page-nav">
          <h1 className="logo">
            build<span>Me</span>
          </h1>
          <ul className="nav-links">
            <Link to="/about">
              <li className="nav-item">About</li>
            </Link>
  
            {authenticated ? (
              <li className="nav-item" onClick={() => props.logout()}>
                Logout
              </li>
            ) : (
              <React.Fragment>
                <Link to="/login">
                  <li className="nav-item">Sign In</li>
                </Link>
  
                <Link to="/signup">
                  <li className="nav-item">Sign Up</li>
                </Link>
              </React.Fragment>
            )}
          </ul>
        </nav>
  
        <div className="hero-section">
          <div className="text-container">
            <h2>Team work to make<br/>the <span>dream</span> work.</h2>
            <h3 className="sub">Work together with fellow junior devs and designers to build portfolio worthy pieces that will get you hired.</h3>
            {authenticated ? (
              <a href="/projects" className="btn btn-full">Projects</a>
            ) : (
              <React.Fragment>
                  <a href="/signup" className="btn btn-full">Sign Up</a>
                  <a href="/login" className="btn btn-ghost">Sign In</a>
              </React.Fragment>
            )}
          </div>
          <img src={hero} alt="buildMe" />
  
          {props.children}
        </div>
      </header>
      
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomepageLayout)
);








// import React, {useState, useEffect} from "react";
// import hero from "./hero.jpg";
// import axios from "axios";

// import './styles/landing.scss'

// const Landing = () => {



  
//   return (
//     <header className="app splash-page-header wrapper">
//       <nav className="splash-page-nav">
//         <h1 className="logo">build<span>Me</span></h1>
//         <ul className="nav-links">
//           <li className="nav-item">About</li>
//           <li className="nav-item">Sign In</li>
//           <li className="nav-item">Sign Up</li>
//         </ul>
//       </nav>
//       <div className="hero-section">
//         <div className="text-container">
//           <h2>Lorem ipsum dolor sit amet consectetur.</h2>
//           <a href="" className="btn btn-full">Sign Up</a>
//           <a href="" className="btn btn-ghost">Projects</a>
//         </div>
//         <img src={hero} alt="buildMe"/>
//       </div>
//     </header>
//   );
// };

// export default Landing;



  // const[projects, setProjects] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get('http://127.0.0.1:8000/api/projects')
  //   .then(response => {
  //     console.log(response.data);
  //     setProjects(response.data)
  //   })
  // }, [])