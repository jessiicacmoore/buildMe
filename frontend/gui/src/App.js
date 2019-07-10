import React, {useState, useEffect} from "react";
import hero from "./hero.jpg";
import axios from "axios";

import './styles/app.scss'

const App = () => {

  const[projects, setProjects] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get('http://127.0.0.1:8000/api/projects')
  //   .then(response => {
  //     console.log(response.data);
  //     setProjects(response.data)
  //   })
  // }, [])

  
  return (
    <header className="app splash-page-header wrapper">
      <nav className="splash-page-nav">
        <h1 className="logo">build<span>Me</span></h1>
        <ul className="nav-links">
          <li className="nav-item">About</li>
          <li className="nav-item">Sign In</li>
          <li className="nav-item">Sign Up</li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="text-container">
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <a href="" className="btn btn-full">Sign Up</a>
          <a href="" className="btn btn-ghost">Projects</a>
        </div>
        <img src={hero} alt="buildMe"/>
      </div>
    </header>
  );
};

export default App;
