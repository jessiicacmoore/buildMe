import React from 'react';
import Landing from './Components/Landing';
import SignInForm from './Components/SignInForm';
import ProjectForm from "./Components/ProjectForm";


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
  return (
    <div>
    <Landing />
    <h1>POST</h1>
    <ProjectForm 
      requestType="post"
      projectID="1"
    />
    <h1>PUT</h1>
    <ProjectForm 
      requestType="put"
      projectID="1"
    />
    </div>
  )
};

export default App;