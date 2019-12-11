import React, {useState} from 'react';
import SignInCanvas from './components/register/';
import './globals.scss'
import Loading from './components/loading/';
import {Route} from 'react-router-dom'
import LocalSignUpForm from "./components/register/LocalSignUpForm";
function App() {
  const [loading,setLoading] = useState(false)

  setTimeout(() => {
    //loading && setLoading(false)
  }, 5000);

  return loading ? <Loading /> :(
    <>
      <Route exact path="/" component={SignInCanvas} />
      <Route exact path="/signin" component={LocalSignUpForm} />
    </>
  );
}

export default App;
