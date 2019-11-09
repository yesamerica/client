import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignInCanvas from './components/register/';

function App() {
  return (
    <>
    <Link to="/signup">Sign Up Here</Link>
      <SignInCanvas />

      <p>yup</p>
    </>
  );
}

export default App;
