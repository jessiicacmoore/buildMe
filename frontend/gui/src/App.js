import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

const App = () => {

  const[projects, setProjects] = useState([]);

  useEffect(() => {
    axios
    .get('http://127.0.0.1:8000/api/projects')
    .then(response => {
      console.log(response.data);
      setProjects(response.data)
    })
  }, [])

  
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={() => console.log('hello')}>hello</button>
      <button onClick={() => console.log(projects)}>!!!</button>
    </div>
  );
};

export default App;
