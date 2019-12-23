import React from 'react'
import chevron from '../../../images/chevron.svg'
const NextButton = (props) =>{
return <button className="FinishButton" onClick={()=>props.history.push(props.goto)}><h2>Next</h2><img src={chevron}/></button>
}

export default NextButton;