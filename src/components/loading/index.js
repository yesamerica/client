import React from 'react'
import './loading.scss'
import logo from '../../images/logo.png'
const Loading = () =>{

    return(
        <div className="loadingCanvas">
            <img src={logo} />
        </div>
    )
}

export default Loading