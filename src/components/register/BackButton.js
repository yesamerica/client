import React from 'react'

const BackButton = (props) =>{
return <button onClick={()=>props.history.goBack()}><img/><h2>Go Back</h2></button>
}

export default BackButton;