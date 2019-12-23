import React from 'react'
import chevron from '../../../images/chevron.svg'
const BackButton = (props) =>{
return <button className="FinishButton" onClick={()=>props.history.push("/dashboard")}><img src={chevron}/><h2>Finish</h2></button>
}

export default BackButton;