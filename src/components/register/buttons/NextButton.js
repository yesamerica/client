import React from 'react'
import chevron from '../../../images/chevron.svg'
const NextButton = (props) =>{
return <button className="FinishButton" onClick={()=>props.history.push(props.goto)}><img src={chevron}/><h2>Next</h2></button>
}

export default NextButton;