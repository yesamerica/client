import React from 'react'
import chevron from '../../../images/chevron.svg'
const SignInButton = (props) =>{
return <button onClick={()=>props.setActive(true)} className="SignInButton" ><h2>Sign in</h2><img src={chevron}/></button>
}

export default SignInButton;