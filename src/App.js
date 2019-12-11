import React, {useState} from 'react';
import SignInCanvas from './components/register/';
import './globals.scss'
import Loading from './components/loading/';
import {Route} from 'react-router-dom'
import LocalSignUpForm from "./components/register/LocalSignUpForm";
<<<<<<< HEAD
import RegisterForm from './components/register/RegisterForm'
import NoAccount from './components/register/NoAccount'
=======
>>>>>>> 674ceb65bb76ceaebe51e91c537bf49790a56c84
function App() {
  const [loading,setLoading] = useState(false)

  setTimeout(() => {
    //loading && setLoading(false)
  }, 5000);

  return loading ? <Loading /> :(
    <>
      <Route exact path="/" component={SignInCanvas} />
      <Route exact path="/signin" component={LocalSignUpForm} />
      <Route exact path="/new-account" component={NoAccount} />
      <Route exact path="/register" component={RegisterForm} />
    </>
  );
}

export default App;
