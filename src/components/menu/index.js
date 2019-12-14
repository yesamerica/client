import React from 'react'

const Menu = () =>{
    const openMenu = e =>{
        e.currentTarget.classList.toggle("change")
      }
    return(
        <div className="container" onClick={openMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
    )

}

export default Menu
