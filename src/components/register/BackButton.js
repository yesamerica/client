import React from 'react'
import chevron from '../../images/chevron.svg'
const BackButton = (props) =>{
return <button className="BackButton" onClick={()=>props.history.goBack()}><img src={chevron}/><h2>Go Back</h2></button>
}

export default BackButton;