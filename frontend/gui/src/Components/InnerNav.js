import React from "react";
import { Link } from "react-router-dom";
import "./styles/inner-nav.scss";




const InnerNav = () => {

  return (
    <nav className="inner-nav">
      <div className="wrapper">
        <Link to="/">
          <h1 className="logo">
              build<span>Me</span>
          </h1>
        </Link>
        <ul className="nav-links">
          <Link to="/projects">
            <li className="nav-item">Projects</li>
          </Link>
          <Link to="/applicants">
            <li className="nav-item">Applicants</li>
          </Link>
          <Link to="/applicants">
            <li className="nav-item">Workspaces</li>
          </Link>
          <Link to="/project-form">
            <li className="nav-item highlight">Add Project</li>
          </Link>
        </ul>
      </div>
    </nav>
  );

}

export default InnerNav;