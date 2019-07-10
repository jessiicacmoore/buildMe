import React from 'react';
import Landing from './Components/Landing';
import SignInForm from './Components/SignInForm';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <Landing />
      <SignInForm />
    </div>
  )
};

export default App;