import React, {useState} from 'react';
import SignInCanvas from './components/register/';
import './globals.scss'
import Loading from './components/loading/'

function App() {
  const [loading,setLoading] = useState(true)

  setTimeout(() => {
    loading && setLoading(false)
  }, 5000);

  return loading ? <Loading /> :(
    <>
      <SignInCanvas />
    </>
  );
}

export default App;
