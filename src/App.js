import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignInCanvas from './components/register/';

function App() {
  return (
    <>
    <Link to="/signup">Sign Up Here</Link>
      <SignInCanvas />

      <p>lets get a dart</p>
    </>
  );
}

export default App;
