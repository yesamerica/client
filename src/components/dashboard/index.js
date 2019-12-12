import React from 'react'
import logo from '../../images/logo_plain.svg'
import './dashboard.scss'
import Events from './Events'
import Notifications from './Notifications'
const DashBoard = (props) =>{
return(
    
    <div className="DashBoard" >
        <header>
            <img src={logo} />
            <div className="menu"></div>
        </header>
        <div className="DashBoardContentContainer">
        <Notifications />
        <Events />
        </div>
    </div>
)


}


export default DashBoard